import styled from 'styled-components';
import { colorsTheme } from '../../assets/Constants/Constants';

export const H1 = styled.h1`
    padding: 10px;
    margin: 10px;
    color: ${colorsTheme.red2};
    `;

export const P = styled.p`
    padding: 5px;
    margin: 5px;
    font-size: 16px;
    `;

export const Button = styled.button`
    border: none;
    color: white;
    padding: 10px;
    margin: 10px;
    background: ${colorsTheme.green1};
    border-radius: 10px;
    box-shadow: 1px 1px 1px grey;
    
    & :hover{
        color: ${colorsTheme.green1};
        background: white;
    }`;

export const H2 = styled.h2`
    padding: 10px;
    margin: 10px;
    color: ${colorsTheme.red3};
    `;