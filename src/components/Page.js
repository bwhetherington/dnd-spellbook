import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: auto;
    ${'' /* height: 100%; */}
    text-align: center;
    ${'' /* background: rgb(240, 240, 240); */}
`;

const Page = (props) => (
    <Wrapper>
        {props.children}
    </Wrapper>
);

export default Page;