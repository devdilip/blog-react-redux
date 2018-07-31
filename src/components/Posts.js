import React, { Component } from 'react'
import PageHeader from "./PageHeader"
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as addAction from '../actions/PostActions';

class Posts extends Component {
  componentWillMount(){
    this.props.actions.fetchPosts();
}

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PageHeader />
        <div className="post">
          {(posts.length>0) ?
            posts[0].map((post, i) => {
              if(post){
              return (
                <div className="single-post" id={post._id} key={post._id}>
                  <h2>{<Link className="single-post-link" to={`/post/${post._id}`}>{`Title :: `+post.title}</Link>}</h2>
                  <h2>{`Author :: ` + post.author}</h2>
                  <Link to={`/editpost/${post._id}`}><button className="edit-post">Edit Post</button></Link>
                  <button className="delete-post">Delete Post</button>
                </div>
              )}
            }) : <div>No Blogs is there</div>
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(addAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Posts);