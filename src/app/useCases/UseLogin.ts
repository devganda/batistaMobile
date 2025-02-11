import { useState } from "react";

export default function useLogin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return {
        email,
        password,
        setEmail,
        setPassword
    };
}