import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { useStateContext } from '../contexts/StateContextProvider'

function Search() {
    const { setSearchTerm } = useStateContext()
    const [text, setText] = useState('')
    const [debouncedValue] = useDebounce(text, 300)

    useEffect(() => {
        setSearchTerm(debouncedValue);
    }, [debouncedValue, setSearchTerm]);

    return (
        <div className="relative sm:ml-48 md:ml-72 sm:mt-10 mt-3 sm:w-96 w-80">
            <input 
                value={text}
                type="text" 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Rechercher sur le web..." 
                className="w-full h-10 dark:bg-gray-200 border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
            />
            {text !== '' && (
                <button type="button" className="absolute top-1.5 right-4 text-2xl text-gray-500" onClick={() => setText('')}>
                    x
                </button>
            )}
        </div>
    )
}

export default Search