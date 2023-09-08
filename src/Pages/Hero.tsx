import React from "react";
import { styled } from "styled-components";
import video from "../Videos/videodribble.mp4";
import {FaSearch} from "react-icons/fa";


function Hero () {
    const data = [
        {
            text: "Discover",
        },

        {
            text: "Animation",
        },

        {
            text: "Branding",
        },

        {
            text: "Illustration",
        },

        {
            text: "Mobile",
        },

        {
            text: "Print",
        },

        {
            text: "Product Design",
        },

        {
            text: "Typography",
        },

        {
            text: "Web Design",
        },
    ]

    const data1 = [
        {
            myTest: "Landing page",
        },
        {
            myTest: "ios",
        },
        {
            myTest: "food",
        },
        {
            myTest: "Landingpage",
        },
        {
            myTest: "uxdesign",
        },
        {
            myTest: "appdesign",
        },
    ]

    return (
        
        <div>
            <Container>
                <Video src = {video} autoPlay playsInline loop muted/>
                <Cover/>
                <SubHero>
                <Div>
                  {data.map (({text}) => (
                    <Box bg= "1" cl= ""> {text} </Box>
                    ))}
                </Div>
                <Div1>
                    <h1>Explore the world’s leading <br/> design portfolios</h1>
                    <p>Millions of designers and agencies around the world showcase their portfolio work on Dribbble - the home to the world’s best design and creative professionals.</p>
                    <Input><FaSearch/>
                    <input type= "text" placeholder="Search"/>
                    </Input>

                    <Divv>
                    <Text1>Trending Searches</Text1>
                    {data1.map (({myTest}) => (
                        <Text>{myTest}</Text>
                    ))}
                </Divv>
                </Div1>

                
                </SubHero>
            </Container>
        </div>
    )
}


export default Hero;


const Divv = styled.div`
margin-top: 20px;
width: 110%;
height: 10%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px ;
color: white;
`
const Text = styled.div`
font-size: 13px;
border-radius: 20px;
padding: 7px 10px;
color: white;
border: 1px solid grey;
transition: .3s ease;
cursor: pointer;

&:hover{
    border-color: white;
}
`

const Text1 = styled.div`
`
const Input = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
font-size: 15px;
background-color: white;
width: 85%;
height: 30px;
color: grey;
padding: 13px;
border-radius: 30px;
input{
    outline-width: 0;
    margin-left: 5px;
    flex: 1;
    border: 0;
    font-size: 15px;
    color: gray;

}
`

const Box = styled.div<{bg: string, cl:string}>`
padding: 10px 15px;
background-color: rgba(0, 0, 0, 0.5);
color: white;
border-radius: 30px;
border: 1px solid #242222;
transition: .3s ease;
cursor: pointer;

&:hover {
    background-color: ${({bg}) => (bg? 'white' : "#140809")};
    color: ${({cl}) => cl? "white" : "black"};
}`

const Div = styled.div`
height: 20%;
width: 85%;
display: flex;
justify-content: space-between ;
align-items: center;
font-size: 18px;

`

const Div1 = styled.div`
height: 79%;
width: 46%;
color: white;
display: flex;
align-items: center;
flex-direction: column;
h1{
    font-size: 36px;
    text-align: center;
}
p{
    font-size: 17px;
    text-align: center; 
}

`

const SubHero = styled.div`
width: 100%;
height: 100%;
position: absolute;
display: flex;
align-items: center;
flex-direction: column;
`

const Cover = styled.div`
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.4);
position: absolute;
`

const Video = styled.video`
height: 100%;
width: 100%;
object-fit: cover;
position: absolute;
`

const Container = styled.div`
height: 84vh;
width: 100%;
justify-content: center;
display: flex;
align-items: center;
position: relative;`