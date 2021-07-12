import React, {useEffect, useState} from 'react';
import {getTTFB} from "../apis";

export default function useTTFB(startDate, endDate) {
    const [state, setState] = useState({ttfb: []});
    useEffect(() => {
        getTTFB(startDate, endDate).then(res => {
            setState(s => ({...s, ttfb: res, ttfbUpdated: new Date()}));
        });
    }, [startDate, endDate]);
    return [state, new Date()];
}