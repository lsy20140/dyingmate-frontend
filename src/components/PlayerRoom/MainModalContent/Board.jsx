import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import BoardSrc4 from '../../../assets/img/PlayerRoom/boardSrc4.png'
import BoardSrc5 from '../../../assets/img/PlayerRoom/boardSrc5.png'
import NewTextPost from './Board/NewTextPost'
import NewImagePost from './Board/NewImagePost'
import AddPostModal from './Board/AddPostModal'

export default function Board() {
  const [openModal, setOpenModal] = useState(false)
  const pos = useState({'posX': 402, 'posY': 376})

  const handleOnClick = () => {
    setOpenModal(true)
  }

  // const handlePosition = (e) => {
  //   window.addEventListener('click', (e) => {
  //     console.log('clientX',e.clientX)
  //     console.log('clientY',e.clientY)
  //   })
  // }

  return (
    <>
      <Container>
        <BoardContainer>
          <NewPostWrapper>
            <NewTextPost handleOnClick={handleOnClick} />
            <NewImagePost />
            <NewTextPost />
          </NewPostWrapper>
          <PostWrapper onClick={handlePosition()}>
            {/* 생성한 post 보여주기  */}
          </PostWrapper>
        </BoardContainer>
      </Container>
      <AddPostModal openModal={openModal} setOpenModal={setOpenModal} pos={pos} />
    </>
  )
}

const Container = styled.div`
  height: calc(100vh - 12rem); 
  padding: 0 6.25rem 0 6.25rem;
  box-sizing: border-box;
  z-index: 999;
  position: relative;
`

const BoardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  // background: url(${BoardSrc5}) no-repeat center;
  background-color: #D9995D;
  border: 5px solid white;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  background-size: fill;
`
const NewPostWrapper = styled.div`
  position: absolute;
  width: 5rem;
  height: 24rem;
  right: -2.5rem;
  top: 50%;
  transform: translate(0, -50%);
  border-radius: 1.25rem;
  background-color: #CAAE86;
  box-shadow: -7px 4px 14px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
    
  & > * {
    filter: drop-shadow(0px 7px 32px rgba(0, 0, 0, 0.25));
    right: 1.5rem;

    &:hover{
      transform: scale(1.2) rotate(10deg);
      transition: transform 0.2s;
    }
  }
`

const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 4rem;
  padding-left: 5rem; 
`