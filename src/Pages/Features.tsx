import React from "react";
import { styled } from "styled-components";
import {VscThreeBars} from "react-icons/vsc"

const Features = () => {
    return (
        <div>
            <Container>
                <Wrapper>

                    <Card>

                    </Card>

                    <Icon>
                        <VscThreeBars/>
                    </Icon>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Features;

const Icon = styled.div``

const Card = styled.div`
height: 40vh;
width: 400px;
background-color: blue;
position: absolute;
`

const Wrapper = styled.div`
height: 60vh;
width: 100%;
background-color: red;
position: relative;
`

const Container = styled.div`
height: 80vh;
width: 100%;
background-color: gray;
`