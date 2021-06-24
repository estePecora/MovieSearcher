import React, { Component } from "react";
import { connect } from "react-redux";
import {removeMovieFavorite} from '../../actions';
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <div className="favoritesContainer">
          <h2 className="titleFavorites">Favorites</h2>
        </div>

        <div className="buttonsContainer">
          <ul>
              
                {this.props.mymovies && this.props.mymovies.map(movie => (
                    <div key={movie.id} className="linkAndButtons">
                      <Link to={`/movie/${movie.id}`}>{movie.name}</Link>
                    
                      <button 
                      onClick={() => this.props.removeMovieFavorite(movie.id)} 
                      className="eliminateButton">
                      ELIMINATE FROM FAVORITES
                      </button>
                  </div>))
                }
            
            </ul>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mymovies: state.moviesFavorites
  }
};

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id)),
    
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
