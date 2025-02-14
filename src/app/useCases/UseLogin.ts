import { useState } from "react";

export default function useLogin() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        setIsLoading(true);
        console.log(email, password);
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return {
        email,
        password,
        setEmail,
        setPassword,
        isLoading,
        handleLogin
    };
}