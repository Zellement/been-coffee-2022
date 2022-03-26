import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { StaticImage } from "gatsby-plugin-image"

import { BsChatQuote, BsCloudHaze2Fill } from "react-icons/bs"
import { motion } from "framer-motion"
import Social from "../components/Social"
import { Link } from "gatsby"

export default function WhoPage() {
  return (
    <>
      <Seo
        title="Careers at Been Coffee"
        description="See what career opportunities we have"
      />
      <Nav />
      <section className="max-w-screen-md px-8 mx-auto mt-40 mb-32">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
           Careers
          </h1>
          <p>No career opportunities at the moment. Please watch our social media for updates.</p>
          <Social />
        </div>
      </section>
      {/* <div className="flex flex-col gap-8 mb-16">
        <section className="relative w-full max-w-screen-lg mx-auto mt-4 bg-seashell lg:-mt-8 ">
          <div className="p-4 lg:p-24">
            <div className="content">
              <p className="mx-auto max-w-screen-sm  pt-8 text-center text-[1.2em]">
               Been Coffee opened on the 13th December, and since then Martin & Sarah have been working hard to make it a success.</p>

              <p className="max-w-screen-sm pt-8 mx-auto text-center">We are now in a fortunate enough position to hire our pivotal number three.
              </p>
            </div>
          </div>
        </section>

        <section>
        <div className="relative grid max-w-screen-xl mx-auto grid-cols-1 mt-4 sm:grid-cols-3 gap-16 px-4 md:px-0">

        
              <div className="relative">
                <StaticImage
                  className="object-cover w-full h-full my-auto"
                  src="../images/who/martin.jpg"
                  alt="Martin Witheford of Been Coffee"
                />
                <h3 className="absolute bottom-0 left-0 p-2 bg-tuscany text-white">Martin Witheford</h3>
              </div>
        
              <div className="relative">
                <StaticImage
                  className="object-cover w-full h-full my-auto"
                  src="../images/who/sarah.jpg"
                  alt="Sarah Farrow of Been Coffee"
                />
                <h3 className="absolute bottom-0 left-0 p-2 bg-tuscany text-white">Sarah Farrow</h3>
              </div>
        
              <div className="relative">
                <div className="w-full h-full border-2 border-tuscany flex min-h-[320px]">
                  <span className="text-8xl m-auto">?</span>
                </div>
                <h3 className="absolute bottom-0 left-0 p-2 bg-tuscany text-white">You here?</h3>
              </div>

        </div>

        </section>

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
            <h2 id="environment" className="title--who">
              The <span>Role</span>
            </h2>
          </div>
          <div className="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="">

                <p>We are looking for our pivotal number three to join our close team. The number three role will be an important role to help Been Coffee become more successful, so we really need someone who wants to help the business grow.</p>
                <p>If you are looking to join a small, independent business and really want to help the company succeed, this could be the role for you.</p>

              </div>

              <ul className="">
                <li>- Up to 12-16 hours per week</li>
                <li>- Hours expected to increase over time</li>
                <li>- Ability to travel to Been Coffee</li>
                <li>- Ability to work most days of the week, including occassional weekends</li>
                <li>- Salary dependent on experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
            <h2 id="business" className="title--who">
              Want to <span>know more?</span>
            </h2>
          </div>
          <div className="content">
            <p className=" border-l  border-tuscany-500 pl-8 text-[1.2em]">
              The best way we can communicate what we want from someone is a face-to-face discussion in our shop. To book in a quick informal discussion, please email <a href="mailto:careers@been.coffee">careers@been.coffee</a> with your CV and covering letter, or contact us via one of our social media platforms.
            </p>
          </div>
        </section>

      </div> */}
    </>
  )
}
