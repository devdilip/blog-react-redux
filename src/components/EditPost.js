import React, { Component } from 'react';
import PageHeader from "./PageHeader"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as addAction from '../actions/PostActions';
import '../styles/style.css';

class EditPost extends Component {
  constructor() {
    super();
    this.state = {
      description: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const description = this.refs.description.value
    this.props.actions.updatePost(this.props.postId, description);
    document.querySelector(".alert").style.display = "block"
    console.log("data Updated...")
  }
  handleDescription = (e) => {
    this.setState({ description: e.target.value })
  }
  componentDidMount() {
    const singlePost = this.props.posts[0].filter((post) => post._id === this.props.postId);
    this.setState({ description: singlePost[0].description })
  }
  render() {
    const singlePost = this.props.posts[0].filter((post) => post._id === this.props.postId);
    return (
      <div>
        <PageHeader />
        <form className="inputForm" onSubmit={this.onSubmit}>
          <input className="form-control" ref="title" value={singlePost[0].title} type="text" /><br />
          <input className="form-control" ref="author" value={singlePost[0].author} type="text" /><br />
          <textarea className="form-control text-field" value={this.state.description} onChange={this.handleDescription} ref="description" ></textarea> <br />
          <input className="btnSubmit" type="submit" value="Update Post" />
        </form>
        <div class="alert success">
          <Link to="/addPost"><button class="postbutton">Add post</button></Link>
          <Link to="/posts"><button class="postbutton">Posts</button></Link>
          <strong>Success!</strong> Your post updated successfully.
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
