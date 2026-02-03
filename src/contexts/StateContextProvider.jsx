import React, { createContext, useContext, useState, useCallback } from 'react'

const StateContext = createContext();
const baseUrl = 'https://google-search74.p.rapidapi.com'  ;

export function StateContextProvider({children}) {

    const [searchTerm,setSearchTerm] =useState('');
    const [loading,setLoading] = useState(false);
    const [results,setResults] =useState(null);
    const [error, setError] = useState(null);
    
    const getResults = useCallback(async (url) =>{
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${baseUrl}${url}`,{
                    method: 'GET',
                     headers : {
                    'x-rapidapi-host': 'google-search74.p.rapidapi.com',
                    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY
                }
            });
            
            if(!res.ok) {
                if (res.status === 429) throw new Error("Trop de requêtes (429) : Quota API dépassé.");
                if (res.status === 403) throw new Error("Accès refusé (403) : Vérifiez votre clé API.");
                throw new Error(`Erreur ${res.status} : ${res.statusText}`);
            }

            const data =await res.json()
            setResults(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);
    
  return (
        <StateContext.Provider value={{searchTerm,setSearchTerm,loading,setLoading,results,setResults,getResults,error}}>
            {children} 
         </StateContext.Provider>
  )
}

export const useStateContext = () =>useContext(StateContext);