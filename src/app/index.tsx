import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import { Link } from 'expo-router';


export default function Index() {
    return (
        <View style={styled.container}>
            <Text style={styled.title}>Bem Vindo!</Text>
            <Link href="./screen/LoginScreen">Login</Link>
        </View>
    );
}

const styled = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
        backgroundColor: '#435684',
    },

    title: {
        color: 'white',
        marginBottom: 10
    }

});

