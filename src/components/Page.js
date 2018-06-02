import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: auto;
    ${'' /* height: 100%; */}
    text-align: center;
    ${'' /* background: rgb(240, 240, 240); */};
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;

const Page = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);

export default Page;