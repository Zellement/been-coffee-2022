import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"

import imgMap from "../images/map.svg"
import imgArrowBee from "../images/arrow-bee.svg"

import { BsChatQuote } from "react-icons/bs"
import { motion } from "framer-motion"
import OpeningHours from "../components/OpeningHours"

import { BsFacebook } from "react-icons/bs"
import { FaTripadvisor } from "react-icons/fa"
import { AiFillGoogleCircle } from "react-icons/ai"

export default function WherePage() {
  return (
    <>
      <Seo
        title="Find Us | Been Coffee"
        description="Find Been Coffee at the Derby & Burton Services, off the A50 and A38 Toyota Island, DE65 6DX"
      />
      <Nav />
      <section className="max-w-screen-md px-8 mx-auto mt-40">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
            Where are we?
          </h1>
        </div>
      </section>
      <section className="px-8 mx-auto mb-40 overflow-hidden max-w-screen-3xl">
        <div className="flex flex-col gap-8 py-16 my-16 bg-white lg:flex-row ">
          <div className="lg:w-2/5 lg:pt-8 lg:pl-8 2xl:w-1/3">
            <h1 className="sr-only">Been Coffee</h1>
            <div className="flex flex-row justify-center w-full gap-16 leading-none font-riverside lg:justify-start">
              <p className="flex flex-col ">
                <span className="text-base text-tuscany">Just off</span>
                <span className="text-2xl md:text-3xl xl:text-4xl">
                  Toyota Island
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-base text-tuscany">On the</span>
                <span className="text-2xl md:text-3xl xl:text-4xl">
                  A50 &amp; A38
                </span>
              </p>
            </div>
            <p className="mt-8 text-center lg:text-left">
              Derby and Burton Services
              <br />
              Etwall Road, Willington
              <br />
              Derby, <br />
              DE65 6DX
            </p>
            <OpeningHours className="mx-auto mt-4 max-w-[300px] text-xs lg:mt-16 lg:ml-0 lg:text-sm" />
          </div>
          <div className="relative ml-[-2%] mb-[-50px] w-[104%] lg:m-0 lg:mt-auto lg:w-3/5 2xl:w-2/3">
            <div className="absolute bottom-0 right-0 z-10 mr-[61%] mb-[17%] h-auto w-[30%]">
              <img src={imgArrowBee} />
            </div>
            <img src={imgMap} />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="w-full overflow-hidden lg:ml-8 lg:h-[400px] lg:w-1/3">
            <StaticImage
              className="object-cover w-full h-full where-image"
              src="../images/where/outside.jpg"
              alt="External shot of Been Coffee"
            />
          </div>

          <div className="flex flex-col gap-8 lg:mb-auto lg:w-3/5">
            <div className="relative w-full p-8 ml-auto bg-navy text-seashell xl:p-16 ">
              <BsChatQuote className="absolute top-0 right-0 -mt-8 text-4xl text-tuscany" />
              <p>
                <span className="text-2xl text-butterscotch">
                  Absolutely amazing!
                </span>{" "}
                Fast and friendly service and good prices, especially for the
                quality. I had a chai latte and it was the best one I have ever
                had. My husband had a coffee and said it was really good,{" "}
                <span className="text-xl">clearly great quality</span>. Just
                stopped on our way home but wish we were more local to be able
                to visit again!{" "}
                <a
                  href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm font-riverside text-butterscotch hover:text-butterscotch-700 focus:text-tuscany-700"
                >
                  - Kelly Barnsley
                </a>
              </p>
            </div>

            <div className="relative w-full p-8 ml-auto bg-seashell xl:p-16 ">
              <BsChatQuote className="absolute top-0 right-0 -mt-8 text-4xl text-tuscany" />
              <p>
                <span className="text-xl text-tuscany">
                  Really great coffee,
                </span>{" "}
                welcoming environment. Good mix of treats with{" "}
                <span className="text-xl">gluten-free and vegan options</span>{" "}
                noted for people with specific diets/allergies.{" "}
                <span className="text-2xl text-tuscany">A hidden gem!</span>
                <a
                  href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-sm font-riverside text-tuscany hover:text-tuscany-700 focus:text-tuscany-700"
                >
                  - Leanne Ford
                </a>
              </p>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <span>See more reviews:</span>
              <a
                target="_blank"
                className="transition duration-300 hover:text-tuscany-500"
                rel="noopener noreferrer"
                href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,,"
              >
                <span className="sr-only">Google</span>
                <AiFillGoogleCircle className="w-12 h-auto" />
              </a>
              <a
                target="_blank"
                className="transition duration-300 hover:text-tuscany-500"
                rel="noopener noreferrer"
                href="https://www.facebook.com/beencoffeeuk/reviews/"
              >
                <span className="sr-only">Facebook</span>{" "}
                <BsFacebook className="block w-10 h-auto" />
              </a>
              <a
                target="_blank"
                className="transition duration-300 hover:text-tuscany-500"
                rel="noopener noreferrer"
                href="https://www.tripadvisor.co.uk/Restaurant_Review-g1234748-d23838579-Reviews-Been_Coffee-Willington_Derbyshire_England.html#REVIEWS"
              >
                <span className="sr-only">Tripdvisor</span>
                <FaTripadvisor className="h-14 w-14" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
