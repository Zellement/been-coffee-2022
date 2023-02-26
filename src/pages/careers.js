import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Barista from "../components/Careers/Barista"

export default function WhoPage() {
  return (
    <>
      <Seo
        title="Careers at Been Coffee | Been Coffee"
        description="See what career opportunities we have"
      />
      <Nav />
      <section className="max-w-screen-md px-8 mx-auto mt-40 mb-32">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
            Careers
          </h1>
          {/* <p>
            No career opportunities at the moment. Please watch our social media
            for updates.
          </p> */}
        </div>
      </section>
      <div className="flex flex-col gap-8 mb-16">
        {/* <section className="relative w-full max-w-screen-lg mx-auto mt-4 bg-seashell lg:-mt-8 ">
          <div className="p-4 lg:p-24">
            <div className="flex flex-col max-w-screen-sm gap-4 mx-auto text-center content">
              <p className=" text-[1.2em]">
                Check out our latest vacancy on Indeed.
              </p>

              <a
                className="self-center btn btn--tuscany"
                href="https://uk.indeed.com/viewjob?t=barista&jk=3551a4db6c4e39bd&_ga=2.97266326.8629226.1657901644-1484270990.1653321818"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to Indeed
              </a>
            </div>
          </div>
        </section> */}

        <Barista />

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
            <h2 id="business" className="title--who">
              Want to <span>know more?</span>
            </h2>
          </div>
          <div className="content">
            <p className=" border-l  border-tuscany-500 pl-8 text-[1.2em]">
              We'd love to receive speculative CVs, so if you're interested in
              working with us, email{" "}
              <a href="mailto:careers@been.coffee">careers@been.coffee</a> with
              your CV and covering letter, or contact us via one of our social
              media platforms.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
