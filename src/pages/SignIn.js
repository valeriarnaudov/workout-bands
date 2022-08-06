import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

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
    Text,
} from "../styles/SigninElements";
import { toast } from "react-toastify";

function SignIn() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            localStorage.setItem('user', JSON.stringify(user));
            toast("Welcome back!", { type: "success" });
            navigate("/workouts");
            toast.success("Welcome back! You successfully signed in");
        } catch (error) {
            setError(true);
        }
    };

    //todo forgot password

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleLogin}>
                            <FormH1>Sign In to your accout</FormH1>
                            {error && (
                                <ErrorLable>
                                    Wrong email or password!!!
                                </ErrorLable>
                            )}
                            <FormLabel htmlFor="for" value="email">
                                Email
                            </FormLabel>
                            <FormInput
                                type="email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput
                                type="password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <FormButton type="submit">Sign in</FormButton>
                            <Text href="/forgot">Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
