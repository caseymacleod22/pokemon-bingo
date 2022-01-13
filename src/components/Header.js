import styled from "styled-components";

import React from 'react'

const Container = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: pink;
    padding-bottom: 40px;
`

const Header = () => {
    return (
        <Container>
            Ironmon Bingo
        </Container>
    )
}

export default Header
