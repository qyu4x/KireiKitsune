import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Cart from '../pages/Cart'

const Container = styled.div`
    height: 60px;   
    ${mobile({height: "50px"})}
`

const Wrraper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}

`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}

    
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}

    
`
const Center = styled.div`
    flex: 1;
    text-align: center;
    
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "24px"})}

    
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: "3"})}

`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
    
`

const Navbar = () => {
    return (
        <Container>
            <Wrraper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>

                        <Search style={{color: "gray", fontSize:16}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>ARA.</Logo></Center>
                <Right>
                    <Link to="/login" style={{textDecoration: 'none', color: '#000'}} ><MenuItem >SIGN IN</MenuItem></Link>
                    <Link to="/register" style={{textDecoration: 'none', color: '#000'}}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to="/comments" style={{textDecoration: 'none', color: '#000'}}><MenuItem>COMMENT</MenuItem></Link>

                    <MenuItem>
                    <Badge badgeContent={2} color="primary">
                    <Link to="/cart" style={{ textDecoration: 'none', color: '#000' }}><ShoppingCartOutlined color="action" /></Link>
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrraper>
        </Container>
    )
}

export default Navbar
