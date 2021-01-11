import axios from 'axios'
const deletePost= async(post)=>{
 await axios.delete(`http://localhost:3000/users-posts/${post}`)
 

}
export default deletePost