import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import '../styles/home.css';

class Home extends Component {
  render() {
    return (
      <div className="main-box">
        <details>
            <summary>
                <ul>
                  <li>Meal Preference <span>Optional</span></li>
                    <li className="titleValue"></li>
                </ul>
            </summary>
            <div className="content">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
        </details>
        <details>
            <summary>
                <ul>
                  <li>Meal Preference <span>Optional</span></li>
                    <li className="titleValue"></li>
                </ul>
            </summary>
            <div className="content">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
        </details>
        <details>
            <summary>
                <ul>
                  <li>Meal Preference <span>Optional</span></li>
                    <li className="titleValue"></li>
                </ul>
            </summary>
            <div className="content">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            </div>
        </details>
      </div>
    )
  }

}

export default Home;
