/* eslint-disable react/prop-types */
import { useState } from 'react'
const SearchTask = ({handleInputTextChange, handleShowCompletedChange})=>{

    const [inputText, setInputText] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
        handleInputTextChange(e.target.value);
    };

    const checkboxChanged = (e) => {
        setShowCompleted(e.target.checked);
        handleShowCompletedChange(e.target.checked);
    };

    return (
        <div>
            <input
            type="text"
            placeholder="Search..."
            value={inputText}
            onChange={handleInputChange}
            />
        <label>
            <input
            type="checkbox"
            checked={showCompleted}
            onChange={checkboxChanged}/>
        Show completed tasks
        </label>
        </div>
    );
};

export default SearchTask