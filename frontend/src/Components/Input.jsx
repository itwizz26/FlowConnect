import React from "react";

const Input = (props) => {
    return (
        <input type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} maxLength={props.maxLength} className="form-control" />
    );
}

export default Input;