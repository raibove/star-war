export const searchMovies = (searchQuery, movies)=>{
    return movies.filter(movie=>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
}

export const sortMovies = (sortType, movies)=>{
    if(sortType==='year'){
        return movies.sort((a,b) => {
            const aDate = new Date(a.release_date);
            const bDate = new Date(b.release_date);

            return aDate - bDate;
        })
    }else if(sortType==='episode'){
        return movies.sort((a,b)=> a.episode_id - b.episode_id)
    }
    return movies
}