import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import { URL } from '../helpers';
import PostPanel from './post-panel';
import '../styles/home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { postsList: null, users: null }
  }

  componentDidMount() {
    axios.get(`${URL}/posts`).then(({ data }) => {
      const postsList = data;
      axios.get(`${URL}/users`).then(({ data }) => {
        const users = data;
        this.setState({ postsList, users });
      });
    })
  }

  render() {
    console.log(this.state);
    if(!this.state.postsList) {
      return null;
    }

    const posts = this.state.postsList.map((el, index) => {
      const userObj = this.state.users.find((user) => {
        return user.id === el.userId;
      });

      return (
        <LazyLoad height={100} key={index} offset={-50} overflow={true} once>
          <PostPanel name={userObj.name} />
        </LazyLoad>
      )
    })


    return (
      <div className="main-box">
        {posts}
      </div>
    )
  }

}

export default Home;
