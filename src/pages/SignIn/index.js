import React from "react";
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Text,
} from "./SigninElements";

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Workout</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your accout</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required />
                            <FormButton type="submit">Sign in</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
