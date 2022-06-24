import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"
import AnchorLink from "react-anchor-link-smooth-scroll"

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
                Although we have no vacancies immediately, we are always looking
                for friendly staff to help cover shifts.
              </p>

              <AnchorLink
                href="#the-role"
                className="self-center btn btn--tuscany"
              >
                What we're looking for
              </AnchorLink>
            </div>
          </div>
        </section>

        <section>
          <div className="relative grid max-w-screen-xl grid-cols-1 gap-16 px-4 mx-auto mt-4 sm:grid-cols-2 md:px-0 lg:grid-cols-6">
            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto clip-hexagon"
                src="../images/who/martin.jpg"
                alt="Martin of Been Coffee"
              />
              <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
                Martin
              </h3>
            </div>

<div className="relative">
  <StaticImage
    className="object-cover w-full h-full my-auto clip-hexagon"
    src="../images/who/sarah.jpg"
    alt="Sarah of Been Coffee"
  />
  <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
    Sarah
  </h3>
</div>

<div className="relative">
  <StaticImage
    className="object-cover w-full h-full my-auto clip-hexagon"
    src="../images/who/michaela.jpeg"
    alt="Michaela of Been Coffee"
  />
  <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
    Michaela
  </h3>
</div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto clip-hexagon"
                src="../images/who/cal.jpg"
                alt="Cal of Been Coffee"
              />
              <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
                Cal
              </h3>
            </div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto clip-hexagon"
                src="../images/who/rafe.jpg"
                alt="Rafe of Been Coffee"
              />
              <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
                Rafe
              </h3>
            </div>

            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full my-auto clip-hexagon"
                src="../images/who/jess.jpeg"
                alt="Jess of Been Coffee"
              />
              <h3 className="absolute bottom-0 p-2 m-0 text-white -translate-x-1/2 bg-tuscany left-1/2">
                Jess
              </h3>
            </div>
          </div>
        </section>

        <section id="the-role" className="section--who">
          <div className="mb-8 content lg:mb-16">
            <h2 id="environment" className="title--who">
              The <span>Role</span>
            </h2>
          </div>
          <div className="content">
            <p>We are always looking for keen people to join our close team.</p>
            <p>
              If you are looking to join a small, independent business and
              really want to help the company succeed, why not get in touch with
              us.
            </p>
            <p>All training will be delivered on-the-job.</p>
            <h3>Great candidates will fit the following;</h3>

            <ul className="ml-12 list-disc">
              <li>
                Open to variable hours, we can work around you - from 8 hours
                per week up to 40 hours per week
              </li>
              <li>
                Must be able to work some morning shifts (from around 7am or
                8am) during the week
              </li>
              <li>
                Must be able to work some Saturdays and/or Sundays, as well as
                some bank holidays (these are our busiest periods)
              </li>
              <li>Ability to travel to Been Coffee</li>
              <li>
                Salary dependent on experience, but starting at living wage
              </li>
              <li>
                Previous hospitality experience a plus, previous coffee shop /
                cafe experience a huge bonus
              </li>
            </ul>
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
             We'd love to receive speculative  CVs, so if you're interested in working with us, email <a href="mailto:careers@been.coffee">careers@been.coffee</a> with
              your CV and covering letter, or contact us via one of our social
              media platforms.
            </p>
            {/* <p className=" border-l  border-tuscany-500 pl-8 text-[1.2em]">
              The best way we can communicate what we want from someone is a
              face-to-face discussion in our shop. To book in a quick informal
              discussion, please email{" "}
              <a href="mailto:careers@been.coffee">careers@been.coffee</a> with
              your CV and covering letter, or contact us via one of our social
              media platforms.
            </p> */}
          </div>
        </section>
      </div>
    </>
  )
}
