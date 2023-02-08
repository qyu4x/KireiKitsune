import React from 'react'
import styled from 'styled-components'
import { db } from '../firebaseConfig'
import { collection, addDoc, getDocs, doc} from 'firebase/firestore'
import { useState, useEffect } from 'react'

const Container = styled.div`
    margin-left: 10px;
    margin-top: 10px;
`
const Wrapper = styled.div`
    display: flex;
    padding-top: 10px;

`

const Profile = styled.img`
    border-radius: 50%;
    height: 50px;

`

const Message = styled.div`
    margin: 0px 10px;

    justify-content: center;
    align-items: center;
    

`
const Username = styled.h2`
    font-size: 18px;
    font-weight: 600;


`

const SubMessage = styled.span`
    font-size: 16px;


`


const CommentsList = () => {
    // query data from firebase with react hooks
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async() => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        };
        getUsers();
    }, []);
    return (
        <Container  className='CommentsList'>
           
                {users.map((user) => {
                        return (
                            <Wrapper>
                                <Profile src='https://64.media.tumblr.com/cb9584af16caa6352c036205f39313ea/f17b66b34c0d21bf-58/s540x810/5f9124a09f1869d7dbf09b9458d14b756b0ee6ab.jpg'>
                                </Profile>
                                <Message>
                                {""}
                                    <Username>{user.name}</Username>
                                    <SubMessage>{user.message}</SubMessage>
                                </Message>
                            </Wrapper>
                        );
                    })}
            
        </Container>
    )
}

export default CommentsList
