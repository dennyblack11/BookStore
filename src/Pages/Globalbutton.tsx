import React from "react";
import styled from "styled-components";


type btnSize = {
    size?: 'xxs'| 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}
const ButtonSizes = {
    xxs: {
        padding: [8, 10]
    },
    xs: {
        padding: [10, 12]
    },
    sm: {
        padding: [12, 16]
    },
    md: {
        padding: [14, 18]
    },
    lg: {
        padding: [16, 20]
    },
    xl: {
        padding: [18, 24]
    },
    xxl: {
        padding: [20, 32]
    },
    
}

const Globalbutton = () => {
    return (
        <div>
            <h3>Button components</h3>

            <>
            <StyledBtn size = 'xxs'>xxs</StyledBtn>
            <StyledBtn size = 'xs'>xs</StyledBtn>
            <StyledBtn size = 'sm'>sm</StyledBtn>
            <StyledBtn size = 'md'>md</StyledBtn>
            <StyledBtn size = 'lg'>lg</StyledBtn>
            <StyledBtn size = 'xl'>xl</StyledBtn>
            <StyledBtn size = 'xxl'>xxl</StyledBtn>
            </>
        </div>
    )
}

export default Globalbutton;

const  StyledBtn = styled.button<btnSize>`
    background-color: #ff0000;
    margin-left: 50px;
    padding: 10px 20px;
    border-radius: 10px;
    padding: ${({size = 'md'}) => ButtonSizes[size].padding.map((value, index) => `${value}px`).join(" ")
    };`