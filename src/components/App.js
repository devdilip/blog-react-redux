import React, { Component } from 'react';
import '../styles/style.css';
import PageHeader from "./PageHeader"
class App extends Component {
  render() {
    return (
      <div>
        <PageHeader /><p>Blog</p>
      </div>
    );
  }
}
export default App;
