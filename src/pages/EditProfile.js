import React, { Fragment, useContext, useEffect, useState } from "react";
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    UploadBtn,
    UploadedImg,
} from "../styles/FormPagesElements";
import { userInputsOnEdit } from "../sources/FormSource";
import { useNavigate } from "react-router-dom";
import { uploadFile } from "../services/uploadFileService";
import { editUserService, getUserData } from "../services/userServices";
import { AuthContext } from "../contexts/AuthContext";

function EditProfile() {
    const [file, setFile] = useState("");
    const [userData, setUserData] = useState({});
    const [per, setPer] = useState(null);
    const [isEdited, setIsEdited] = useState(false);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        file && uploadFile(file, setPer, setUserData);
    }, [file]);

    useEffect(() => {
        const fetchData = async () => {
            await getUserData(user.uid, setUserData);
        };
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setUserData({ ...userData, [id]: value });
    };

    const editHandler = async (e) => {
        e.preventDefault();
        await editUserService(user.uid, userData, setIsEdited);
    };

    if (isEdited) {
        navigate("/profile/" + user.uid);
    }

    return (
        <Container>
            <FormWrap>
                <FormContent>
                    <Form onSubmit={editHandler}>
                        <FormH1>Profile edit</FormH1>
                        {userData.src && ( <UploadedImg src={userData.src}/> )}
                        <UploadBtn htmlFor="file" style={{ fontSize: "20px" }}>
                            Upload image or video
                        </UploadBtn>
                        <FormInput
                            type="file"
                            id="file"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                        {userInputsOnEdit.map((input) => (
                            <Fragment key={input.id}>
                                <FormLabel value={input.value}>
                                    {input.label}
                                </FormLabel>
                                <FormInput
                                    id={input.id}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    onChange={handleInput}
                                    value={userData[input.id]}
                                />
                            </Fragment>
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
    );
}

export default EditProfile;
