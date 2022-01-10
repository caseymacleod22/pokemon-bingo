import styled from 'styled-components'
import { boxPlaceHolder } from '../data'
import Box from './Box'

const Container = styled.table`
    background-color: black;
    margin-left: auto;
    margin-right: auto;
`

// const Box = styled.td`
//     background-color: white;
//     width: 100px;
//     height: 105px;
//     cursor: pointer;

//     &:hover {
//         background-color: lightblue;
//     }
//     `

const FifthRow = () => {
    return (
        <Container>
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default FifthRow