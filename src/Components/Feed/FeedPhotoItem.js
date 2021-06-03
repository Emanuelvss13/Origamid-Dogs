import React from 'react'
import { Acess, ContainerLi } from './styled'
import Image from '../../Helper/Image'

export default function FeedPhotoItem({photo, setModalPhoto}) {

    function handleClick(){
        setModalPhoto(photo);
    }

    return (
        <ContainerLi onClick={handleClick} >
            <Image src={photo.src} alt={photo.title} width="100%" height="100%" />
            <Acess>{photo.acessos}</Acess>
        </ContainerLi>
    )
}
