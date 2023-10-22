import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as MainIcon } from '../../assets/icons/PlayerRoom/friend_list.svg'
import {IoIosClose} from 'react-icons/io'
import OneFriendItem from './FriendList/OneFriendItem'
import OneRequestItem from './FriendList/OneRequestItem'
import axios from 'axios'
import { getAllFriends, getAllRequests } from '../../apis/api/PlayerRoom/friendList'

export default function FriendListModal({setFriendListModal}) {
  const [searchInput, setSearchInput] = useState('')
  
  const [friendList, setFriendList] = useState([])
  const [requestList, setRequestList] = useState([])


  const handleOnChange = (e) => {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    axios.all([getAllFriends(), getAllRequests()])
    .then(
      axios.spread((res1, res2) => {
        setFriendList(res1);
        setRequestList(res2);
      })
    )
    .catch(() => {})
  },[])


  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>
            <MainIcon/>
            <p>친구 목록</p>
          </HeaderTitle>
          <IoIosClose onClick={() => setFriendListModal()}/>
        </Header>  
        <InputWrapper>
          <SearchInput onChange={handleOnChange} placeholder='사용자의 이름을 입력하세요.' value={searchInput ?? ''}/>
          <AddButton isFill={searchInput!==''}>친구 추가</AddButton>
        </InputWrapper>
        <ListContainer>
          <ListWrapper>
            <p>친구 목록</p>
            {friendList && friendList.map((data, idx) => (
              <OneFriendItem key={data.id} userId={data.userId} username={data.userName}/>
            ))}
          </ListWrapper>
          <ListWrapper>
            <p>친구 요청</p>
            {requestList && requestList.map((data, idx) => (
              <OneRequestItem key={data.id} userId={data.userId} username={data.userName}/>
            ))}
          </ListWrapper>
        </ListContainer>
      </Container>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: absolute;
  display: flex;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  width: 60rem;
  height: 42rem;
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.2) -23.03%, rgba(0, 0, 0, 0.05) 119.63%);
  outline: 3px solid white; 
  border-radius: 2.5rem;  
  backdrop-filter: blur(60px);
  box-sizing: border-box;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 2.25rem 0 3.75rem;  

  svg {
    color: white;
    font-size: 2.5rem;
  }

`

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  p{
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
`

const InputWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin: 2.25rem 3.75rem 3rem 3.75rem;
  height: 3rem;
  box-sizing: border-box;
  align-items: center;

`

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #BDBDBD;
  border-radius: 0.75rem;
  background-color: white;
  box-sizing: border-box;

  &::placeholder {
    color: #ccc;
  }
`

const AddButton = styled.button`
  width: 16.5rem;
  height: 100%;
  border-radius: 0.75rem;
  padding: 0.5rem 1.25rem;
  font-weight: 700;
  box-sizing: border-box;
  border: none;
  background-color: ${(props) => props.isFill ? 'var(--main-color)' : '#DEDEDE'};
  color: ${(props) => props.isFill ? 'white' : '#999'};
`

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.2rem;
  margin: 3rem 3.75rem 0 3.75rem;
  color: white;

`
const ListWrapper = styled.div`
  flex: 50%;
  
  & > p {
    margin-bottom: 1rem;
    font-weight: 400;

  }
`
