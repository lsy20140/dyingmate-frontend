import React from 'react'
import styled from 'styled-components'
import TestProfile from '../../../assets/img/splashBg.png'


export default function OneSearchItem({isExist, email, name, photo, handleAddFriend}) {
  const handleAddFriend = () => {
    // 친구 추가/요청 api 연동
  }

  return (
    <>
    {isExist ?
      <ItemBox>
        <UserInfo>
          {/* 사용자 프로필 사진으로 변경 필요 */}
          <Profile image={TestProfile} />
          <IdNameText>
            <p>@{email}</p>
            <p>{name}</p>
          </IdNameText>
        </UserInfo>
        <RequestButton onClick={handleAddFriend}>친구 추가</RequestButton>
      </ItemBox>
      :
      <ItemBox><p>존재하지 않는 사용자입니다.</p></ItemBox>
    }
    </>
  )
}


const ItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: fit-content;
  padding: 0.75rem 1rem;
  border-radius: 0.75rem;
  box-sizing: border-box;
  outline: none;

  &:hover{
    background-color: #eaeaea;
    cursor: pointer;
  }
`

const UserInfo = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`

const Profile = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-image: url(${props => props.image});
`

const IdNameText = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  

  p{
    &:first-child{
      font-weight: 600;
    }

    &:last-child {
      font-weight: 400;
      font-size: 0.875rem;
    }
  }
`

const RequestButton = styled.button`
  height: 100%;
  padding: 0.5rem 1.25rem;
  border-radius: 0.75rem;
  background-color: var(--main-color);
  font-weight: 500;
  border: none;
  color: white;
`