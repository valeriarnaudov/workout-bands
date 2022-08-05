import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";


//MAIN PAGE SERVICES

export const getAllPosts = async () => {
    const list = []
    const postsSnapshop = await getDocs(collection(db, "posts"));
    postsSnapshop.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
    });
    return list;
}

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
}

//DETAILS PAGE SERVICES

export const deletePostService = async (id) => {
    return await deleteDoc(doc(db, "posts", id));
}