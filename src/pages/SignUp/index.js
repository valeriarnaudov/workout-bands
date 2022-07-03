import React, { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

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
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { userInputs } from "../../Sources/FormSource";

function SignUp() {
    const [error, setError] = useState(false);
    // const [file, setFile] = useState("");
    const [data, setData] = useState({});

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp(),
            });
        } catch (error) {
            setError(error);
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
                            {error && <ErrorLable>{error}</ErrorLable>}

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
                            <FormButton type="submit">Sign in</FormButton>
                            <Text href="/signin">Have an account?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignUp;
