import React, { Component } from 'react';

const PostPanel = (props) => {
  return (
    <details>
        <summary>
            <ul>
              <li>Meal Preference <span>{props.name}</span></li>
            </ul>
        </summary>
        <div className="content">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
        </div>
    </details>
  );
}

export default PostPanel;
