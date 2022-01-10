import React from 'react'
import styled from 'styled-components'

const Container = styled.table`
    background-color: black;
    margin-left: auto;
    margin-right: auto;
`
const Box = styled.td`
    background-color: white;
    width: 100px;
    height: 105px;
    cursor: pointer;
`

const TopRow = () => {
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

export default TopRow

