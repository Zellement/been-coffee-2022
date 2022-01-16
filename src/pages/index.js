import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <>
      <Seo title="Home" description="Been Coffee is an independent, family-run coffee shop near Willington, UK" />
      <Nav linkClassName="text-navy" />
      <div className="relative flex w-full h-screen overflow-hidden">
        <StaticImage
          className="object-cover w-full h-full lg:hidden homepage-image homepage-image--mobile"
          src="../images/index/mobile.jpg"
          alt="Been Coffee"
        />
        <StaticImage
          className="hidden object-cover w-full h-full lg:block"
          src="../images/index/desktop.jpg"
          alt="Been Coffee"
        />

        <div className="absolute bottom-0 w-full p-4 mb-32 text-3xl text-right text-butterscotch">
            <h1 className="sr-only">Been Coffee</h1>
            <h2 className="sr-only">
              Independent coffee shop between Derby & Burton, UK.
            </h2>
            <p className="font-riverside text-navy">Amazing Coffee.</p>
            <p className="font-riverside text-tuscany">Tea. Hot Chocolate.</p>
            <p className="font-riverside">Cobs. Paninis. Cakes.</p>
            <p className="mt-4 font-riverside-outline text-navy">Independent & Family Run</p>
          </div>
      </div>
      {/* <section className="max-w-screen-md px-4 py-40 mx-auto">
        <div className="content">
          <h1 className="">Home Page</h1>
        </div>

        <div className="content">
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <h2>Lorem ipsum dolor sit amet</h2>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </section> */}
    </>
  )
}

export default IndexPage
