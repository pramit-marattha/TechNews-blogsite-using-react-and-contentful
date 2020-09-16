import React, { Component } from 'react'
import './App.css';
import { Client } from './Client'
import Posts from './Posts';

export default class App extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    Client.getEntries().then((response) => {
      console.log(response)
      this.setState({ articles: response.items })
    }).catch(console.error)
  }
  render() {
    return (
      <div>
        <div className="container">
          <header>
            <div className="wrapper">
              <span className="glowButton">Tech Resource</span>
            </div>
          </header>
          <main>
            <div className="wrapper">
              <Posts posts={this.state.articles} />
            </div>
          </main>
        </div>
      </div>
    )
  }
}
