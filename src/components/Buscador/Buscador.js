import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMovies } from "../../actions";
import { addMovieFavorite } from "../../actions";
import './Buscador.css';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
    
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="search-container">
          <form className="form-container" onSubmit={this.handleSubmit}>
            
            <label className="label" htmlFor="title">Find movies to watch: </label>
            
            <div className="input-group">
              <input
                type="text"
                id="title"
                autoComplete="off"
                value={title}
                onChange={this.handleChange}
              />
              <button className="btn btn-outline-warning" type="submit">BUSCAR</button>
            </div>
          </form>
        </div>


        <div >
          <ul className="results-container">
            {
            !this.props.movies ? <div><h1>NO MOVIES FOUND!</h1></div>
            : this.props.movies.map(movie => (
              <div className='movie-result' key={movie.imdbID}>
                <div className='imag-container'>
                  <Link to={`/movie/${movie.imdbID}`}><img className='imag-size' src={movie.Poster}/></Link>
                </div>
                {/* <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link> */}
                <button className='btn btn-warning' onClick={() => this.props.addMovieFavorite({name: movie.Title, id: movie.imdbID})}>ADD TO FAVORITES</button>
              </div>
              ))
            }
          </ul>
        </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  }
};

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  }
};

export default connect(mapStateToProps, mapDispatchToProps) (Buscador);
