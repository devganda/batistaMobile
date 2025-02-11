import { Picker } from "@react-native-picker/picker";
import { SelectProps } from "@interfaces/Select";
import { View } from "react-native";
import styled from "./styles";

export default function Select(props: SelectProps) {

    return (
        <View style={styled.pickerContainer}>
            <Picker style={styled.picker} selectedValue={props.selectedValue} onValueChange={props.onValueChange}>
                <Picker.Item label={props.label} value={props.value} />
                {props.items.map((item, index) => (
                    <Picker.Item key={index} label={item.label} value={item.value} />
                ))}
            </Picker>
        </View>
    )
}

