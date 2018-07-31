import {SINGLE_POST, FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    axios.get(`/posts`)
        .then(response => {
            dispatch({
                type: FETCH_POSTS,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

export const PostInput = (postData) => dispatch => {
    fetch('/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    }).then(res => res.json())
        .then(post => dispatch = {
            type: NEW_POST,
            payload: post
        })
}

export const singlePost = (id) => dispatch => {
    axios.get(`/posts/`+id)
        .then(response => {
            dispatch({
                type: SINGLE_POST,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

// export const PostInput = (data) => {
//     return {
//         type: NEW_POST,
//         payload: data
//     }
// }


// export function fetchPosts() {
//     const request = axios({
//         method: 'GET',
//         url: `/posts`
//     });
//     return {
//         type: FETCH_POSTS,
//         payload: request
//     };
// }


// export function fetchPosts() {
//     return function (dispatch) {
//         axios.get(`/posts`)
//             .then(response => {
//                 dispatch({
//                     type: FETCH_POSTS,
//                     payload: response.data
//                 });
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
// }