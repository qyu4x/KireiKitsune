import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div `
    flex: 1;
    margin: 3px;
    height : 70vh;
    position: relative;
    
    
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}


`

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    color: #c649e6;
    margin-bottom: 20px;
    text-shadow:
    0 0 7px #fff,
    0 0 10px #fff,
    0 0 21px #e68cff,
    0 0 42px #fff,
    0 0 82px #f8c4ff,
    0 0 92px #f8c4ff,
    0 0 102px #f8c4ff,
    0 0 151px #f8c4ff;
`

const Button = styled.button`
    border: none;
    padding 10px;
    background-color: #fff;
    box-shadow: 0.2px 0.5px 0.5px hsl(0deg 0% 0% / 0.49);
    color: #66127a;
    font-weight: 600;
    cursor: pointer;
    
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.image}/>
            <Info>
                <Title>{item.title}</Title>
                <Link to="/product"><Button>SHOP NOW</Button></Link>
            </Info>
        </Container>
    )
}

export default CategoryItem
