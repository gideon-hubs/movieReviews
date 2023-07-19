import React, { Component } from 'react'
import Reviews from './components/Reviews'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://img.freepik.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg?w=2000" alt="" style={{width:'100%',borderRadius:'10px'}}/>
        </div>
        
        <h2>Movie Reviews</h2>
        <Reviews/>
      </div>
    )
  }
}