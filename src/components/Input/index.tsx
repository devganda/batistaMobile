import { TextInput } from 'react-native';
import { InputProps } from '@/app/interfaces/Input';
import styles from './styles';

export default function Input(props: InputProps) {
    return (
        <TextInput
            style={styles.input}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
        />
    );
}