import axios from 'axios'
import { toast } from 'react-toastify'
import checkLogged from '../../utils/checkLogged'
export const getPosts = () => dispatch => {
    axios.get('http://localhost:3000/users-posts').then(res => {
        const { data } = res;
        data.shift()
        data.reverse()
        if (checkLogged()) {
            if (data.length === 0) {
                toast.success(`Be our first publisher!`);
            }
        }
        dispatch({
            type: "GET_ALL_POSTS",
            payload: data
        })
    })
}
export const getMyPosts = () => dispatch => {
    const user = localStorage.getItem('username')
    axios.get(`http://localhost:3000/users-posts?q=${user}`).then(res => {
        const { data } = res;
        data.reverse()
        dispatch({
            type: "GET_MY_POSTS",
            payload: data
        })
        if (checkLogged()) {
            if (data.length === 0) {
                toast.error(`Unfortunately you haven't uploaded anything yet.`);
            }
        }
    })
}




