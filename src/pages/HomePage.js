import React, { Fragment } from 'react';
import MovieList from '../components/movie/MovieList';

const HomePage = () => {
    return (
      <Fragment>
        <section className="movie-layout page-container pb-20">
          <h2 className="capitalize text-white text-3xl mb-10 font-bold ">
            Now Playing
          </h2>
          <MovieList></MovieList>
        </section>
        <section className="movie-layout page-container pb-20">
          <h2 className="capitalize text-white text-3xl mb-10 font-bold ">
            Top rated
          </h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="movie-layout page-container pb-20">
          <h2 className="capitalize text-white text-3xl mb-10 font-bold ">
            Trending
          </h2>
          <MovieList type="popular"></MovieList>
        </section>
      </Fragment>
    );
};

export default HomePage;