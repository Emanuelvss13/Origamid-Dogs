import React from 'react'
import * as s from '../styled'

export default function Button({children, ...props}) {
    return (
        <div>
            <s.Button {...props} >{children}</s.Button>
        </div>
    )
}
