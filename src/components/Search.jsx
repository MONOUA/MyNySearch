import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { useStateContext } from '../contexts/StateContextProvider'

function Search() {
    const { setSearchTerm, getResults } = useStateContext()
    const [text, setText] = useState('programming')
    const [debouncedValue] = useDebounce(text, 1000)

    useEffect(() => {
        if (debouncedValue) {
            setSearchTerm(debouncedValue);
        }
    }, [debouncedValue, setSearchTerm, getResults]);

    return (
        <div>
            <div>Search</div>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Rechercher sur le web..." 
                aria-label="Barre de recherche principale" 
                id="search-input"
            />
            {text && (
                <button onClick={() => setText('')}>
                    x
                </button>
            )}
        </div>
    )
}

export default Search