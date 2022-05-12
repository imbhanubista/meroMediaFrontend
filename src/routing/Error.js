import { Image } from '@chakra-ui/react'
import React from 'react'
import errorPhoto from "../images/error.jpeg"

const Error = () => {
  return (
    <div>
<Image src={errorPhoto} alt="You are in wrong place "/>
    </div>
  )
}

export default Error