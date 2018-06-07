import React from "react";
import styled from "styled-components";

const Input = styled.input`
    background: #c53023;
    color: white;
    border: 0px;
    padding: 5px;
    border-radius: 5px;
    margin-right: 10px;

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ea9088;
        opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ea9088;
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
        color: #ea9088;
    }
`;

const SearchBar = (props) => {
    return (
        <input
            className="searchBar"
            type="text"
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.initialText? props.initialText : ""}
        />
    );
};

export default SearchBar;