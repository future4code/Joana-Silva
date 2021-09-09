import React from 'react';
import styled from "styled-components"

const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 5px;
    height: 70px;
`

const CardPequenoImg = styled.img`
    width: 30px;
    margin-right: 0px;
`
const CardPequenoDiv = styled.div`
    display: flex;
    justify-items: flex-start;
`
const CardPequenoH4 = styled.h4`
    margin-bottom: 10px;
    margin: 5px;
`
const CardPequenoP = styled.p` 
    margin-bottom: 10px;
    margin: 5px;
`

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
    
            <CardPequenoImg src={ props.imagem } />
            <CardPequenoDiv>
                <CardPequenoH4>{ props.nome }</CardPequenoH4>
                <CardPequenoP>{ props.descricao }</CardPequenoP>
            </CardPequenoDiv>
        </CardPequenoContainer>
    )
}

export default CardPequeno;