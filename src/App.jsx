import React, { Component } from 'react'
import Movie from './components/Movie'

export class App extends Component {
  state = {
    results: [],
    title: '',
    overview: '',
    picture: '',
  }
  getMovieData = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=7592f99d86a9cd53c9c7dbd963be4de3',
      {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.status === 200) {
      const movies = await response.json()
      this.setState({
        results: movies.results,
        title: movies.results.title,
        overview: movies.results.overview,
        picture: movies.results.poster_path,
      })
      console.log(movies.results[1].poster_path)
    }
  }

  componentDidMount() {
    this.getMovieData()
  }

  render() {
    return (
      <div>
        <Movie
          results={this.state.results}
          title={this.state.title}
          overview={this.state.overview}
          picture={`https://image.tmdb.org/t/p/original${this.state.picture}`}
        />
      </div>
    )
  }
}
