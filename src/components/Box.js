import styled from 'styled-components'

const Container = styled.td`
    background-color: white;
    height: 105px;
    width: 105px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Box = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
        </Container>
    )
}

export default Box
