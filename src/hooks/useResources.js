import React, {useEffect, useState} from 'react';
import {getResources} from "../apis";

export default function useResources(startDate, endDate) {
    const [state, setState] = useState({resources: []});
    useEffect(() => {
        getResources(startDate, endDate).then(res => {
            setState(s => ({...s, resources: res, resourcesUpdated: new Date()}));
        });
    }, [startDate, endDate]);

    return [state];
}