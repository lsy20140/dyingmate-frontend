import { useAuthContext } from '../../../contexts/AuthContext'
import { defaultInstance } from '../../utils/api'

const baseUrl = 'https://dying-mate-server.link'
const {token} = useAuthContext()

export const getAllFriends = async () => {
  try {
    const {data} = await defaultInstance.get('http://localhost:3000/data/PlayerRoom/friendData.json')
    return data
  } 
  catch (error) {
    console.log(error)
  }
}


export const getAllRequests = async () => {
  try {
    const {data} = await axios.get(`${baseUrl}/friend/list`, {
      headers: {Authorization: 'Bearer ' + token},
    }, )
    return data
  }
  catch(error) {
    console.log(error)
  }
}