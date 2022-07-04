import { useEffect, useState } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";
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
} from "./CreateElements";
import { db, storage } from "../../../firebase";
import { postInputs } from "../../Sources/FormSource";

function CreatePost() {
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
            const userId = JSON.parse(localStorage.getItem("user")).uid;

            await setDoc(doc(db, "posts"), {
                title: data.title,
                description: data.description,
                owner: userId,
                img: data.img,
                video: data.video,
                likes: [],
                muscheGroup: data.muscheGroup,
                timeStamp: Timestamp.fromDate(new Date()),
                comments: [],
            });

            navigate("/workouts");
        } catch (error) {
            return error;
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
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
                            {postInputs.map((input) => (
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
                                Submit
                            </FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default CreatePost;
