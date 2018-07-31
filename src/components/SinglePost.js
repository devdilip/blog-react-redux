import React, { Component } from 'react'
import PageHeader from "./PageHeader"
import { bindActionCreators } from 'redux';
import * as addAction from '../actions/PostActions';
import '../styles/style.css';
import { connect } from 'react-redux';

class SinglePost extends Component {

  componentWillMount(){
    console.log(this.props.postId)
    // this.props.actions.singlePost(this.props.postId)
}
  render() {
    const singlePost = this.props.posts[0].filter((post) => post._id === this.props.postId);
    // const singlePost = this.props.posts;
    return (
      <div>
        <PageHeader />
        {singlePost.length > 0 ? <div className="singlePost">
          <div className="title-author">
            <h2>{`Title :: ` + singlePost[0].title}</h2>
            <h2>{`Author :: ` + singlePost[0].author}</h2>
          </div>
          <div className="description">{singlePost[0].description}</div>
        </div> : <div> no post available </div>}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return {
    postId,
    posts: state.posts.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(addAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
