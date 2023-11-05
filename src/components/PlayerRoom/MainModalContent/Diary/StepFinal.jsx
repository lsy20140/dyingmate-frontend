import React, { useEffect } from 'react'
import styled from 'styled-components'
import {ReactComponent as MainIcon} from '../../../../assets/icons/PlayerRoom/Diary/main_icon.svg'
import axios from 'axios'  
import { useAuthContext } from '../../../../contexts/AuthContext'
import { useDiaryContext } from '../../../../contexts/DiaryContext'

export default function StepFinal() {
  const formData = new FormData()
  const {token} = useAuthContext()
  const {diary} = useDiaryContext()
  const baseUrl = 'https://dying-mate-server.link'

  useEffect(() => {
    for ( const key in diary ) {
      formData.append(key, diary[key]);
    }
    axios
    .post(`${baseUrl}/funeral/save`, formData, {
      headers: {
        'Content-Type' : 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res)
        
    }).catch(function (error) {
        // 오류발생시 실행
        console.log(error.message)
    })
  },[])

  return (
    <Content>
      <TextArea>
        <MainIcon/>
        <Text>
          <p>나의 죽음이 모두 준비되었어요.</p>
          <p>직접 작성한 묘비명과 영정사진을 확인하고 나의 죽음에 대해 <br/>
            고민해보는 시간을 가져보아요. 현재 삶에 대한 미련은 없는지,<br/>
            죽음이 당장 나에게 다가온다면 어떤 기분일지에 대해 깊게 고민할 수 있을 거예요.<br/>
          </p>
        </Text>
      </TextArea>
    </Content>
  )
}

const Content = styled.div`
  width: 60rem;
  height: 30rem;
  display: flex;
  flex-direction: row;
  gap: 3.75rem;
  margin: 0 4.25rem;
  align-items: center;
  justify-content: center;
`

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  width: fit-content;
  gap: 1.8rem;
 
`
const Text = styled.div`
  text-align: left;
  font-size: 1.125rem;
  p:nth-child(1){
    font-size: 1.25rem;
    margin-bottom: 0.4rem;
  }

`