import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Sort from './index';
import { beforeEach, describe, expect, test, vi } from 'vitest';  

describe('<Sort/>',  ()=>{
    it('render select component', ()=>{
        const options = [
            {value: 'episode', label: 'episode'},
            {value: 'year', label: 'year'}
        ]

        const handleSortChange = vi.fn()
        const {getByText} = render(<Sort options={options} handleSortChange={handleSortChange}/>)

        const sortSelect = getByText(/Sort by/i)
        expect(sortSelect).toBeInTheDocument()
    })  

    it('call handle sortchange on option click', async ()=>{
        const options = [
            {value: 'episode', label: 'episode'},
            {value: 'year', label: 'year'}
        ]

        const handleSortChange = vi.fn()
        const {getByText} = render(<Sort options={options} handleSortChange={handleSortChange}/>)

        const sortSelect = getByText('Sort by...')
        expect(sortSelect).toBeInTheDocument()

        fireEvent.keyDown(sortSelect.firstChild, { key: 'ArrowDown' });
        await waitFor(() => getByText(/episode/i));
        fireEvent.click(getByText(/episode/i));

        expect(handleSortChange).toHaveBeenCalledTimes(1);
        
    })
})