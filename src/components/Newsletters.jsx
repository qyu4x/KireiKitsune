import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    height: 60vh;
    display: flex;
    background-color: #f5eae9;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1 `
    margin-bottom: 20px;
    font-size: 70px;
    ${mobile({fontSize: "36px"})}

`
const Desc = styled.div `
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center"})}

`

const InputContainer = styled.div `
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%"})}

`

const Input = styled.input `
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button `
    flex: 1;
    background-color: #a959f0;
    border: none;
    color: #fff;
`

const Newsletters = () => {
    return (
        <Container>
            <Title>2th birthday special</Title>
            <Desc>Get up to 50% off your favorite product</Desc>
            <InputContainer>
                <Input placeholder=' Enter your email here'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletters
