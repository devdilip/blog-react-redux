import React, { Component } from 'react';
import PageHeader from "./PageHeader"
import { connect } from 'react-redux';
import '../styles/style.css';

class EditPost extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    let post = {
      _id: this.props.postId,
      title: this.refs.title.value,
      author: this.refs.author.value,
      description: this.refs.description.value
    }
    console.log(post)
    // this.props.actions.PostInput(post);
    console.log("data Updated...")
  }
  componentDidMount(){
    console.log(this.props.posts)
    console.log(this.props.postId)
  }
  render() {
    console.log(this.props.posts)
    const singlePost = this.props.posts[0].filter((post) => post._id === this.props.postId);
    console.log(singlePost)
    return (
      <div>
      <PageHeader />
      <form className="inputForm" onSubmit={this.onSubmit}>
        <input className="form-control" ref="title" value={singlePost[0].title} type="text"  /><br />
        <input className="form-control" ref="author" value={singlePost[0].author}  type="text"  /><br />
        <textarea className="form-control text-field" value={singlePost[0].description}  ref="description" ></textarea> <br/>
        <input className="btnSubmit" type="submit" value="Update Post" />
      </form>
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

export default connect(mapStateToProps)(EditPost)
