import React from 'react'
import styled from 'styled-components'
import ColumnItem from './ColumnItem'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Shelf/main_icon.svg'
import {CgClose} from 'react-icons/cg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default function Shelf() {
  return (
    <Container>
      <Header>
        <HeaderTitle>
          <MainIcon/>
          <p>웰다잉 칼럼</p>
        </HeaderTitle>
        <CgClose fontSize={'1.5rem'}/>
      </Header>
      <ColumnWrapper>
        <CarouselProvider
          naturalSlideWidth={380}
          naturalSlideHeight={100}
          totalSlides={3}
          style={{ height: "33rem"}}
          
        >
          <Slider>
            <Slide index={0} style={{display: flex, f}}>
              <ColumnItem title={'Title1'} content={'content1content1content1content1content1content1content1content1content1content1content1content1content1'} link={'www.naver.com'} />
              <ColumnItem title={'Title1'} content={'content1content1content1content1content1content1content1content1content1content1content1content1content1'} link={'www.naver.com'} />
            </Slide>
            <Slide index={1}><ColumnItem title={'Title2'} content={'content'} link={'www.naver.com'} /></Slide>
            <Slide index={2}><ColumnItem title={'Title3'} content={'content'} link={'www.naver.com'} /></Slide>
            <Slide index={3}><ColumnItem title={'Title4'} content={'content'} link={'www.naver.com'} /></Slide>
            <Slide index={4}><ColumnItem title={'Title5'} content={'content'} link={'www.naver.com'} /></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </ColumnWrapper>
      
    </Container>
  )
}

const Container = styled.div`
  width: 70%;
  height: 46rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 2.5rem;  
  margin: 0 auto;
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
const ColumnWrapper = styled.div`
  height: 33rem;
  padding: 2.25rem 3.75rem 3.75rem 3.7rem;
`