import React, { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../contexts/AuthContext";
import {
    editPostService,
    getSinglePostService,
} from "../services/postServices";
import { uploadFile } from "../services/uploadFileService";
import { postInputs } from "../sources/FormSource";
import { muscleGroupOptions } from "../sources/MuscleGroupsOptions";
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    OptionContainer,
    SelectOption,
    UploadBtn,
} from "../styles/FormPagesElements";

function EditPost() {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
    const [isEdited, setIsEdited] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(
        muscleGroupOptions[0].value
    );

    const navigate = useNavigate();

    useEffect(() => {
        file && uploadFile(file, setPer, setData);
    }, [file]);

    useEffect(() => {
        const fetchData = async () => {
            const ownerId = await getSinglePostService(id, setData);
            if (ownerId !== user.uid) {
                toast.error("You are not authorized to edit this post");
                navigate("/workouts");
            }
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
        window.confirm("Are you sure you want to edit this post?");
        await editPostService(id, data, setIsEdited);
    };

    const handleGroupChange = (e) => {
        setSelectedGroup(e.target.value);
        setData({ ...data, muscleGroup: e.target.value });
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
                            <UploadBtn
                                htmlFor="file"
                                style={{ fontSize: "20px" }}
                            >
                                Upload image or video
                            </UploadBtn>
                            <FormInput
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            <FormInput
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            {postInputs.map((input) => (
                                <Fragment key={input.id}>
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
                                </Fragment>
                            ))}
                            <OptionContainer
                                value={selectedGroup}
                                onChange={handleGroupChange}
                            >
                                {muscleGroupOptions.map((option) => (
                                    <SelectOption
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.text}
                                    </SelectOption>
                                ))}
                            </OptionContainer>
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
