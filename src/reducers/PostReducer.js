import {SINGLE_POST, FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    posts: []
}

export default function reducer(state = initialState, action) {
    console.log(action)
    console.log(action.payload)
    console.log(action.type)
    switch (action.type) {
        case NEW_POST: {
            return { ...state, posts: [action.payload, ...state.posts] }
        }
        case 'FETCH_POSTS_FULFILLED': {
            return { ...state, posts: [action.payload.data] }
        }
        case FETCH_POSTS: {
            return { ...state, posts: [action.payload] }
        }
        case SINGLE_POST: {
            return { ...state, posts: [action.payload] }
        }
        default:
            return state;
    }
}