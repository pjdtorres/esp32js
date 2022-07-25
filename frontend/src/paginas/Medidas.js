import React from 'react'
import styled from 'styled-components'
// import Cards from '../componentes/Cards';
// import { useApi } from '../hooks/useApi';

const ListaCards = styled.div`
    display: grid;
    grid-template-columns: 200px repeat(auto-fill, 200px);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const ListaDevices = styled.div`
    min-height: 30ch;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const Medidas = ()=>{
    // const {data} = useApi('/devices')
    // console.log(data)
    return(
        <h1>Medidas</h1>
        // <ListaDevices>
        //     <ListaCards>
        //         {data?.message?.map(projeto => {
        //             return(<Cards projeto={projeto}/>)
        //         })}
        //         <Cards />
        //     </ListaCards>
        // </ListaDevices>
    )
}

export default Medidas