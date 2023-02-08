
import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Annonuncement from '../components/Annonuncement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}


`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border : ${props=>props.type === "filled" && "none"};
    background-color : ${props=>
        props.type === "filled" ? "#ff6040" : "transparent"};
    color : ${props=>props.type === "filled" && "white"};
`

const TopTexts = styled.div`

`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    font-weight: 400;
    ${mobile({display: "none"})}

`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}

`

const Info = styled.div`
    flex: 3;

`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;

`
const SummaryTitle = styled.h1`
    font-weight: 300;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
`
const SummaryItemPrice = styled.span`
`

const Button = styled.button`
    width: 100%;
    cursor: pointer;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    border:none;
    border-radius: 5px;
    background-color: #ff6040;
    color: #fff;
    padding: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #de2702;
        transition: all 0.3s ease;
    }

`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}


`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;

`
const Image = styled.img`
    width: 200px;

`
const Details = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

`
const ProductName = styled.span`

`
const ProductId = styled.span`

`

const ProductCharacter  = styled.span`

`
const ProductSeries  = styled.span`

`

const PriceDetail = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}


`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 300;
    ${mobile({marginBottom: "20px"})}

`

const LineArt = styled.hr`
    border: none;
    background-color: #eee;
    height: 1px;
    margin: 10px 0px;
`

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Annonuncement/>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                    <Top>
                        <TopButton>CONTINUE SHOPPING</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (2)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="filled">CHECKOUT NOW</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://cdn.kyou.id/items/43225-pvc-figure-17-megumi-kato-first-meeting-outfit-ver.jpg.webp"/>
                                    <Details>
                                        <ProductName><b>Product : </b>PVC Figure 1/7 Megumi Kato - First Meeting Outfit Ver.</ProductName>
                                        <ProductCharacter><b>Character</b> : Kato Megumi</ProductCharacter>
                                        <ProductSeries><b>Series</b> : Saenai Heroine no Sodatekata</ProductSeries>
                                        <ProductId><b>ID : </b>0051252125</ProductId>

                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove/>
                                        <ProductAmount>3</ProductAmount>
                                        <Add/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ 11250</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <LineArt/>
                            <Product>
                                <ProductDetail>
                                    <Image src="https://cdn.kyou.id/items/39678-pvc-figure-17-snow-miku-snow-princess-ver.jpg.webp"/>
                                    <Details>
                                        <ProductName><b>Product : </b>[NATARU SEERU] PVC Figure 1/7 Snow Miku</ProductName>
                                        <ProductCharacter><b>Character</b> : Hatsune Miku</ProductCharacter>
                                        <ProductSeries><b>Series</b> : Vocaloid</ProductSeries>
                                        <ProductId><b>ID : </b>0051252125</ProductId>

                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Remove/>
                                        <ProductAmount>1</ProductAmount>
                                        <Add/>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ 4000</ProductPrice>
                                </PriceDetail>
                            </Product>
                        </Info>
                        <Summary>
                            <SummaryTitle>ORDER WAIFU</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal </SummaryItemText>
                                <SummaryItemPrice>$ 15250</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping </SummaryItemText>
                                <SummaryItemPrice>$ 6</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>Shipping Discount </SummaryItemText>
                                <SummaryItemPrice>$ 6</SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem type="total">
                                <SummaryItemText >Total </SummaryItemText>
                                <SummaryItemPrice>$ 15244</SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                    </Bottom>
                
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
