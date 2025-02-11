export interface InputProps {
    name?: string,
    placeholder?: string,
    value?: string,
    secureTextEntry?: boolean,
    onChangeText?: (text: string) => void;
    onFocus?: () => void;
}