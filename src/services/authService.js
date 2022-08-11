import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../firebase";
import { DefaultPictureImg } from "../variables/DefaultProfileImg";

export const signUp = async (email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredentials.user;
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Welcome back! You successfully signed in");
    } catch (error) {
        toast.error("Incorrect email or password");
    }
};

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
            data.src === "" ||
            data.src == null ||
            data.src === undefined
        ) {
            toast.info("Default profile picture will be used");
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
        } else if (
            data.gender === "" ||
            data.gender == null ||
            data.gender === undefined
        ) {
            return toast.error("Select gender to continue");
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
            gender: data.gender,
            displayName: data.displayName,
            src: data.src || DefaultPictureImg,
            username: data.username,
            timeStamp: serverTimestamp(),
        });
        localStorage.setItem("user", JSON.stringify(loggedUser));
    } catch (error) {
        return toast.error(error.message);
    }
};
