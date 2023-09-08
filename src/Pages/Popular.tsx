import React from "react";
import styled from "styled-components";
import {FaAngleDown} from "react-icons/fa";
import {VscThreeBars} from "react-icons/vsc";


function Popular () {
    return (
        <div>
            <Container>
                <Div>
                    <p>Popular</p>
                    <FaAngleDown/>
                </Div>
                <Div1>
                <VscThreeBars/>
                <p>Filters</p>
                </Div1>
            </Container>
        </div>
    )
}

export default Popular;

const Div1 = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
border: 1px solid silver;
padding: 0 18px;
cursor: pointer;
P{
    margin-left: 10px;
    font-size: 14px;
    margin-top: 15px;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
border: 1px solid silver;
padding: 0.1px 20px;
cursor: pointer;
P{
    margin-right: 12px;
    font-size: 14px;
    margin-top: 9px;
}
`

const Container = styled.div`
margin-left: 63px;
width: 91%;
height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;

`