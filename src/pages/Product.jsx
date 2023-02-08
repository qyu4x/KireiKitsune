
import { Add, FavoriteBorderOutlined, Remove } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Annonuncement from '../components/Annonuncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletters from '../components/Newsletters'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container = styled.div`
`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({padding: "10px", flexDirection: "column"})}


`
const ImageContainer = styled.div`
    flex: 1;

`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}


`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}

    

`
const Title = styled.h1`
    font-weight: 500;
    ${mobile({fontWeight: "300", fontSize: "30px"})}

    

`

const SubTitle = styled.p `
    margin-top: 5px;
    color: #919090;
    font-size: 14px;

`
const Desc = styled.p`
    margin: 20px 0px;


`
const Line = styled.hr `
    margin: 20px 0px;

`

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
   
`
const Price = styled.span`
    font-size: 22px;
    color: #ff6040;

`

const PriceRight = styled.p `
    font-weight: 500;
    margin-left: 20px;
    color: #ff6040;
`

const PaymentDiscount = styled.div`
    display: flex;
    margin-top: 20px;
`
const MinPayment = styled.div`
    margin-right: 30px;
    
`

const VerticalLine = styled.hr`
    width: 1px;
    size: 500;
    color: #d9d7d7;
    margin-right: 20px;
`
const SubPayment = styled.p`
    font-size: 13px;
    color: #919090;
    
`
const DescPayment = styled.p`
    margin-top: 5px`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    padding: 20px 0px;
    ${mobile({width: "100%"})}

    

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 600;
    
`

const Amount = styled.span`
    width: 60px;
    height: 28px;
    border-radius = 15px;
    display: flex;
    border: 1px solid #dbdbdb;
    justify-content: center;
    align-items: center;

`

const ReleaseContainer = styled.div`

`

const Release = styled.div`
    padding-top: 10px;
    color: #919090;
`

const ButtonContainer = styled.div`
    padding-top: 20px;
    display: flex;
    ${mobile({width: "100%"})}


`
const ButtonLeft = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #919090;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px 40px;
    font-size: 15px;
    font-weight: 550;
    cursor: pointer;
    cursor: pointer;
    &:hover {
        background-color: #de2702;
        transition: all 0.3s ease;
        color: #fff;

    }
    ${mobile({padding: "10px 20px"})}



`
const ButtonRight = styled.button`
    display: flex;
    flex: 1;
    margin: 0 25px;
    justify-content: center;
    align-items: center;
    border:none;
    border-radius: 5px;
    background-color: #ff6040;
    color: #fff;
    padding: 10px 40px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
        background-color: #de2702;
        transition: all 0.3s ease;
    }

`
const Category = styled.div`
    display: flex;
   

`

const TitleCategory = styled.span`
    

`

const TitleList = styled.div `
    padding: 2px 0px;
    margin-top: 10px;

`
const DescCategory = styled.div`
   

`

const DescList = styled.span `

    background-color: none;
    padding: 2px 20px;
    margin: 10px 0px;
    margin-left: 40px;
    border-radius: 10px;
    display: flex;
    align-items: left;
    justify-content: left;
    cursor: pointer; &:hover {
        background-color: #ff6040;
        transition: all 0.1s ease;
        color: #fff;
    }


`

const ProductDesc = styled.h2 `
    font-weight: 700;
    margin-left: 20px;

`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Annonuncement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.kyou.id/items/43225-pvc-figure-17-megumi-kato-first-meeting-outfit-ver.jpg.webp"/>
                </ImageContainer>
                
                <InfoContainer>
                    <Title>[FLASH PO] PVC Figure 1/7 Megumi Kato - First Meeting Outfit Ver.</Title>
                    <SubTitle>By Good Smile Company</SubTitle>
                    <Line/>
                    <PriceWrapper>
                        <Price>Price $2000</Price>
                        <PriceRight>Earn 1550 Friendship Points!</PriceRight>                    
                    </PriceWrapper>
                    <PaymentDiscount>
                            <MinPayment>
                                <SubPayment>Minimum DP</SubPayment>
                                <DescPayment>Price $1000</DescPayment>
                            </MinPayment>
                            <VerticalLine/>
                            <MinPayment>
                                <SubPayment>Full Payment Discount</SubPayment>
                                <DescPayment>Discount $5</DescPayment>
                            </MinPayment>
                    </PaymentDiscount>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                    </AddContainer>
                    <ReleaseContainer>
                        <Release>Releases September 2021</Release>
                        <Release>Estimated Arrival October-November 2021</Release>
                    </ReleaseContainer>
                    <ButtonContainer>
                        <ButtonLeft><FavoriteBorderOutlined style={{marginRight: "10px"}}/>Wishlist</ButtonLeft>                     
                        <ButtonRight><Link to="/cart"style={{textDecoration: 'none', color: "#fff"}}>Add to Cart</Link></ButtonRight>
                    </ButtonContainer>
                    <Line/>

                    
                    <Desc>The first scale figure of the "boring" heroine Megumi Kato in her outfit from her first appearance!
                            From the animated movie "Saekano the Movie: Finale" comes a scale figure of the main heroine Megumi
                            Kato in her clothing from when she originally met Tomoya! The figure is based on a Blu-ray jacket 
                            illustration by Kurehito Misaki from the anime series' second season.
                            
                            The figure features a highly dynamic sculpt with cherry blossoms and a canvas adorning the base. 
                            Kurehito Misaki's unique style from the original illustration has been meticulously recreated with 
                            elaborate paintwork. Be sure to add this special figure featuring Megumi's outfit from the very beginning 
                            to your collection.
                    </Desc>
                    <Category>
                        <TitleCategory>
                            <TitleList>Character</TitleList>
                            <TitleList>Series</TitleList>
                            <TitleList>Category</TitleList>
                            <TitleList>Manufacturer</TitleList>
                        </TitleCategory>
                        <DescCategory>
                            <DescList>Megumi Kato</DescList>
                            <DescList>Saenai Heroine no Sodatekata</DescList>
                            <DescList>Scaled Figure</DescList>
                            <DescList>Good Smile Company</DescList>
                            
                        </DescCategory>
                    </Category>
                   
                </InfoContainer>
            </Wrapper>
            
            <ProductDesc>More Stuff Like This!</ProductDesc>
            <Products/>
            <Newsletters/>
            <Footer/>
        </Container>
    )
}

export default Product
