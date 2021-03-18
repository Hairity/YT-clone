import axios from 'axios'

const KEY = 
'AIzaSyDJu5Lxbxu-buG5UwGNFKtakZGU7bBDh4g'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
})