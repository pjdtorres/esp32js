import React from 'react'
import styled from "styled-components";

const Inicio = styled.div`
    min-height: 90vh;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: black;
`;

const Descricao = styled.div`
    flex: 1;
    padding-right: 5rem;
    h1{
        font-weight: bold;
        font-size: 3rem;
        color: yellow;
    }
    h2{
        font-weight: bold;
        font-size: 2rem;
        color: yellow;
    }
`;

const SecaoResumo = ()=>{
    return(

        <Inicio>
            <Descricao>
                <h1>Paulo Torres</h1>
                <h2>Professor</h2>
                <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </p>
                <button>Contato</button>
            </Descricao>

        </Inicio>
    )
}

export default SecaoResumo