import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { StaticImage } from "gatsby-plugin-image"

import { BsChatQuote, BsCloudHaze2Fill } from "react-icons/bs"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import ContactForm from "../components/ContactForm"

import { BsFacebook } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai"

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Thanks"
        description="Thanks for getting in touch with us"
      />
      <Nav />
      <section className="mx-auto mt-40 max-w-screen-md px-8">
        <div className="content">
          <h1 className="text-center font-riverside text-4xl text-tuscany lg:text-7xl">
            Thanks!
          </h1>
        </div>
      </section>
      <section className="my-24 max-w-screen-md mx-auto md:p-16 bg-seashell p-8 lg:p-24 xl:p-32">
          <p className="mb-8">Thanks for getting in touch with us. We'll get back to you as soon as possible.</p>
            
            <div className="mt-16 flex flex-row items-center gap-4 justify-center">
              <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.instagram.com/beencoffeeuk"><span className="sr-only">Google</span><AiFillInstagram className="w-12 h-auto" /></a>
              <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.facebook.com/beencoffeeuk/"><span className="sr-only">Facebook</span> <BsFacebook className="w-10 h-auto block" /></a>
              <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://g.page/r/CQloYOaIw3PdEAE"><span className="sr-only">Google</span><AiFillGoogleCircle className="w-12 h-auto" /></a>
              <a target="_blank" className="hover:text-tuscany-500 transition duration-300" rel="noopener noreferrer" href="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html"><span className="sr-only">Tripdvisor</span><FaTripadvisor className="w-14 h-14" /></a>
            </div>
      </section>
   
    </>
  )
}
