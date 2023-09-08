// import { styled } from "styled-components";
// import Button from "./Button";

// const Header = () => {
//   return (
//     <div>
//       <Container>
//         <Wrapper>
//           <Navs>
//             <Logo>myLogo</Logo>
//             <Nav>Find Talents</Nav>
//             <Nav>For Designers</Nav>
//             <Nav>Inspirations</Nav>
//             <Nav>Learn design</Nav>
//             <Nav>Go Pro</Nav>
//           </Navs>
//           <Buttons>
//             <ButText bg = "1" clr = "1">Log In</ButText>
//             <ButText bg = "" clr = "">Sign Up</ButText>
//             <Dot />
//             <Button />
//           </Buttons>
//         </Wrapper>
//       </Container>
//     </div>
//   );
// };
// export default Header;
// const Dot = styled.div`
//   width: 5px;
//   height: 6px;
//   background-color: black;
//   margin: 0px 10px;
//   margin-top: 5px;
//   border-radius: 50%;
// `;

// const ButText = styled.div<{bg: string; clr: string}>`
// width: 100px;
// height: 30px;
// border-radius: 20px;
// padding: 3px 25px;
// background-color: ${({bg}) => (bg? "white" : " black")}
// color: ${({clr}) => (clr ? "black" : "white")}

// $: hoverP{
//   transform : translate(0 -3px)
// }`;

// const Buttons = styled.div`
//   height: 100%;

//   display: flex;
//   align-items: center;
// `;

// const Nav = styled.div`
//   margin: 0px 5px;
//   font-weight: 600;
//   transition: all 350s;

//   &:hover {
//     transform: scale(1.05);
//     cursor: pointer;
//     color: white;
//   }
// `;

// const Logo = styled.div`
//   font-size: 35px;
//   font-weight: 900;
//   font-style: italic;
//   margin-right: 60px;
// `;

// const Navs = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 100%;
//   width: 96%;
//   align-items: center;
// `;

// const Container = styled.div`
//   width: 100%;
//   height: 70px;
//   display: flex;
//   justify-content: center;
// `

import React, { useState } from 'react'
import styled from 'styled-components'
import {FiMenu} from "react-icons/fi";

function Header() {

  const [show, setShow] = useState (false);

  const Toggle = () => {
    setShow (!show);
  }

  return (
    <div>
        <SectionHeader>
          <Div>
            <h1>Dribble</h1>
            <nav>Find talent</nav>
            <nav>For designers</nav>
            <nav>Inspiration</nav>
            <nav>Learn design</nav>
            <nav>Go Pro</nav>
          </Div>
          <Div1>
            <Button bg="1" cl="" Hbg='' Hcl="1">LogIn</Button>
            <Button bg="" cl="1" Hbg="1" Hcl="">SignUp</Button>
          </Div1>

          <Icon onClick = {Toggle}>
            <FiMenu/>
          </Icon>
          {show? (
            <Card>
              
            </Card>
          ): null}
        </SectionHeader>
    </div>
  )
}
export default Header;

const Card = styled.div`
  width: 70%;
  height: 300px;
  background-color: chocolate;
  position: absolute;
  top: 10vh;
  right: 65px;

`

const Icon = styled.div`
display: flex;
align-items: center;
color: black;
margin-right: 40px;
font-size: 30px;
cursor: pointer;


  
`

const Button = styled.div<{bg: string, cl: string, Hbg: string, Hcl: string}>`
display: inline-block;
padding: 15px 20px;
background-color:${({ bg }) => bg? "white" : "black"};
border-radius: 25px;
color: ${({cl}) => (cl? "white" : "black")};
cursor: pointer;
transition: 350ms ease;
&:hover{
  background-color: ${({Hbg}) => ( Hbg? "white" : "black")};
  color: ${({Hcl}) => ( Hcl? "white" : "black")};
}
`;
const Div = styled.div`
width:55%;
height:90%;
display: flex;

justify-content: space-around;
align-items: center;
h1{
  font-size: 45px;
  font-family: brush script MT;
}
nav{
  font-size: 20px;
  cursor: pointer;
}
`;
const Div1 = styled.div`
width:15%;
height:90%;
display: flex;
justify-content: space-around;
align-items: center;
font-size: 20px;
margin-left: 280px;
@media screen and (max-width: 768px) {
  display: none;
}
`;

const SectionHeader = styled.div`
color: black;
height: 16vh;
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media screen and (max-width: 768px) {
  display: none;
}
`