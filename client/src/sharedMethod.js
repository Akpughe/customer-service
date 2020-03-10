import React, {useState} from 'react'

const handleInput = event => {

const [[], setName] = useState([])

 const {value, name} = event.target;

 setName({[name] : value})

 return null
}


export {handleInput}

