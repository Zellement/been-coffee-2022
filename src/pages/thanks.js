import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { BsFacebook } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai"

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Thanks | Been Coffee"
        description="Thanks for getting in touch with us"
      />
      <Nav />
      <section className="max-w-screen-md px-8 mx-auto mt-40">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
            Thanks!
          </h1>
        </div>
      </section>
      <section className="max-w-screen-md p-8 mx-auto my-24 bg-seashell md:p-16 lg:p-24 xl:p-32">
        <p className="mb-8">
          Thanks for getting in touch with us. We'll get back to you as soon as
          possible.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 mt-16">
          <a
            target="_blank"
            className="transition duration-300 hover:text-tuscany-500"
            rel="noopener noreferrer"
            href="https://www.instagram.com/beencoffeeuk"
          >
            <span className="sr-only">Google</span>
            <AiFillInstagram className="w-12 h-auto" />
          </a>
          <a
            target="_blank"
            className="transition duration-300 hover:text-tuscany-500"
            rel="noopener noreferrer"
            href="https://www.facebook.com/beencoffeeuk/"
          >
            <span className="sr-only">Facebook</span>{" "}
            <BsFacebook className="block w-10 h-auto" />
          </a>
          <a
            target="_blank"
            className="transition duration-300 hover:text-tuscany-500"
            rel="noopener noreferrer"
            href="https://g.page/r/CQloYOaIw3PdEAE"
          >
            <span className="sr-only">Google</span>
            <AiFillGoogleCircle className="w-12 h-auto" />
          </a>
          <a
            target="_blank"
            className="transition duration-300 hover:text-tuscany-500"
            rel="noopener noreferrer"
            href="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html"
          >
            <span className="sr-only">Tripdvisor</span>
            <FaTripadvisor className="h-14 w-14" />
          </a>
        </div>
      </section>
    </>
  )
}
