import {useEffect} from 'react'
import ReactPlayer from 'react-player'
import {useLocation} from 'react-router-dom'
import { useStateContext } from '../contexts/StateContextProvider';
import Loading from './Loading';

function Results() {

    const location = useLocation();
    const {searchTerm,loading,getResults,results} = useStateContext();
    
    useEffect(()=>{
        if (searchTerm !==''){
            if (location.pathname === '/videos'){
                getResults(`./search/q=${searchTerm} videos`);
            }
            else{
                getResults(`./location.pathname/q=${searchTerm}&num=40`);
            }
        }
    },[searchTerm,location.pathname,getResults]);

  if (loading) return <Loading />

    switch(location.pathname){
        case '/search':
            return (
                <div>
                    {results?.results?.map(({link,title},index)=>(
                        <div key={index}>
                            <a href={link} target='_blank' rel='noreferrer'>
                                <p>
                                    {link.length > 30 ? link.substring(0 , 30) : link}
                                </p>
                                <p>
                                    {title}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            );

        case '/images':
            return (
                <div>
                    {results?.image_results?.map(({image,link : {href,title}}, index)=>(
                        <a href={href} target='_blank' key={index} rel='_noreferrer'>
                            <img src={image?.src} alt={title} loading='lazy'/>
                            <p>
                                {title}
                            </p>
                        </a>
                    ))}
                </div>
            );

        case '/news' :
            return (
                <div>
                    {results?.entries.map(({id, links, source, title})=>(
                        <div key={id}>
                            <a href={links?.[0].href} targert='_blank' ref='noreferrer'>
                                <p>
                                    {title}
                                </p>
                            </a>
                            <div>
                                <a href={source?.href} target='_blank' ref='noreferrer'>
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
                    <div>
                        {results?.results.map(({video, index})=>(
                            <div key={index}>
                                <ReactPlayer url={video.additional_links?.[0].href} controls width='355px' height='200px' />
                            </div>
                        ))}
                    </div>
                );
            default:
            return 'error...';
    }

}

export default Results