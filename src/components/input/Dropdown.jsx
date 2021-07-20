import React, { Component } from "react";

class TextField extends Component {
    render() {
        const { name, onChange, placeholder, value } = this.props;
        return (
            <input
                type="text"
                className="form-control"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
            />
        );
    }
}

export default TextField;
