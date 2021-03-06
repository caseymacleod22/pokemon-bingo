import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { boxPlaceHolder } from '../data'
import FreeSpace from './FreeSpace'

const Container = styled.table`
    background-color: black;
    margin-left: auto;
    margin-right: auto;
`

const ThirdRow = () => {
    return (
        <Container>
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            <FreeSpace />
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
            {boxPlaceHolder.map((item) => (
                <Box item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default ThirdRow