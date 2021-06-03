import React from 'react'
import { PHOTO_GET } from '../../api';
import Loading from '../../Helper/Loading';
import useFetch from '../../Hooks/useFetch'
import { Error } from '../Login/styled';
import PhotoContent from './PhotoContent';
import { ContainerModal } from './styled';

export default function FeedModal({photo, setModalPhoto}) {
    
    const {data, error, loading, request} = useFetch();

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(photo.id);

        request(url, options);
    },[photo, request]);

    function handleClose(e){
        if(e.target === e.currentTarget) setModalPhoto(null);
    }

    return (
        <ContainerModal onClick={handleClose}>
            {error && <Error error={error} />}
            {loading && <Loading/>}
            {data && <PhotoContent data={data} single={false}/>}
        </ContainerModal>
    )
}