import { collection, doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { db, storage } from "../../firebase";
import { postInputs } from "../Sources/FormSource";
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
} from "../styles/EditPostElements";

function EditPost() {
    const { id } = useParams();
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
                        setData((prev) => ({ ...prev, src: url }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file]);

    useEffect(() => {
        const fetchData = async () => {
            const post = await getDoc(doc(db, "posts", id));
            setData(post.data());
        };

        fetchData();
    }, []);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const editHandler = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(db, "posts", id);
            await updateDoc(docRef, {
                title: data.title,
                description: data.description,
                owner: data.owner,
                src: data.src,
                likes: data.likes,
                muscleGroup: data.muscleGroup,
                timeStamp: data.timeStamp,
                comments: data.comments,
            });

            navigate("/details/" + id);
        } catch (error) {
            return error;
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={editHandler}>
                            <FormH1>Edit Post</FormH1>
                            {errorHandler && (
                                <ErrorLable>{errorHandler}</ErrorLable>
                            )}
                            <FormLabel
                                htmlFor="file"
                                style={{ fontSize: "20px" }}
                            >
                                Image or video link below:{" "}
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
                                    <FormLabel value={input.value}>
                                        {input.label}
                                    </FormLabel>
                                    <FormInput
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
                                        value={data[input.id]}
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

export default EditPost;
