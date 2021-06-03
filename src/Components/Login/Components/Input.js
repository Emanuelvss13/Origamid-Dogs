import React from 'react'
import * as s from '../styled'

export default function Input({label, type, name, value, onChange, onBlur, error}) {
    return (
        <s.ContainerInput>
            <s.Label htmlFor={name} >{label}</s.Label>
            <s.Input name={name} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
            { error && <s.Error>{error}</s.Error>}
        </s.ContainerInput>
    )
}

