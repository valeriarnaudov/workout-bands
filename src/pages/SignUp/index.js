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
} from "./SignupElements";

function SignUp() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">workout bands</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Sign Up to our page</FormH1>
                            <FormLabel htmlFor="for" >Username</FormLabel>
                            <FormInput type="text" required placeholder="username"/>
                            <FormLabel htmlFor="for" >Email</FormLabel>
                            <FormInput type="email" required placeholder="Email..."/>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required placeholder="Password..."/>
                            <FormButton type="submit">Sign Up</FormButton>
                            <Text href="/signin">Already have an accout?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignUp;
