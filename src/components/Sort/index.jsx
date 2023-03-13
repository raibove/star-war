import { useState, useEffect } from 'react';
import Select from 'react-select';
import './Sort.css'

const Sort = ({filteredMovies, updateFilteredMovies})=>{
    const options = [
        {value: 'episode', label: 'episode'},
        {value: 'year', label: 'year'}
    ]

    
    const handleSortChange = (e) => {
        if(e && e.value)
            sortMovies(e.value)
    };

    const sortMovies = (sortType)=>{
        let sortedMovies = []
        if(sortType==='year'){
            sortedMovies = filteredMovies.sort((a,b) => {
                const aDate = new Date(a.release_date);
                const bDate = new Date(b.release_date);

                return aDate - bDate;
            })
        }else if(sortType==='episode'){
            sortedMovies = filteredMovies.sort((a,b)=> a.episode_id - b.episode_id)
        }else{
            sortedMovies = filteredMovies
        }

        console.log(sortedMovies)        
        updateFilteredMovies(sortedMovies)
    }

    return (
        <div className='sort-container'>
            <Select className='sort-input' placeholder="Sort by..." isClearable={true} options={options} onChange={handleSortChange} />
        </div>
    )
}

export default Sort;