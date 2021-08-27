import React from 'react'
import {LoginBackground } from './loginElements'

const Background = ({Clicked, Open}) => {
    return (
        <LoginBackground Clicked={Clicked} onClick={Open} action=""></LoginBackground>
        )
}

export default Background
