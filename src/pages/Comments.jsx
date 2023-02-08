import React from 'react'
import styled from 'styled-components'
import CommentsList from '../components/CommentsList'
import { mobile } from '../responsive'
import { db } from '../firebaseConfig'
import { collection, addDoc} from 'firebase/firestore'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)

    ),
    url("https://i.ibb.co/QK3pgDQ/wallpaperflare-com-wallpaper-1.jpg")repeat fixed 100% center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    
`

const Wrapper = styled.div`
    padding: 20px;
    width: 80%;
    height: 85vh;
    display: flex;
    justify-content: space-between; 
    background-color: #fff;
    border-radius: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    ${mobile({width: "80%", flexDirection: "column"})}
    
`
const Left = styled.form`
    flex: 1;
    

`
const Input = styled.input`
    min-width: 80%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 5px;
`

const TextArea = styled.textarea`
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 5px;
    ${mobile({width: "95%"})}

`
const Right = styled.div`
    flex: 2;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    height: 85vh;
    overflow-y: scroll;
    
      
`

const Title = styled.h1`
    font-size: 22px;
    font-weight: 500;
    margin: 20px 20px 40px 20px;

`

const Button = styled.button`
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    border:none;
    border-radius: 5px;
    margin-left: 180px;
    background-color: #b72de0;
    color: #fff;
    padding: 15px 15px;
    width: 40%;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    opacity: 1;
    &:hover {
        background-color: #8b07b3;
        transition: all 0.3s ease;
    }
    ${mobile({fontSize: "12px"})}
    
`

const Comments = () => {
    // insert data from firebase with react hooks
    const [name, setName] = React.useState("");
    const [message, setMessage] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name !== "" && message !== "") {
            await addDoc (collection(db, "users"), {
                name,
                message,
                completed: false,
            });
            setName("");
            setMessage("");
        }
    };
    return (
        <Container>
            <Wrapper>
                <Left onSubmit={handleSubmit} className='input_container'>
                    <Input placeholder="your name here"type={"text"} value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextArea rows="15" cols="55" placeholder="your comments ?" type={"text"} value={message}
                        onChange={(e) => setMessage(e.target.value)}>                 
                    </TextArea>
                    <Button className='button_container'>Send Comments</Button>
                </Left>
                <Right>
                    <Title>
                        Comments
                    </Title>
                    <CommentsList/>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Comments
