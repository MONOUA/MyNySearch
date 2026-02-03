import React, { createContext,useContext,useState } from 'react'

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com'  ;

export function StateContextProvider({children}) {

    const [searchTerm,setSearchTerm] =useState('');
    const [loading,setLoading] = useState(false);
    const [results,setResults] =useState([]);
    
    const getResults = async (url) =>{
        setLoading(true);

        const res = await fetch(`${baseUrl}${url}`,{
                method: 'GET',
                 headers : {
                'x-rapidapi-host': 'google-search74.p.rapidapi.com',
	            'x-rapidapi-key': '612b79e941mshf9cd2765ea947efp1624aejsna84a6b569a52'
            }
        });

        const data =await res.json()
        setResults(data);
        setLoading(false);
    }
    
  return (
        <StateContext.Provider value={{searchTerm,setSearchTerm,loading,setLoading,results,setResults,getResults}}>
            {children} 
         </StateContext.Provider>
  )
}

export const useStateContext = () =>useContext(StateContext);