import React from 'react'
import FeedPhotoItem from './FeedPhotoItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api';
import {Error} from '../Login/styled'
import Loading from '../../Helper/Loading';
import { ContainerUl } from './styled';

export default function FeedPhoto({page, user, setModalPhoto, Setinfinity}) {

    const {data, error, loading, request} = useFetch();


    React.useEffect(() => {
        const total = 3; 
        async function photoFetch(){
            const {url, options} = PHOTOS_GET({page, total, user});
            const {response, json} = await request(url, options);
            if(response && response.ok && json.length < total) Setinfinity(false)
            console.log(json);
        }

        photoFetch();
    }, [request, user, page, Setinfinity]);

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data)
    return (
        <ContainerUl>
            {data.map(itens => ( <FeedPhotoItem key={itens.id} photo={itens} setModalPhoto={setModalPhoto} /> ))}
        </ContainerUl>
    )
    else return null;
}
