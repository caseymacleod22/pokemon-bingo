import React from 'react'
import styled from 'styled-components'

const Container = styled.td`
    background-color: white;
    height: 105px;
    width: 105px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: lightyellow;
    }
`

const FreeSpace = () => {
    return (
        <Container>
            FREE SPACE
        </Container>
    )
}

export default FreeSpace
