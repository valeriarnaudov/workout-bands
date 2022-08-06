import { useContext, useState } from "react";
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
} from "../styles/SigninElements";
import { signUp } from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await signUp(email, password);
        if (user) {
            navigate("/workouts");
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
