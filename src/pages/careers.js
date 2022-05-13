import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"

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
          {/* <p>No career opportunities at the moment. Please watch our social media for updates.</p> */}
          {/* <Social /> */}
        </div>
      </section>
      <div className="flex flex-col gap-8 mb-16">
        <section className="relative w-full max-w-screen-lg mx-auto mt-4 bg-seashell lg:-mt-8 ">
          <div className="p-4 lg:p-24">
            <div className="flex flex-col max-w-screen-sm gap-4 mx-auto text-center content">
              <p className=" text-[1.2em]">
                Been Coffee opened on the 13th December, and since then Martin
                &amp; Sarah have been working hard to make it a success.
              </p>

              <p className="">
                Cal joined us in April, and has helped us enormously.
              </p>

              <p className="">
                We are now in a fortunate enough position to hire our number
                four.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="relative grid max-w-screen-xl grid-cols-1 gap-16 px-4 mx-auto mt-4 sm:grid-cols-2 md:px-0 lg:grid-cols-4">
            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto"
                src="../images/who/martin.jpg"
                alt="Martin Witheford of Been Coffee"
              />
              <h3 className="absolute bottom-0 left-0 p-2 text-white bg-tuscany">
                Martin Witheford (Director)
              </h3>
            </div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto"
                src="../images/who/sarah.jpg"
                alt="Sarah Farrow of Been Coffee"
              />
              <h3 className="absolute bottom-0 left-0 p-2 text-white bg-tuscany">
                Sarah Farrow (Director)
              </h3>
            </div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto"
                src="../images/who/cal.jpg"
                alt="Cal Allwright of Been Coffee"
              />
              <h3 className="absolute bottom-0 left-0 p-2 text-white bg-tuscany">
                Cal Allwright (Barista)
              </h3>
            </div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto"
                src="../images/who/rafe.jpg"
                alt="Rafe Alton of Been Coffee"
              />
              <h3 className="absolute bottom-0 left-0 p-2 text-white bg-tuscany">
                Rafe Alton (Barista)
              </h3>
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
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="">
                <p>
                  We are looking for our number four to join our close team.
                </p>
                <p>
                  If you are looking to join a small, independent business and
                  really want to help the company succeed, this could be the
                  role for you.
                </p>
                <p>All training will be delivered on-the-job.</p>
              </div>

              <ul className="">
                <li>
                  - Starting at 12-16 hours per week, but likely to increase
                </li>
                <li>
                  - Must be able to work some morning shifts (from around 7am or
                  8am) during the week
                </li>
                <li>- Must be able to work some Saturdays and most Sundays</li>
                <li>- Ability to travel to Been Coffee</li>
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
              The best way we can communicate what we want from someone is a
              face-to-face discussion in our shop. To book in a quick informal
              discussion, please email{" "}
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
