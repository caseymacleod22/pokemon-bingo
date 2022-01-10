import React from 'react'
import styled from 'styled-components'

const Grid = styled.table`
    background-color: red;
`
const Box = styled.td`
    background-color: black;
    width: 100px;
    height: 105px;
`

const TopRow = () => {
    return (
        <Grid>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </Grid>
    )
}

export default TopRow

