import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }
   

    render() {
        return (
            <div className="movie-detail">
                <div className='detail-poster'>
                    <div className='detail-text-container'>
                        <div>{this.props.movieDetail.Title}</div>
                        <div>Year: {this.props.movieDetail.Year}</div>
                        <div>{this.props.movieDetail.Plot}</div>
                    </div>
                    <img className='imag-detail-size' src={this.props.movieDetail.Poster}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: id => dispatch(getMovieDetail(id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps )(Movie);