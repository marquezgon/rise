import React, { Component } from 'react';
import axios from 'axios';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';
import { URL } from '../helpers';


class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };
  }

  submitMessage(e) {
    e.preventDefault();
    const body = this.state.message;
    if(body) {
      const postId = this.props.postId;
      const form = {
        body,
        postId,
        name: 'Gonzalo',
        email: 'marquezgon@me.com'
      }

      axios.post(`${URL}/comments`, form ).then(({ data }) => {
        this.props.updateComments(data)
        this.setState({ message: '' });
      });
    }
  }

  render() {
    const sendButton = (
      <IconButton onTouchTap={this.submitMessage.bind(this)}>
        <Send color='#9e9e9e' />
      </IconButton>
    );

    const commentBoxStyle = {
      backgroundColor: '#fcfdff'
    };

    const commentTextInputStyle = {
      padding: '0 56px 0 16px'
    };

    const listStyle = {
      padding: '2px 0'
    };

    return(
      <div style={commentBoxStyle}>
        <form onSubmit={this.submitMessage.bind(this)}>
          <List style={listStyle}>
            <ListItem hoverColor="#fcfdff" innerDivStyle={commentTextInputStyle} rightIconButton={sendButton} >
              <TextField value={this.state.message} onChange={(e) => this.setState({ message: e.target.value})} hintText="Write a comment..." underlineShow={false} fullWidth={true}/>
            </ListItem>
          </List>
        </form>
      </div>
    );
  }
}

export default CommentBox;
