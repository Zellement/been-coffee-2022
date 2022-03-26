
import { BsFacebook } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai"

import React from 'react'

export default function Social(){
    return (
        <div className="mt-16 flex flex-row items-center gap-4 justify-center">
        <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.instagram.com/beencoffeeuk"><span className="sr-only">Instagram</span><AiFillInstagram className="w-12 h-auto" /></a>
        <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.facebook.com/beencoffeeuk/"><span className="sr-only">Facebook</span> <BsFacebook className="w-10 h-auto block" /></a>
        <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://g.page/r/CQloYOaIw3PdEAE"><span className="sr-only">Google</span><AiFillGoogleCircle className="w-12 h-auto" /></a>
        <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html"><span className="sr-only">Tripdvisor</span><FaTripadvisor className="w-14 h-14" /></a>
      </div>
    )
}