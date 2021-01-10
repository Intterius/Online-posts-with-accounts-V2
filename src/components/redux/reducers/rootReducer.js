const initialState = { posts: [] }

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'GET_ALL_POSTS':
               return {
                   ...state, posts: action.payload
               };
               case 'GET_MY_POSTS':
            return {
                ...state, posts: action.payload
            }
        default:
            return state;
    }
}
export default postsReducer;