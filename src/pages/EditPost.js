import React, { useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { editPostService, getSinglePostService } from "../services/postServices";
import { uploadFile } from "../services/uploadFileService";
import { postInputs } from "../sources/FormSource";
import {
    Container,
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
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
    const [isEdited, setIsEdited] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        file && uploadFile(file, setPer, setData);
    }, [file]);

    useEffect(() => {
        const fetchData = async () => {
            await getSinglePostService(id, setData);
        };
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const editHandler = async (e) => {
        e.preventDefault();
        await editPostService(id, data, setIsEdited);
    };

    if (isEdited) {
        navigate("/details/" + id);
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={editHandler}>
                            <FormH1>Edit Post</FormH1>
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
