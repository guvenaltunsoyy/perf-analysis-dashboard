import React, {useState} from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CustomInput = React.forwardRef((props, ref) => {

    return (
        <button onClick={props.onClick} ref={ref} style={{color: '#2189e3'}}>
            {props.value || props.placeholder}
        </button>
    )

})
export default function Picker({show = false, onDateChange, ...rest}) {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    return (
        <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomInput/>}
            onChange={(update) => {
                setDateRange(update)
                if (update[0] && update[1]) onDateChange(update[0], update[1]);
            }}
            placeholderText="Select Date"
            dateFormat="dd/MM/yyy"
            maxDate={new Date()}
        />
    );
}