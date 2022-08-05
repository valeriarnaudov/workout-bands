import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getUserName = async (userId) => {
    const docRef = await doc(db, "users", userId);
    const userData = await getDoc(docRef);

    const displayName = userData.data().displayName;

    return displayName;
};
