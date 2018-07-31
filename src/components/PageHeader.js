import React from 'react'
import { Link } from "react-router-dom"
import "../styles/style.css"
const PageHeader = () => {
    return (
        <div className="header">
            <h1 className="heading">Social Blog</h1>
            <div className="link-all">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/addPost">Add Post</Link>
                <Link className="link" to="/posts">Posts</Link>
            </div>
        </div>
    )
}
export default PageHeader
