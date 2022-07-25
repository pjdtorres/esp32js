import React from 'react'
import styled from 'styled-components'

const StyleCard = styled.div`
    box-sizing: border-box;
    background-color: #586100;
    border-color: black;
    cursor: pointer;
    overflow: hidden;
    a{
        text-decoration: none;
    }
`;

const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    h4{
        color: white;
        font-weight: bold;
        text-align: center;
    }
    h5{
        display: flex;
        color: black;
        font-weight: bold;
    }
    h6{
        padding-left: 1rem;
        color: black;
        font-weight: bold;
    }
    
`;

const Info = styled.div`
        color: black;
        font-weight: bold;
`;

const Cards = ({projeto})=>{
    const pegaDados = ()=>{
        fetch('/api/devices').then(res => res.json()).then(response => console.log(response))
    }
    pegaDados()
    return(
        <>
        <StyleCard>
            <Conteudo>
                <img src='https://cdn0.iconfinder.com/data/icons/human-resource-27/60/FAQ__help__question__mind__unknown-512.png' alt='imagem' />
                <Info>
                    <h3>{projeto.nome}</h3>
                    <h5>kW/h : {}&nbsp;&nbsp;&nbsp;Corrente : {}&nbsp;&nbsp;&nbsp;</h5>
                    <h5>Tensão : {}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F.P. : {}</h5>
                </Info>
            </Conteudo>
        </StyleCard>
        {/* <StyleCard>
            <Conteudo>
                <img src='https://www.davismiles.com/wp-content/uploads/sites/1/2018/07/kisspng-human-head-question-mark-face-think-of-question-mark-face-5a71317d5ef069.9681877315173676773889-1024x1024.png' alt='imagem' />
                <Info>
                    <h3>Device : {projeto.nome}</h3>
                    <h4>kW/h : {projeto.kwh}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Corrente : {projeto.corrente}&nbsp;&nbsp;</h4>
                    <h4>Tensão : {projeto.voltagem}&nbsp;&nbsp;&nbsp;&nbsp;F.P. : {projto.fp}</h4>
                </Info>
            </Conteudo>
        </StyleCard> */}
        </>

    )
}

export default Cards