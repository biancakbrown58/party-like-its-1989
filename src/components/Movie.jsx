import React, { Component } from 'react'
class Movie extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>
        <ul>
          {this.props.results.map((results, i, p) => {
            return (
              <div className="movie-item">
                <img
                  src={`https://image.tmdb.org/t/p/w185${this.props.results[i].poster_path}`}
                  alt="movie-poster"
                />
                <div>
                  <li className="title" key={i}>
                    {this.props.results[i].title}
                  </li>
                  <li className="overview" key={i}>
                    {this.props.results[i].overview}
                  </li>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Movie
