import styled, { keyframes } from 'styled-components';
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
    
    &:hover{
        color: ${colorsTheme.green1};
        background: white;
    }`;

export const H2 = styled.h2`
    padding: 10px;
    margin: 10px;
    color: ${colorsTheme.red3};
    `;

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    /*height: 430px;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    `;

const rotate = keyframes`
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
`;
export const Snipper = styled.div`
    margin: 100px 100px;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #659999;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f4791f, #659999);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f4791f, #659999); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    animation: ${rotate} 2s linear infinite;
    &:after{
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 8px;
        box-sizing: border-box;
        border: 32px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: ${rotate} 1.2s infinite;
    }

`;