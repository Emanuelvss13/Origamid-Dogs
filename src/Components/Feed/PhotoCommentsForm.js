import React from 'react'
import { COMMENT_POST } from '../../api';
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import {Error} from '../Login/styled'
import { ContainerFormComments } from './styled';

export default function PhotoCommentsForm({id, setComments}) {

    const [comment, setComment] = React.useState();
    const {request, error} = useFetch()

    async function handleSubmit(e){
        e.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})

        const {response, json} = await request(url,options)

        if(response.ok){
            setComments((comments) => [...comments, json])
            setComment('');
        }
    }

    return (
        <>
            <ContainerFormComments onSubmit={handleSubmit}>
                <textarea
                name='comment'
                value={comment}
                placeholder='Comente...'
                onChange={({target}) => setComment(target.value)} 
                />
                <button>
                    <Enviar/>
                </button>
                {error && <Error>{error}</Error>}
            </ContainerFormComments>
        </>
    )
}
