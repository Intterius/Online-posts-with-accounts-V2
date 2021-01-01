import axios from 'axios'

const getCertainUsersPost = async () => {
    try {
        const user = localStorage.getItem('username')
        const { data } = await axios.get(`http://localhost:3000/users-posts?q=${user}`)
        return data.reverse()
    }
    catch (er) {
        console.log(er)
    }
}


export default getCertainUsersPost


