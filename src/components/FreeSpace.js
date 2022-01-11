import React, { useState } from 'react'
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
    const [boxColor, setBoxColor] = useState('white')
    const handleClick = () => {
        if(boxColor === 'white') {
            setBoxColor('lightyellow')
        } else {
            setBoxColor('white')
        }
    }
    return (
        <Container style={{background:boxColor}}onClick={handleClick}>
            FREE SPACE
        </Container>
    )
}

export default FreeSpace
