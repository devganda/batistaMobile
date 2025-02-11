import DateTimePicker from '@react-native-community/datetimepicker';
import { DataPickerProps } from '@/app/interfaces/DataPicker';

export default function DataPicker(props: DataPickerProps) {

    return (
        <DateTimePicker
            value={props.value}
            mode={props.mode}
            is24Hour={props.is24Hour}
            display={props.display}
            onChange={props.onChange}
        />
    )
}