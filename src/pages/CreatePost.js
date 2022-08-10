import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
import { postInputs } from "../sources/FormSource";
import { uploadFile } from "../services/uploadFileService";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { createPostService } from "../services/postServices";
import { muscleGroupOptions } from "../sources/MuscleGroupsOptions";

function CreatePost() {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
    const [postCreated, setPostCreated] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState(
        muscleGroupOptions[0].value
    );

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        file && uploadFile(file, setPer, setData);
    }, [file]);

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        await createPostService(data, user.uid, setPostCreated);
    };

    const handleGroupChange = (e) => {
        setSelectedGroup(e.target.value);
        setData({ ...data, muscleGroup: e.target.value });
    };

    if (postCreated) {
        navigate("/workouts");
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleAdd}>
                            <FormH1>Create new post</FormH1>
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
                            {postInputs.map((input) => (
                                <Fragment key={input.id}>
                                    <FormLabel>{input.label}</FormLabel>
                                    <FormInput
                                        id={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        onChange={handleInput}
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

export default CreatePost;
