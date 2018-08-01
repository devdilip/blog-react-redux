import {UPDATE_POST,DELETE_POST,SINGLE_POST, FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    posts: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_POST: {
            return { ...state, posts: [...state.posts.concat(action.payload)] }
        }
        case FETCH_POSTS: {
            return { ...state, posts: [action.payload] }
        }
        case SINGLE_POST: {
            return { ...state, posts: [action.payload] }
        }
        case DELETE_POST: {
            const remainPosts = state.posts[0].filter((post) => post._id !== action.payload)
            return {...state, posts: [remainPosts] }
        }
        case UPDATE_POST: {
            let posts = state.posts[0].slice();
            let index = posts.findIndex(x => x._id === action.payload.id);
            posts[index].description = action.payload.description;
            return {...state, posts: [posts] }
        }
        default:
            return state;
    }
}