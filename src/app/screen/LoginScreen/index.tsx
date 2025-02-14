import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";

import { Link } from 'expo-router';

import Input from '@components/Input';
import styled from "./style";
import useLogin from "@useCases/UseLogin";

export default function LoginScreen() {

    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        isLoading
    } = useLogin();

    return (
        <View style={styled.container}>
            <Text style={styled.title}>Login</Text>
            <Input
                placeholder="Digite seu email"
                name="email"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                placeholder="Digite sua senha"
                name="password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styled.send} onPress={handleLogin} >
                {isLoading ? <ActivityIndicator size='large' color="#fff" /> : <Text style={styled.sendText}>Entrar</Text>}
            </TouchableOpacity>
            <View style={styled.links}>
                <Link style={styled.titleLinks} href="./ForgotPassword">Esqueceu sua senha?</Link>
                <Link style={styled.titleLinks} href="./RegisterScreen">Cadastre-se</Link>
            </View>
        </View >
    );
}

