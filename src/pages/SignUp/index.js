import React, { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
    Container,
    ErrorLable,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text,
} from "./SignupElements";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userInputs } from "../../Sources/FormSource";

function SignUp() {
    const [errorHandler, setError] = useState(false);
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPer(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    setError(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setData((prev) => ({ ...prev, img: url }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file]);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {

            if (data.age === "") {
                return setError("Fill age to continue");
            } else if (data.displayName === "") {
                return setError("Fill display name to continue");
            } else if (data.img === "") {
                return setError("Upload image to continue");
            } else if (data.username === "") {
                return setError("Fill username to continue");
            }

            if (data.password !== data.confirmPassword) {
                return setError("Passwords do not match");
            }

            
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });


            navigate("/workouts");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Workout</Icon>
                    <FormContent>
                        <Form onSubmit={handleAdd}>
                            <FormH1>Create new user</FormH1>
                            {errorHandler && (
                                <ErrorLable>{errorHandler}</ErrorLable>
                            )}
                            <FormLabel
                                htmlFor="file"
                                style={{ fontSize: "20px" }}
                            >
                                Image:{" "}
                                <FaUpload
                                    style={{
                                        background: "red",
                                        padding: "10px",
                                        fontSize: "40px",
                                        borderRadius: "50%",
                                        color: "white",
                                    }}
                                />
                            </FormLabel>
                            <FormInput
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            {userInputs.map((input) => (
                                <>
                                    <FormLabel>{input.label}</FormLabel>
                                    <FormInput
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                    />
                                </>
                            ))}
                            <FormButton
                                disabled={per !== null && per < 100}
                                type="submit"
                            >
                                Sign in
                            </FormButton>
                            <Text href="/signin">Have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignUp;
