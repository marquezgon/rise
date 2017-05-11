import React, { Component } from 'react';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import '../styles/post-panel.css';
import Comment from './comment';
import CommentBox from './comment-box';

class PostPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  handleDetailsClick(e) {
    console.log(e.target.tagName)
    if(e.target.tagName != 'INPUT' && e.target.tagName != 'path') {
      const detailsOpen = this.details.hasAttribute('open');
      this.setState({ isOpen: !detailsOpen });
    }
  }

  handleDeleteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deletePost(this.props.postId);
  }

  render() {
    const liStyles = {
      textAlign: 'right',
      color: '##9e9e9e',
      marginRight: '40px'
    }

    const pStyles = {
      padding: '0 16px',
      color: 'rgba(0, 0, 0, 0.54)'
    }

    const comments = this.props.comments.map((el, index) => {
      return <Comment body={el.body} name={el.name} key={index} />
    });

    const postTitle = this.props.title.length > 20 ? `${this.props.title.substring(0, 20)}...` : this.props.title

    return (
      <details onClick={this.handleDetailsClick.bind(this)} ref={(c) => this.details = c}>
          <summary>
              <ul>
                <li>{postTitle} <span>{this.props.name}</span></li>
                <li style={liStyles}>
                  { this.state.isOpen ?
                      <a className="trash-can-icon" onClick={this.handleDeleteClick.bind(this)}><DeleteIcon/></a> : null
                  }
                </li>
              </ul>
          </summary>
          <div className="content">
            <div>
              <p style={pStyles}>{this.props.body}</p>
            </div>
            { comments }
            <CommentBox ref={(c) => this.commentBox = c} updateComments={this.props.updateComments} postId={this.props.postId} />
          </div>
      </details>
    );
  }
}

export default PostPanel;
