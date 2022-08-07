import { doc, getDoc } from "firebase/firestore";
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
        setUserData(user.data());
    } catch (error) {
        toast.error("Error while getting user data");
    }
};
