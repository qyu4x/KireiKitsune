import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annonuncement from '../components/Annonuncement'
import Products from '../components/Products'
import Newsletters from '../components/Newsletters'
import Footer from '../components/Footer'
import { mobile } from '../responsive'


const Container = styled.div`
    

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.h1`
    margin: 20px;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({display: "flex", flexDirection: "column", width: "0px 20px"})}


`

const FilterText = styled.span`
    font-weight: 600;
    font-size: 20px;
    margin-right: 20px
    ${mobile({marginRight: "0px"})}

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "5px 0px"})}


`

const Option = styled.option`

`
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Annonuncement />
            <Title>Action Figure</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Merk
                        </Option>
                        <Option>Hasbro</Option>
                        <Option>NECA</Option>
                        <Option>Bandai</Option>
                        <Option>Prime 1 Studio</Option>
                        <Option>Kotobukiya</Option>
                        <Option>Banpresto</Option>
                        <Option>Hasbro</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Type
                        </Option>
                        <Option>Figma</Option>
                        <Option>Nendroid</Option>
                        <Option>Petite Chara</Option>
                        <Option>S.H.Figuarts</Option>
                        <Option>Gasaphon</Option>
                        <Option>Action Figure</Option>
                    </Select>
                </Filter>
                <Filter><FilterText>Sort Products</FilterText>
                    <Select>
                        <Option disabled selected>
                            Newest
                        </Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>

                    </Select></Filter>
            </FilterContainer>
            <Products />
            <Newsletters />
            <Footer />

        </Container>
    )
}

export default ProductList
