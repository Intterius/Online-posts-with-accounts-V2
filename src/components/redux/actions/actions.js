export const fetchPostsRequest = () =>{
    return {
     type : 'FETCH_POSTS_REQUEST',
   
    }
}
export const fetchPostsSuccess = (payload) =>{
    return {
     type :'FETCH_POSTS_SUCCESS',
    payload
    }
}
export const fetchPostsError = (payload) =>{
    return {
     type : 'FETCH_POSTS_ERROR',
    payload
    }
}
