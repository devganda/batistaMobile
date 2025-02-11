
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
type Mode = "date" | "time" | "datetime" | "countdown";
type Display = "default" | "compact" | "inline" | "spinner" | "clock" | "calendar";

export interface DataPickerProps {
    label?: string;
    value: Date | undefined;
    mode: Mode;
    is24Hour: boolean;
    display: Display;
    onChange: (event: DateTimePickerEvent, selected?: Date) => void;
}