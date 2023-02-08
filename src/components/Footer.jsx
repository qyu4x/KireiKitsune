import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}


`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const Logo = styled.h1`
`

const Desc = styled.p`
    margin: 20px 0px;
`


const SosialContainer = styled.div`
    display: flex;
    
`
const SosialIcon = styled.div`
    width: 40px;
    height: 40px;
    color: #fff;
    border-radius: 50%;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}


`

const Title = styled.h3 `
    margin-bottom: 30px;

`

const List = styled.ul`
    list-style: none;
    margin: 0;
    paddong: 0;
    display: flex;
    flex-wrap: wrap;

`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fcf7ff"})}


`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.img`
    width: 50%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ARA.</Logo>
                <Desc>
                ARA is an electronic commerce company or often called an online store. Since its founding in 2021,
                ARA has transformed into a unicorn that is influential not only in Indonesia but also in Southeast Asia
                </Desc>
                <SosialContainer>
                    <SosialIcon color="3b5999">
                        <Facebook/>
                    </SosialIcon>
                    <SosialIcon color="e4405f">
                        <Instagram/>
                    </SosialIcon>
                    <SosialIcon color="55acee">
                        <Twitter/>
                    </SosialIcon>
                    <SosialIcon color="e60023">
                        <Pinterest/>
                    </SosialIcon>
                </SosialContainer>
            </Left>
            <Center>
                <Title>Features</Title>
                <List>
                    <ListItem>About ARA</ListItem>
                    <ListItem>Intellectual Property Rights</ListItem>
                    <ListItem>Carrear</ListItem>
                    <ListItem>Blog</ListItem>
                    <ListItem>Bridestory</ListItem>
                    <ListItem>ARA Parents</ListItem>
                    <ListItem>Mitra Blog</ListItem>
                    <ListItem>AraPoints</ListItem>
                    <ListItem>ARA Affiliate Program</ListItem>
                    <ListItem>ARA B2B Digital</ListItem>
                    <ListItem>Mitra ARA</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}}/>Jl. Dr. Sutomo No.24, Pati Kidul, Kec. Pati, Kabupaten Pati, Jawa Tengah</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}}/>(021) 53691015 / (0823) 82351252125</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}}/>arakawaii@ara.com</ContactItem>
                <Payment src="https://go.rapyd.net/hubfs/Indonesia-Logos-2.jpg"/>
            </Right>
            
            
        </Container>
    )
}

export default Footer
