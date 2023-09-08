import React from "react";
import styled from "styled-components";

interface iButton {
    text: string;
    bcc : string;
    color: string;
}

const Globbalbutto: React.FC <iButton> = ({
    text, color, bcc
}) => {
    return (
        <Button bcc = {bcc} color = {color}> {text} </Button>
    )
}

export default Globbalbutto;

const Button = styled.button <{bcc: string; color: string}>`
background-color: ${({bcc}) => bcc};
/* width: 0px;
height: 35px; */
padding: 9px 18px;
color: ${({color}) => color};
border-radius: 7px;
border: 1px solid #f5ecec;

cursor: pointer;

&:hover{
    background-color: #e6dede;
}
`