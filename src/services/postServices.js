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
import { db } from "../firebase";

//MAIN PAGE SERVICES

export const getAllPosts = async () => {
    const list = [];
    const postsSnapshop = await getDocs(collection(db, "posts"));
    postsSnapshop.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
    });
    return list;
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
        console.log(error);
    }
};

//DETAILS PAGE SERVICES

export const deletePostService = async (id) => {
    return await deleteDoc(doc(db, "posts", id));
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
        return list;
    } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
    }
};
