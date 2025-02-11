import { useState } from "react";

export default function DataPickerState() {
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const dateFormat = (date: Date): string => {
        let day = date.getDate().toString().padStart(2, '0');
        let month = (date.getMonth() + 1).toString().padStart(2, '0');
        let year = date.getFullYear().toString();

        return `${day}/${month}/${year}`;
    }

    return {
        date,
        setDate,
        show,
        setShow,
        dateFormat
    };
}