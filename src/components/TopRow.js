import React from 'react'
import styled from 'styled-components'
import Box from './Box'
import { boxPlaceHolder } from '../data'

const Container = styled.table`
    background-color: black;
    margin-left: auto;
    margin-right: auto;
`

const TopRow = () => {
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

export default TopRow

