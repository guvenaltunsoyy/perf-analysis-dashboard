import {useEffect, useState} from 'react';
import {getPaints} from "../apis";

export default function usePaints(startDate, endDate) {
    const [state, setState] = useState({paints: []});

    useEffect(() => {
        getPaints(startDate, endDate).then(res => {
            setState(s => ({...s, paints: res, paintsUpdated: new Date()}));
        });
    }, [startDate, endDate]);
    return [state];
}