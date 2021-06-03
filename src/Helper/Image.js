import React from 'react'
import { ContainerImage, Skeleton } from './styled'

export default function Image({alt, ...props}) {

    const [skeleton, setSkeleton] = React.useState(true)

    function handleLoad({target}){
        target.style.opacity = 1;
        setSkeleton(false);
    }
    return (
        <ContainerImage>
            {skeleton && <Skeleton/>}
            <img onLoad={handleLoad} alt={alt} {...props} />
        </ContainerImage>
    )
}
