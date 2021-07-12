import React from 'react';
import './label.css';

export default function Label({text,children,color,fontSize = 16, ...rest}) {

    return <p className="h1" style={{color, fontSize}} {...rest}>{ text ?? children}</p>
}