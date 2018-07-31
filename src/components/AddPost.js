import React, { Component } from 'react'
import PageHeader from "./PageHeader"
import { bindActionCreators } from 'redux';
import * as addAction from '../actions/PostActions';
import { connect } from 'react-redux';
import '../styles/style.css';
import uuid from "uuid"
class AddPost extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    let post = {
      _id: uuid(),
      title: this.refs.title.value,
      author: this.refs.author.value,
      description: this.refs.description.value
    }
    
    this.props.actions.PostInput(post);
    console.log("data posted...")
    document.querySelector(".inputForm").reset();
  }

  render() {
    return (
      <div>
        <PageHeader />
        <form className="inputForm" onSubmit={this.onSubmit}>
          <input className="form-control" ref="title" type="text" placeholder="Title here" required /><br />
          <input className="form-control" ref="author" type="text" placeholder="Author name here" required /><br />
          <textarea className="form-control text-field" ref="description" placeholder="Message here.."></textarea> <br/>
          <input className="btnSubmit" type="submit" value="Submit Post" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    posts:state.posts.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(addAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);