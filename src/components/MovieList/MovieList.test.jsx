import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieList from './index';
import { afterEach, describe, expect, it, vi } from 'vitest'

describe('<MovieList/>',()=>{
    it('Renders correct number of movies', ()=>{
        const movies = [
            { episode_id: 1, title: 'The Phantom Menace' },
            { episode_id: 2, title: 'Attack of the Clones' },
            { episode_id: 3, title: 'Revenge of the Sith' }
          ];
          const onMovieClick = () => {};
          const { container } = render(<MovieList movies={movies} onMovieClick={onMovieClick} />);
          const movieElements = container.querySelectorAll('li');
          expect(movieElements.length).toEqual(movies.length);
    })

    it('calls the onClick function with the correct  object when a movie title is clicked', () => {
        const movies = [
          { episode_id: 1, title: 'The Phantom Menace' },
          { episode_id: 2, title: 'Attack of the Clones' },
          { episode_id: 3, title: 'Revenge of the Sith' }
        ];

        const onMovieClick = vi.fn();
        const { container } = render(<MovieList movies={movies} onMovieClick={onMovieClick} />);
        const movieElements = container.querySelectorAll('li');
        fireEvent.click(movieElements[1]);
        expect(onMovieClick).toHaveBeenCalledWith(movies[1]);
    });
})
