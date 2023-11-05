import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../assets/icons/PlayerRoom/Desktop/main_icon.svg'
import {IoIosClose} from 'react-icons/io'
import OneCommentItem from './Desktop/OneCommentItem'

export default function Desktop() {
  return (
    <Overlay>
      <Container>
        <Header>
          <HeaderTitle>
            <MainIcon/>
            <p>죽음에 대해 토론해봐요!</p>
          </HeaderTitle>
          <IoIosClose/>
        </Header>
        <ScrollSection>
          <TopicWrapper>
            <p>2023 7월 둘째주</p>
            <p>이번 주 대화 주제</p>
            <TopicBox>
              <TopicContent>"인생에서 우리가 경험하는 모든 것은 결국에는 무엇을 위한 것인지, 그리고 인생의 근본적인 의미는 어떤 것일까요? 어떤 방식으로 우리는 존재하고 경험하는 것이 의미 있는 것으로 여겨질 수 있을까요?"</TopicContent>
              <hr/>
              <AddCommentButton>
                댓글 달기
              </AddCommentButton>
            </TopicBox>
          </TopicWrapper>
          <CommentWrapper>
            <OneCommentItem name={'댓글 작성자 이름'} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'} likeCount={3} date={'2023-07-20 17:43'}/>
            <OneCommentItem name={'댓글 작성자 이름'} content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'} likeCount={3} date={'2023-07-20 17:43'}/>
          </CommentWrapper>
        </ScrollSection>
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
  width: 45rem;
  height: 42rem;
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.2) -23.03%, rgba(0, 0, 0, 0.05) 119.63%);
  outline: 2px solid white; 
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
    cursor: pointer;
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

const ScrollSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 3.75rem 3.75rem 3.75rem;
  overflow: auto;
  height: calc(100% - 14rem);
`

const TopicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > p:nth-child(1){
    font-size: 0.875rem;
    color: #DEDEDE;
    margin-bottom: 0.25rem;
  }

  & > p:nth-child(2){
    font-size: 1.5rem;
    font-weight: 700;
    color: #F3F3F3;
    margin-bottom: 1rem;
  }
`

const TopicBox = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 1.25rem;
  outline: 1px solid var(--main-color);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;
  hr{
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.10);    ;
  }
`

const TopicContent = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--font-gray-3);
  text-align: left;
  font-weight: 400;
`

const AddCommentButton = styled.button`
  padding: 0.5rem 1.25rem;
  background-color: var(--main-color);
  color: white;
  border-radius: 0.75rem;
  font-weight: 600;
  line-height: 1.75rem;
  border: none; 
`

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`