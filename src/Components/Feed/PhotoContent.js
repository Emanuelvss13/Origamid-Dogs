import React from 'react'
import { Link } from 'react-router-dom';
import Image from '../../Helper/Image';
import { UserContext } from '../../UserContext';
import { H1 } from '../Login/styled';
import PhotoComments from './PhotoComments';
import PhotoDelete from './PhotoDelete';
import { ContainerDetails, ContainerImg, ContainerPhoto, ContainerAuthor, Attributes } from './styled';

export default function PhotoContent({data, single}) {

    const {photo, comments} = data;

    const user = React.useContext(UserContext);

    return (
        <ContainerPhoto> 
            <ContainerImg>
                <Image src={photo.src} alt={photo.title}/>
            </ContainerImg>
            <ContainerDetails>
                <div>
                    <ContainerAuthor>
                        {user.data && user.data.username === photo.author ? 
                        <PhotoDelete id={photo.id} /> : 
                        <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>}
                        <span>{photo.acessos}</span>
                    </ContainerAuthor>
                    <H1>
                        <Link to={`/foto/${photo.id}`} >{photo.title}</Link>
                    </H1>
                    <Attributes> {/* att */}
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade === 1 ? photo.idade + ' ano' : photo.idade + ' anos'}</li>
                    </Attributes>
                </div>
            </ContainerDetails>
            <PhotoComments id={photo.id} comments={comments}></PhotoComments>
        </ContainerPhoto>
    )
}
