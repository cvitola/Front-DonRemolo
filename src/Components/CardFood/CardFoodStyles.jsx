import styled from 'styled-components';


export const Card = styled.div`
    width: 330px;
    height: 430px;
    border-radius: 8px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    margin: 20px;
    text-align: center;
    transition: all 0.25s;

    &:hover{
        transform: translateY(-15px);
        box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    }
    
    & img{
        width: 330px;
        height: 220px;
    }
    
    & h4{
        padding: 5px;
        font-weight: 600;
    }
    
    & p{
        padding: 5px;
        font-size: 16px;
        font-weight: 300;
    }
    
    `;