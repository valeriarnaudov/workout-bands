import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { getUserName } from "./userServices";

//MAIN PAGE SERVICES

export const getAllPosts = async () => {
    try {
        const list = [];
        const postsSnapshop = await getDocs(collection(db, "posts"));
        postsSnapshop.forEach((doc) => {
            list.push({ id: doc.id, ...doc.data() });
        });
        return list;
    } catch (error) {
        toast.error("Error while getting all posts");
    }
};

export const likePostService = async (id, userId) => {
    try {
        const docRef = doc(db, "posts", id);
        const docSnapshot = await getDoc(docRef);
        const likes = docSnapshot.data().likes;

        if (likes.includes(userId)) {
            throw new Error(`Already liked this post!`);
        }

        await updateDoc(docRef, {
            likes: [...likes, userId],
        });
    } catch (error) {
        toast.error("Error while liking post");
    }
};

//CREATE PAGE SERVICES

export const createPostService = async (data, userId, setPostCreated) => {
    try {
        if (
            data.title === "" ||
            data.title == null ||
            data.title === undefined
        ) {
            return toast.error("Fill title to continue");
        } else if (
            data.muscleGroup === "" ||
            data.muscleGroup == null ||
            data.muscleGroup === undefined
        ) {
            return toast.error("Fill muscle group to continue");
        } else if (
            data.src === "" ||
            data.src == null ||
            data.src === undefined
        ) {
            return toast.error("Upload image or video to continue");
        } else if (
            data.description === "" ||
            data.description == null ||
            data.description === undefined
        ) {
            return toast.error("Fill description to continue");
        }

        const ownerName = await getUserName(userId);
        const docRef = doc(collection(db, "posts"));
        await setDoc(docRef, {
            title: data.title,
            description: data.description,
            owner: userId,
            ownerName,
            src: data.src || "",
            likes: [],
            muscleGroup: data.muscleGroup,
            timeStamp: Timestamp.fromDate(new Date()),
        });
        toast.success("Successfully created new post");
        setPostCreated(true);
    } catch (error) {
        toast.error("Error while creating post");
    }
};

//DETAILS PAGE SERVICES

export const deletePostService = async (id) => {
    try {
        return await deleteDoc(doc(db, "posts", id));
    } catch (error) {
        toast.error("Error while deleting post");
    }
};

//COMMENTS PAGE SERVICES

export const getAllComments = async (id) => {
    const list = [];
    try {
        const commentData = await getDocs(
            collection(db, "posts", id, "comments")
        );
        commentData.docs.forEach((com) => {
            list.push({ ...com.data(), id: com.id });
        });
        list.sort((a, b) => b.createdAt - a.createdAt);
        return list;
    } catch (error) {
        toast.error("Error while getting comments");
    }
};

export const createCommentService = async (id, comment, userId, ownerName) => {
    try {
        await setDoc(doc(collection(db, "posts", id, "comments")), {
            text: comment,
            owner: { id: userId, name: ownerName },
            createdAt: Timestamp.fromDate(new Date()),
            likes: [],
        });
    } catch (error) {
        toast.error("Error while creating comment");
    }
};

export const likeCommentService = async (
    id,
    commentId,
    currentComment,
    userId
) => {
    try {
        await updateDoc(doc(db, "posts", id, "comments", commentId), {
            likes: [...currentComment.likes, userId],
        });
    } catch (error) {
        toast.error("Error while liking comment");
    }
};

//PROFILE PAGE POSTS

export const ownerPosts = async (userId, setPosts) => {
    try {
        const userPosts = [];
        const allPosts = await getAllPosts();
        allPosts.forEach((post) => {
            if (post.owner === userId) {
                userPosts.push(post);
            }
        });
        userPosts.sort((a, b) => a.timeStamp - b.timeStamp);
        return setPosts(userPosts);
    } catch (error) {
        toast.error("Error while getting user posts");
    }
};

//EDIT PAGE SERVICES

export const getSinglePostService = async (id, setData) => {
    try {
        const post = await getDoc(doc(db, "posts", id));
        setData(post.data());
    } catch (error) {
        toast.error("Error while getting the post");
    }
};

export const editPostService = async (id, data, setIsEdited) => {
    try {
        if (
            data.title === "" ||
            data.title == null ||
            data.title === undefined
        ) {
            return toast.error("Fill title to continue");
        } else if (
            data.muscleGroup === "" ||
            data.muscleGroup == null ||
            data.muscleGroup === undefined
        ) {
            return toast.error("Fill muscle group to continue");
        } else if (
            data.src === "" ||
            data.src == null ||
            data.src === undefined
        ) {
            return toast.error("Upload image or video to continue");
        } else if (
            data.description === "" ||
            data.description == null ||
            data.description === undefined
        ) {
            return toast.error("Fill description to continue");
        }

        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            title: data.title,
            description: data.description,
            owner: data.owner,
            src: data.src,
            likes: data.likes,
            muscleGroup: data.muscleGroup,
            timeStamp: data.timeStamp,
            ownerName: data.ownerName,
        });
        setIsEdited(true);
    } catch (error) {
        toast.error("Error updating");
        console.log(error);
    }
};
