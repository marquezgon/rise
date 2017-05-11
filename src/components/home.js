import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import axios from 'axios';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { URL } from '../helpers';
import PostPanel from './post-panel';
import LoadingSpinner from './loading_spinner';
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
        axios.get(`${URL}/comments`).then(({ data }) => {
          const comments = data;
          this.setState({ postsList, users, comments });
        });
      });
    })
  }

  deletePost(postId) {
    axios.delete(`${URL}/posts/${postId}`).then(() => {
      const postToDelete = this.state.postsList.findIndex((el) => {
        return el.id === postId
      });
      const posts = this.state.postsList;
      posts.splice(postToDelete, 1);

      const comments = this.state.comments.filter((el) => {
        return el.postId !== postId;
      });

      this.setState({ postsList: posts, comments });
    });
  }

  updateComments(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

  render() {
    if(!this.state.postsList) {
      return <LoadingSpinner />;
    }

    const posts = this.state.postsList.map((el, index) => {
      const userObj = this.state.users.find((user) => {
        return user.id === el.userId;
      });

      const postComments = this.state.comments.filter((comment) => {
        return comment.postId === el.id;
      })

      return (
        <LazyLoad height={100} key={index} offset={-50} overflow={true} once>
          <PostPanel updateComments={this.updateComments.bind(this)} postId={el.id} deletePost={this.deletePost.bind(this)} name={userObj.name} body={el.body} title={el.title} comments={postComments} />
        </LazyLoad>
      )
    })

    const floatingActionStyles = {
      position: 'absolute',
      top: '221px',
      right: '56px',
      zIndex: '3'
    }

    return (
      <div className="main-box">
        {posts}
        <FloatingActionButton style={floatingActionStyles}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    )
  }

}

export default Home;
