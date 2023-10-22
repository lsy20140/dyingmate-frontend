import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../assets/icons/SetUp/main_icon.svg'
import {IoIosClose} from 'react-icons/io'
import {LuPencilLine, LuLogIn, LuRotateCcw} from 'react-icons/lu'
import IconStyledButton from '../ui/IconStyledButton'

export default function SettingModal({showSetup, setShowSetup}) {

  const handleOnClick = (e) => {
    // 1. 에러 방지 팝업 보여주기
    // 2. 로그아웃, 초기화하기
  }

  return (
    <>
    {showSetup && (
      <Overlay>
        <Container>
          <Header>
            <HeaderTitle>
              <MainIcon/>
              <p>환경설정</p>
            </HeaderTitle>
            <IoIosClose onClick={() => setShowSetup(!showSetup)}/>
          </Header>
          <ContentWrapper>
            <ProfileBox>
              {/* 이미지 추가 */}
              <ProfileImg /> 
              <p>워리어즈 님,</p>
              <IconStyledButton width={'100%'} text={'닉네임 수정하기'} fontWeight={'700'} color={'white'} btnColor={`var(--main-color-2)`} icon={<LuPencilLine fontSize='1.5rem'/>} handleOnClick={handleOnClick} />
            </ProfileBox>
            <ButtonWrapper>
              <IconStyledButton width={'100%'} text={'로그아웃'} fontWeight={'500'} color={'white'} btnColor={`var(--main-color)`} icon={<LuLogIn fontSize='1.5rem'/>} handleOnClick={handleOnClick} />
              <IconStyledButton width={'100%'} text={'초기화하기'} fontWeight={'500'} color={`var(--font-gray-3)`} btnColor={'#F0EAE0'} icon={<LuRotateCcw fontSize='1.5rem'/>} handleOnClick={handleOnClick} />
            </ButtonWrapper>
          </ContentWrapper>
        </Container>
      </Overlay>
    )}
    </>

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
  width: 32rem;
  height: 44rem;
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.2) -23.03%, rgba(0, 0, 0, 0.05) 119.63%);
  outline: 2px solid white;
  border-radius: 2.5rem;  
  backdrop-filter: blur(60px);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.25rem 2.25rem 0 5rem;  

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

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 5.2rem 7rem 5.2rem;
  box-sizing: border-box;
  gap: 3.75rem;

`

const ProfileBox = styled.div`
  background-color: #FFF9F0;
  width: 100%;
  border-radius: 0.75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  gap: 0.5rem;

  & > p{
    font-weight: 700;
    color: var(--font-gray-3);
  }
  
  button{
    margin-top: 0.5rem;
  }
`

const ProfileImg = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  background-color: black;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
`