import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BoardSrc5 from '../../../assets/img/PlayerRoom/boardSrc5.png'
import NewTextPost from './Board/NewTextPost'
import NewImagePost from './Board/NewImagePost'
import AddPostModal from './Board/AddPostModal'
import { getAllBucketlist } from '../../../apis/api/PlayerRoom/bucketlist'
import axios from 'axios'
import OnePostItem from './Board/OnePostItem'
import { useAuthContext } from '../../../contexts/AuthContext'

export default function Board() {
  const [openModal, setOpenModal] = useState(false)
  const [isImagePost, setIsImagePost] = useState(false)
  const [allBucketlist, setAllBucketlist] = useState()
  const baseUrl = 'https://dying-mate-server.link'
  const {token} = useAuthContext()

  useEffect(() => {
    // async function getAllBucketlist() {
    //   const {data} = await axios.get(`${baseUrl}/bucketlist/load`,{
    //     headers: {Authorization: 'Bearer ' + token},
    //   }, )
    //   setAllBucketlist(data.data.fileResponseList)
    // }
    async function getAllBucketlist() {
      try{
        const {data} = await axios.get(`${baseUrl}/bucketlist/load`,{
          headers: {Authorization: 'Bearer ' + token},
        }, )
        return data
      }
      catch(error) {
        console.log(error)
      }
    }
    
    getAllBucketlist().then((res) =>{
      if(res) {
        console.log("res",res)
        console.log("res.data.fileResponseList", res.data.data.fileResponseList)
        setAllBucketlist(res.data.data.fileResponseList)
      }
      }).then(() => {
        console.log("allBucketlist", allBucketlist)
      })
      .catch((error) => {
        console.log(error)
      })

    // async function getAllBucketlist() {
    //   try{
    //     const {data} = await axios.get('/data/PlayerRoom/allBucketlist.json',{})
    //     return data
    //   }
    //   catch(error) {
    //     console.log(error)
    //   }
    // }
    // getAllBucketlist().then((res) =>{
    //   setAllBucketlist(res.data.fileResponseList)
    // }).then(() => {
    //   console.log("allBucketlist", allBucketlist)
    // })
  },[])

  const handleOnClick = (isImagePost) => {
    setOpenModal(true)
    setIsImagePost(isImagePost)
    console.log("isImagePost", isImagePost)
    console.log("openModal", openModal)
  }

  return (
    <>
      <Container>
        <BoardContainer>
          <NewPostWrapper>
            <NewTextPost handleOnClick={() => handleOnClick(false)}/>
            <NewImagePost handleOnClick={() => handleOnClick(true)} />
            <NewTextPost />
          </NewPostWrapper>
          <PostWrapper>
            {allBucketlist && allBucketlist.map((memo, idx) => (
              <OnePostItem key={idx} memo={memo}/>
            ))}            
          </PostWrapper>
        </BoardContainer>
      </Container>
      {openModal && <AddPostModal isImagePost={isImagePost} setOpenModal={setOpenModal}/>}
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
      cursor: pointer;
    }
  }
`

const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`