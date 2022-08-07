import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase";

export const getUserName = async (userId) => {
    try {
        const docRef = await doc(db, "users", userId);
        const userData = await getDoc(docRef);

        const displayName = userData.data().displayName;

        return displayName;
    } catch (error) {
        toast.error("Error while getting user name");
    }
};

export const getUserData = async (userId, setUserData) => {
    try {
        const user = await getDoc(doc(db, "users", userId));
        console.log(user.data());
        setUserData(user.data());
    } catch (error) {
        toast.error("Error while getting user data");
    }
};

export const editUserService = async (id, userData, setIsEdited) => {
    try {
        if (
            userData.username === "" ||
            userData.username == null ||
            userData.username === undefined
        ) {
            return toast.error("Fill username to continue");
        } else if (
            userData.displayName === "" ||
            userData.displayName == null ||
            userData.displayName === undefined
        ) {
            return toast.error("Fill display name to continue");
        } else if (
            userData.src === "" ||
            userData.src == null ||
            userData.src === undefined
        ) {
            return toast.error("Upload image or video to continue");
        } else if (
            userData.age === "" ||
            userData.age == null ||
            userData.age === undefined
        ) {
            return toast.error("Fill age to continue");
        }

        const docRef = doc(db, "users", id);
        await updateDoc(docRef, {
            username: userData.username,
            displayName: userData.displayName,
            age: userData.age,
            src: userData.src,
        });
        setIsEdited(true);
    } catch (error) {
        toast.error("Error updating");
    }
};
