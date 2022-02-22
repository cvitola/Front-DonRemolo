import styled from 'styled-components';
import { colorsTheme } from '../../assets/Constants/Constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colorsTheme.white1};
    `;

export const ImgHome = styled.img`
    border-radius: ${ props => props.small ? "50%" : ""};
    width: ${ props => props.small ? "100px" : ""};
    height: ${ props => props.small ? "100px" : ""};
    padding: 10px;
    margin: 10px;
    `;