import {useEffect} from 'react'
import ReactPlayer from 'react-player'
import {useLocation} from 'react-router-dom'
import { useStateContext } from '../contexts/StateContextProvider';
import Loading from './Loading';

function Results() {

    const location = useLocation();
    const {searchTerm,loading,getResults,results,error} = useStateContext();
    
    useEffect(()=>{
        if (searchTerm !==''){
            if (location.pathname === '/videos'){
                getResults(`/?query=${searchTerm} videos`);
            }
            else{
                getResults(`/?query=${searchTerm}&limit=40&related_keywords=true`);
            }
        }
    },[searchTerm,location.pathname,getResults]);

  if (loading) return <Loading />
  if (!searchTerm) return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
        <p className="text-4xl font-bold mb-5 dark:text-white">Welcome to MyNySEARCH 🔎</p>
        <p className="text-xl dark:text-gray-300">Type something to start searching.</p>
    </div>
  )

  if (error) return (
    <div className="flex justify-center items-center">
        <p className="text-xl text-center mt-10">
            {error?.message || "An error occurred, please try again later."}
        </p>
    </div>
  )

    switch(location.pathname){
        case '/search':
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {results?.results?.map(({link, url, title},index)=>(
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={link || url} rel='noreferrer'>
                                <p className="text-sm">
                                    {(link || url)?.length > 30 ? (link || url).substring(0 , 30) : (link || url)}
                                </p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );

        case '/images':
            return (
                <div className="flex flex-wrap justify-center items-center">
                    {results?.image_results?.map(({image,link : {href,title}}, index)=>(
                        <a className="sm:p-3 p-5" href={href} key={index} rel='noreferrer'>
                            <img src={image?.src} alt={title} loading='lazy'/>
                            <p className="w-36 break-words text-sm mt-2">
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );

        case '/news' :
            return (
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56 items-center">
                    {results?.entries?.map(({id, links, source, title})=>(
                        <div key={id} className="md:w-2/5 w-full">
                            <a href={links?.[0].href} rel='noreferrer' className="hover:underline">
                                <p className="text-lg dark:text-blue-300 text-blue-700">
                                    {title}
                                </p>
                            </a>
                            <div className="flex gap-4">
                                <a href={source?.href} rel='noreferrer'>
                                    {""}
                                    {source?.href}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            );

            case '/videos' :
                return (
                    <div className="flex flex-wrap">
                        {results?.results?.map((video, index)=>(
                            <div key={index} className="p-2">
                                {video?.additional_links?.[0]?.href && <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />}
                            </div>
                        ))}
                    </div>
                );
            default:
            return 'error...';
    }

}

export default Results