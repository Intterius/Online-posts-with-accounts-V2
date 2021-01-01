import axios from 'axios'

async function getAllPosts(){
 
const {data} = await axios.get(`http://localhost:3000/users-posts`)
data.shift()
return data.reverse()
}

export default getAllPosts