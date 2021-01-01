const initialState = { isLoading: false, posts: [], error: null }

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POSTS_REQUEST':
            return {
                ...state ,
                isLoading: true,
            };
        case 'FETCH_POSTS_SUCCESS':
            return {
                ...state  ,
                posts: action.payload,
                isLoading: false
            };
        case 'FETCH_POSTS_ERROR':
            return {
                ...state ,
                isLoading: false ,
                error: action.payload
            };
        default:
            return state;
    }
}
export default postsReducer;