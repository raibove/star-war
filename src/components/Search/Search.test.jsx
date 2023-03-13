import Search from "./index";
import { render, fireEvent } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

describe('<Search />', ()=> {
    it('should call the onChange function when the search input value changes', () => {
        const mockOnChange = vi.fn();
        const { getByPlaceholderText } = render(<Search handleSearchChange={mockOnChange} />);

        fireEvent.change(getByPlaceholderText('Type to search...'), {
            target: { value: 'new' },
        });

        expect(mockOnChange).toHaveBeenCalledWith('new');
    })
})