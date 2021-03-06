import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../firebase";

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
} from "./SigninElements";
import { AuthContext } from "../../AuthContext/AuthContext";
import { doc, getDoc } from "firebase/firestore";

function SignIn() {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({ type: "LOGIN", payload: user });
            navigate("/workouts");

            //TO CHECK FOR RELOADING PAGE
            window.location.reload();

        } catch (error) {
            setError(true);
        }
    };

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
