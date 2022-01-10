import React from 'react'
import styled from 'styled-components'

const Container = styled.table`
    background-color: red;
    margin-left: auto;
    margin-right: auto;
`

const Box = styled.td`
    background-color: black;
    width: 100px;
    height: 105px;
    `

const FifthRow = () => {
    return (
        <Container>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </Container>
    )
}

export default FifthRow