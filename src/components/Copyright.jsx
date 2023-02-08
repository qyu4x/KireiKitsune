import { CopyrightRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 40px;
    color: #000;
    background-color: #edeff0;
    font-size: 16px;
    font-weight: 500px;
    display: flex;
    align-items: center;
    justify-content: center;


`
const Copyright = () => {
    return (
        <Container>
           <CopyrightRounded/>Ariqkhoiri,Inc.2022
        </Container>
    )
}

export default Copyright
