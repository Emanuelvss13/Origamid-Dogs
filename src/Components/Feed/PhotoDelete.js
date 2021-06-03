import React from 'react'
import { BtnDelete } from './styled'
import useFetch from '../../Hooks/useFetch'
import {PHOTO_DELETE} from '../../api'

export default function PhotoDelete({id}) {
    
    const {request, loading} = useFetch() 
    
    async function handleDelete(){
        const confirm = window.confirm('Tem serteza que deseja deletar?')
    
        if(confirm){
            const {url, options} = PHOTO_DELETE(id)
    
            const {response} = await request(url, options)
    
            if(response.ok){
                window.location.reload();
            }
        }
    }

    return (
        <div>
            <BtnDelete onClick={handleDelete} >Deletar</BtnDelete>
        </div>
    )
}
