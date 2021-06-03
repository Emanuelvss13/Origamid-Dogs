import React from 'react'
import { Route, Routes } from 'react-router'
import { UserContext } from '../../UserContext'
import Feed from '../Feed'
import NotFound from '../NotFound'
import User from '../User'
import UserPhotoPost from '../UserPhotoPost'
import UserStats from '../UserStats'

export default function Account() {

    const {data} = React.useContext(UserContext)

    return (
        <div>
            <User/>
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="posts" element={<UserPhotoPost/>} />
                <Route path="estatisticas" element={<UserStats/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    )
}
