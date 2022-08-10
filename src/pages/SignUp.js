import { Fragment, useContext, useEffect, useState } from "react";
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
    Text,
    UploadBtn,
    UploadedImg,
} from "../styles/FormPagesElements";
import { genderOptions, userInputs } from "../sources/FormSource";
import { createUserCollection } from "../services/authService";
import { uploadFile } from "../services/uploadFileService";
import { AuthContext } from "../contexts/AuthContext";

function SignUp() {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
    const [selectGender, setSelectGender] = useState(genderOptions[0].value);
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

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
        await createUserCollection(data);
    };

    const handleGenderChange = (e) => {
        setSelectGender(e.target.value);
        setData({ ...data, gender: e.target.value });
    };

    if (user) {
        navigate("/workouts");
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleAdd}>
                            <FormH1>Create new user</FormH1>
                            {data.src && ( <UploadedImg src={data.src}/> )}
                            <UploadBtn
                                htmlFor="file"
                                style={{ fontSize: "20px" }}
                            >
                                Upload profile image
                            </UploadBtn>
                            <FormInput
                                type="file"
                                id="file"
                                style={{ display: "none" }}
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            {userInputs.map((input) => (
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
                                value={selectGender}
                                onChange={handleGenderChange}
                            >
                                {genderOptions.map((option) => (
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
                                Sign Up
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
