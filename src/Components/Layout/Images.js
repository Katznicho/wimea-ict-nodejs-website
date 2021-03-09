import React , {useState, useEffect}from 'react';

import Image from './Image'
import './Image.css'

function Images() {
    const [random, setRandom] = useState(Math.floor(Math.random()*7))
    console.log(`Am random:${random}`)
    const imageArray = [
        {
            id:1,
            url:"./images/first.png",
            title:"plan effectively know your weather",
            width:"100%"
        },
        {
            id:2,
            url:"./images/second.png",
            title:"want to know when to plant it ",
            width:"100%"
        },
        {
            id:3,
            url:"./images/third.png",
            title:"farmers make the right decisions",
            width:"100%"
        },
        {
            id:4,
            url:"./images/fourth.png",
            title:"stay informed with us we make you better",
            width:"100%"
        },
        {
            id:5,
            url:"./images/fifth.png",
            title:"sustainable farming starts with information",
            width:"100%"
        },
        {
            id:6,
            url:"./images/first.png",
            title:"plan effectively know your weather",
            width:"100%"
        },
        {
            id:6,
            url:"./images/first.png",
            title:"plan effectively know your weather",
            width:"100%"
        },

        

    ]

    const changeImage = ()=>{
        setRandom(Math.random()*7)
        return random

    }
    const [images, setImages] = useState(imageArray[random])
    return (
        <div className="images"> 
        <Image backgroundImage = {images} />
        </div>
    )
}

export default Images
