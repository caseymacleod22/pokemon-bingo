import styled from 'styled-components'

const Container = styled.td`
    background-color: white;
    height: 105px;
    width: 105px;
    cursor: pointer;

    &:hover {
        background-color: lightyellow;
    }
`

const Image = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 70%;
`

const Name = styled.p`
    color: blue;
    font-size: 10px;
    text-align: center;
    padding-bottom: 0;
`

const Box = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Name>{item.name}</Name>
        </Container>
    )
}

export default Box
