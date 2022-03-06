import Homepage from './Homepage';
import Blogpost from './Blogpost';
import Explorepage from './Explorepage';

import React from 'react';
import ReactDOM from 'react-dom';

import './css/Tabs.css';
import './css/Util.css';
import './css/Header.css';
import './css/Footer.css';
import './css/Blogpage.css';
import './css/Explore.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this.handleBlogSelect = this.handleBlogSelect.bind(this);
    this.state = {
      pageToBeRendered : "Home",
      blogdetails : "patalsu"
    };
  }

  handleTabSelect(e,tabname) {
    this.setState({
      pageToBeRendered : tabname
    });
  }

  handleBlogSelect(e,blogname) {
    if (blogname != "None"){
      this.setState({
        pageToBeRendered : "Blog",
        blogdetails : blogname
      });
    }

  }

  render() {
    const pageToBeRendered = this.state.pageToBeRendered;
    let button;
    if (pageToBeRendered === "Home") {
      window.scrollTo(0,0);
      button = (
        <div>
          <Homepage onTabBlogSelect={this.handleBlogSelect} onHeaderTabSelect={this.handleTabSelect} />
        </div>
      );
    } else if(pageToBeRendered === "Blog"){ 
      window.scrollTo(0,0);
      button = (
        <div>
          <Blogpost onHeaderTabSelect={this.handleTabSelect} blogdetails={this.state.blogdetails} />
        </div>
      );
    } else if(pageToBeRendered === "Explore"){ 
      window.scrollTo(0,0);
      button = (
        <div>
          <Explorepage onTabBlogSelect={this.handleBlogSelect} onHeaderTabSelect={this.handleTabSelect} />
        </div>
      );
    }


    return button;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
























