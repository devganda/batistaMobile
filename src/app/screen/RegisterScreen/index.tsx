import { View, Text, TouchableOpacity } from "react-native";
import Input from '@components/Input';
import DataPicker from '@components/DataPicker';
import Select from '@components/Select';
import styledLogin from "../LoginScreen/style";
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DataPickerState from "@/app/state/DataPicker/DataPickerState";
import styled from "./styles";

export default function RegisterScreen() {
    //const { email, setEmail, password, setPassword } = useRegister();
    const {
        date,
        setDate,
        show,
        setShow,
        dateFormat
    } = DataPickerState();

    const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShow(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };

    const handleChangeData = () => {
        setShow(true);
        setDate(new Date());
    }

    return (
        <View style={styledLogin.container}>
            <Text style={styledLogin.title}>Cadastre-se!</Text>
            <Input
                placeholder="Nome Completo"

            />
            <Input
                placeholder="Email"

            />

            <Input
                placeholder="Senha"
                secureTextEntry
            />

            <Input
                placeholder="Data de Nascimento"
                value={date ? dateFormat(date) : ''}
                onChangeText={handleChangeData}
            />
            {show && (
                <DataPicker
                    value={date}
                    mode="date"
                    display="default"
                    is24Hour={true}
                    onChange={handleChange}
                />
            )}

            <Select
                label="Selecione a sua Igreja"
                value=""
                items={[
                    { label: 'Igreja Batista Plenitude', value: '1' },
                    { label: 'Assembleia de Deus Madureira', value: '2' },
                    { label: 'Igreja Presbiteriana de Pinheiros', value: '3' }
                ]}
                onValueChange={() => { }}
                selectedValue=""
            />
            <TouchableOpacity style={styledLogin.send} onPress={() => { }} >
                <Text style={styledLogin.sendText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}