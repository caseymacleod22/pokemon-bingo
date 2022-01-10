import React from 'react'
import styled from 'styled-components'

const Container = styled.table`
    background-color: red;
`

const Box = styled.td`
    background-color: black;
    width: 100px;
    height: 105px;
    `

const ThirdRow = () => {
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

export default ThirdRow