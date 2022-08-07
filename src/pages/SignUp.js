import { Fragment, useContext, useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
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
    Text,
} from "../styles/SignupElements";
import { userInputs } from "../sources/FormSource";
import { createUserCollection } from "../services/authService";
import { uploadFile } from "../services/uploadFileService";
import { AuthContext } from "../contexts/AuthContext";

function SignUp() {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPer] = useState(null);
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
