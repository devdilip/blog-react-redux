import {UPDATE_POST, SINGLE_POST, DELETE_POST, FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

// fetch all posts
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
    axios.post(`/posts`,{
        data: postData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(response => {
        dispatch({
            type: NEW_POST,
            payload: response.data
        });
    })
}


// update post
export const updatePost = (id, postData) => dispatch => {
    axios.put(`/posts/` + id,{
        data: {
            description: postData
        },
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    }).then(response => {
        dispatch({
            type: UPDATE_POST,
            payload: response.data
        });
    })
}


// delete post
export const deletePost = (id) => dispatch => {
    axios.delete(`/posts/` + id)
        .then(response => {
            dispatch({
                type: DELETE_POST,
                payload: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
}

// Search single post
export const singlePost = (id) => dispatch => {
    axios.get(`/posts/` + id)
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

// const PostBlog = (data) => {
//     return {
//         type: NEW_POST,
//         payload: data
//     }
// }

// store post
// export const PostInput = (postData) => dispatch => {
//     fetch('/posts', {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify(postData)
//     }).then(res => res.json())
//         .then(PostBlog(postData))
// }
