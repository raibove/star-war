import Select from 'react-select';
import './Sort.css'

const Sort = ({options, handleSortChange})=>{
    return (
        <div className='sort-container'>
            <Select className='sort-input' placeholder="Sort by..." isClearable={true} options={options} onChange={(e)=>handleSortChange(e)} />
        </div>
    )
}

export default Sort;