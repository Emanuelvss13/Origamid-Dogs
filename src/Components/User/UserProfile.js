import React from 'react'
import { useParams } from 'react-router'
import Feed from '../Feed'
import { H1 } from '../Login/styled'
import {ProfileContainer} from './styed'
import Head from '../../Helper/Head'

export default function UserProfile() {
    const {user} = useParams()
    
    return (
        <ProfileContainer>
            <Head title={user} />
            <H1>{user}</H1>
            <Feed user={user} />
        </ProfileContainer>
    )
}
