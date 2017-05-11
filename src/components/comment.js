import React, { Component } from 'react';
import '../styles/comment.css';

const Comment = (props) => {
  const nameStyles = {
    padding: '16px 16px 0px 16px',
    color: '#212121',
    fontSize: '15px',
    marginBottom: '0px'
  }

  const bodyStyles = {
    padding: '0 16px 16px 16px',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.54)',
    marginTop: '0px',
    lineHeight: '24px'
  }

  return (
    <div className="comment-box">
      <p style={nameStyles}>{props.name}</p>
      <p style={bodyStyles}>{props.body}</p>
    </div>
  )
}

export default Comment;
