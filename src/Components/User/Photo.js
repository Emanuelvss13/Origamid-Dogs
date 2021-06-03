import React from 'react'
import { useParams } from 'react-router'
import { PHOTO_GET } from '../../api'
import Loading from '../../Helper/Loading'
import useFetch from '../../Hooks/useFetch'
import PhotoContent from '../Feed/PhotoContent'
import { Error } from '../Login/styled'
import { PhotoContainer } from './styed'

export default function Photo() {
    const {id} = useParams()

    const {request, data, error, loading} = useFetch()

    React.useEffect(() => {
        const {url, options} = PHOTO_GET(id)
        request(url, options)
    }, [id, request])

    if(error) return <Error>{error}</Error>
    if(loading) return <Loading/>
    if(data) return( 
        <PhotoContainer>
            <PhotoContent data={data} single={true} />
        </PhotoContainer>
    )
    else return null
}
