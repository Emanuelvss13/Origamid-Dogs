import React from 'react'
import { GET_STATS } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Helper/Loading'
import {Error} from '../Login/styled'
const Graph = React.lazy(() => import('./Graph'))


export default function UserStats() {
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        async function getData(){
            const {url, options} = GET_STATS()

            await request(url, options)
        }
        getData()
    }, [request])

    if(loading) <Loading/>
    if(error) <Error>{error}</Error>
    if(data)
    return (
        <React.Suspense fallback={<div></div>}>
            <h1>estatisticas</h1>
            <Graph data={data} />
        </React.Suspense>
    )
    else return null
}
