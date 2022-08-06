import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";

export const createUserCollection = async (data) => {
    try {
        if (data.age === "" || data.age == null || data.age === undefined) {
            return toast.error("Fill age to continue");
        } else if (
            data.displayName === "" ||
            data.displayName == null ||
            data.displayName === undefined
        ) {
            return toast.error("Fill display name to continue");
        } else if (
            data.img === "" ||
            data.img == null ||
            data.img === undefined
        ) {
            return toast.error("Upload image to continue");
        } else if (
            data.username === "" ||
            data.username == null ||
            data.username === undefined
        ) {
            return toast.error("Fill username to continue");
        } else if (
            data.confirmPassword === "" ||
            data.confirmPassword == null ||
            data.confirmPassword === undefined
        ) {
            return toast.error("Confirm password to continue");
        } else if (
            data.password === "" ||
            data.password == null ||
            data.password === undefined
        ) {
            return toast.error("Fill password to continue");
        }

        if (data.password !== data.confirmPassword) {
            return toast.error("Passwords do not match");
        }

        const res = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        );

        const user = res.user.uid;

        const loggedUser = await setDoc(doc(db, "users", user), {
            email: data.email,
            age: data.age,
            displayName: data.displayName,
            img: data.img,
            username: data.username,
            timeStamp: serverTimestamp(),
        });
        localStorage.setItem("user", JSON.stringify(loggedUser));
    } catch (error) {
        return toast.error(error.message);
    }
};
