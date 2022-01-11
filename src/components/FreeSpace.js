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
    const [boxColor, setBoxColor] = useState('')
    const handleClick = () => {
        if(boxColor === '') {
            setBoxColor('lightyellow')
        } else {
            setBoxColor('')
        }
    }
    return (
        <Container style={{background:boxColor}}onClick={handleClick}>
            FREE SPACE
        </Container>
    )
}

export default FreeSpace
