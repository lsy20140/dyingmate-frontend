import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import ColumnItem from './ColumnItem'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Shelf/main_icon.svg'
import {CgClose} from 'react-icons/cg'
import {ReactComponent as PrevButton} from '../../../../assets/icons/PlayerRoom/Shelf/prev_btn.svg'
import {ReactComponent as NextButton} from '../../../../assets/icons/PlayerRoom/Shelf/next_btn.svg'


export default function Shelf() {
  const [scrollPage, setScrollPage]=useState(0);
  const slideListRef = useRef()
  const slideWrapperRef = useRef()
  const [widthSize, setWidthSize] = useState()
  const [heightSize, setHeightSize] = useState()

  const mapArray= new Array(20).fill(0)

  useEffect(() => {
    setWidthSize(slideWrapperRef.current && slideWrapperRef.current.clientWidth)
    setHeightSize(slideWrapperRef.current && slideWrapperRef.current.clientHeight)
    slideListRef.current.draggable = true
  },[])

const handleScrollLeft = () => {
  setScrollPage(scrollPage - widthSize)
}

const handleScrollRight = () => {
  setScrollPage(scrollPage + widthSize)
}

useEffect(() => {
  slideListRef.current.scrollLeft = scrollPage

},[scrollPage])

  return (  
    <Container>
      <Header>
        <HeaderTitle>
          <MainIcon/>
          <p>웰다잉 칼럼</p>
        </HeaderTitle>
        {/* <CgClose fontSize={'1.5rem'}/> */}
      </Header>
      <SlideWrapper ref={slideWrapperRef}>
        <SlideList ref={slideListRef} heightSize={heightSize} widthSize={widthSize} style={{scrollLeft:scrollPage}}>
          {mapArray.map((i, item) => (
            <ColumnItem key={i} title={'죽음 불안이란?'} content={'죽음은 우리 인생에서 불가피한 순간 중 하나입니다. 이러한 사실은 때로는 불안과 두려움을 일으킬 수 있습니다. 그러나 죽음에 대한 불안은 개인에 따라 다를 수 있으며, 이는 자연스러운 경험입니다. 이해와 받아들임을 통해 이 불안 요소를 완화할 수 있습니다....'} link={'www.naver.com'} />

          ))}
        </SlideList>
      </SlideWrapper>
      <PrevButtonWrapper onClick={(e) => handleScrollLeft(e)} style={scrollPage === 0 ? {opacity: 0, cursor: 'default'} : {}}><PrevButton /></PrevButtonWrapper>
      <NextButtonWrapper onClick={(e) => handleScrollRight(e)} style={(scrollPage === 10) ? {opacity: 0, cursor: 'default'} : {}}><NextButton/></NextButtonWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 60%;
  height: calc(100vh - 16rem);
  min-height: 36.5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  margin: 0 auto;
  outline: 3px solid white;
  color: white;
  background: linear-gradient(237deg, rgba(0, 0, 0, 0.2) -23.03%, rgba(0, 0, 0, 0.05) 119.63%);
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.44rem 2.5rem 0 4.04rem;
  p{
    font-size: 1.5rem;
    font-weight: 700;
  }

`

const HeaderTitle = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

`
const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.25rem 0 2.75rem 0;
  box-sizing: border-box;
  overflow: hidden;
`

const SlideList = styled.div`
  overflow-x:scroll;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2,  ${props => (props.heightSize - 120 ) / 2 }px);
  grid-template-columns: repeat(10, ${props => (props.widthSizes) / 2 }px);
  grid-gap: 1.5rem;

  &::-webkit-scrollbar{
    display: none;
  }
`



const PrevButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  left: 0;
  transform: translate(-50%, 0%);
`

const NextButtonWrapper = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  right: 0;
  transform: translate(50%, 0%);
`