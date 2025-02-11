
interface Option {
    label: string;
    value: string;
}

export interface SelectProps {
    label?: string;
    selectedValue: string | undefined;
    value: string | undefined;
    items: Option[];
    onValueChange: (value: string) => void;
}