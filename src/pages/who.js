import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { StaticImage } from "gatsby-plugin-image"

import { BsChatQuote, BsCloudHaze2Fill } from "react-icons/bs"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export default function WhoPage() {
  return (
    <>
      <Seo
        title="Who are we?"
        description="Been Coffee is a small, independent family-run coffee shop near Derby and Willington, UK"
      />
      <Nav />
      <section className="mx-auto mt-40 max-w-screen-md px-8">
        <div className="content">
          <h1 className="text-center font-riverside text-4xl text-tuscany lg:text-7xl">
            Who are we?
          </h1>
        </div>
      </section>
      {/* Hero */}
      <section className="">
        <div className="relative lg:flex lg:flex-row">
          <StaticImage
            className="g:items-center saz-martin-hero h-full w-full object-cover lg:w-3/4 xl:w-3/4"
            src="../images/who/saz-martin-hero.jpg"
            alt="Martin and Sarah, Directors of Been Coffee"
          />
          <span className="absolute bottom-0 left-0 mb-4 ml-4 bg-seashell px-3 py-2 text-xs font-bold sm:text-base lg:inset-auto lg:right-0 lg:top-1/2 lg:-ml-8 lg:w-4/12 lg:p-8 lg:text-xl xl:w-1/3 2xl:text-2xl">
            Martin &amp; Sarah
            <span className="block text-[0.9em] font-normal">
              Co-Directors of Been Coffee
            </span>
            <span className="block text-[0.7em] font-normal opacity-70">
              Brother-in-Law & Sister-in-Law
            </span>
          </span>
        </div>
      </section>
      <div className="flex flex-col gap-8  mb-16">
        <section className="relative mx-auto mt-4 w-full max-w-screen-lg bg-seashell lg:-mt-8 ">
          <div className=" p-4 lg:p-24">
            <h2 className="text-center font-riverside-outline text-3xl lg:text-5xl">
              <span className="block font-riverside text-tuscany-500 lg:inline">
                Hello!
              </span>{" "}
              We're Been Coffee.
            </h2>
            <div className="content">
              <p className="mx-auto max-w-screen-sm  pt-8 text-center text-[1.2em]">
                Been Coffee was founded in late 2021 by Martin and Sarah, with a
                view to offering an alternative to big brand chains and UHT milk
                coffee machines.
              </p>

              <div className="flex flex-row flex-wrap justify-center gap-4 border-b border-tuscany-50 pb-16 ">
                <AnchorLink className="btn btn--tuscany" href="#environment">
                  Environment
                </AnchorLink>
                <AnchorLink className="btn btn--tuscany" href="#business">
                  Local Business
                </AnchorLink>
                <AnchorLink className="btn btn--tuscany" href="#team">
                  The Team
                </AnchorLink>
              </div>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="content mb-8 lg:mb-16">
            <h2 id="environment" className="title--who">
              {" "}
              Doing our bit <span>for the environment</span>
            </h2>
          </div>
          <div className="content">
            <div className="relative">
              <p className="lg:w-2/5">
                We strive to make everything as environmentally friendly and
                sustainable as possible; our takeaway cups are compostable (even
                the lids!), our pre-packed drinks are all in cans (no plastic!)
                and we strive to choose{" "}
                <AnchorLink href="#suppliers">suppliers</AnchorLink> that share
                our vision for a greener future.
              </p>

              <div className="my-8 h-auto w-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2">
                <div className="relative">
                  <StaticImage
                    className="polygon-clip-mask--bl h-full w-full object-cover"
                    src="../images/who/cans.jpg"
                    alt="Metal recycles forever - picture of cans and bottles, no plastic"
                  />
                  <span className="absolute bottom-0 right-0 z-10 mb-2 mr-2 max-w-sm bg-tuscany p-1 text-right text-xs text-white">
                    #MetalRecyclesForever, so we've chosen to limit our plastic
                    usage
                  </span>
                </div>
              </div>

              <p className="lg:w-2/5">
                When we opened in late 2021, we decided we wanted to prioritise
                helping our environment as much as a small business can, by
                choosing to use sustainably sourced ingredients and reduce the
                amount of non-recyclable waste we were producing.
              </p>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="content mb-8 lg:mb-16">
            <h2 id="business" className="title--who">
              Supporting <span>local businesses</span>
            </h2>
          </div>
          <div className="content">
            <p className="max-w-screen-md border-l  border-tuscany-500 pl-8 text-[1.2em]">
              As a small, independent and local business, we are continually
              trying to find suppliers that are also local so we can help
              support the small, independent supply chain.
            </p>
            <p>
              We're super proud to use a local bakery for many of our sweet
              snacks, a local dairy for our milk and a local farm for many of
              our savoury and meat products.
            </p>

            <div className="flex flex-col gap-8">
              <div className="mt-8 flex flex-col lg:flex-row lg:gap-16">
                <div className="m-auto max-w-[270px] lg:m-0 lg:w-2/5 lg:max-w-none">
                  <StaticImage
                    className="my-auto h-full w-full object-cover"
                    src="../images/who/the-bakehouse.png"
                    alt="The Bakehouse Derby"
                  />
                </div>

                <div className="my-auto lg:w-3/5">
                  <h4 className="mt-0">The Bakehouse Derby</h4>
                  <p>
                    We were excited to find{" "}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.instagram.com/thebakehousederby/"
                    >
                      The Bakehouse Derby
                    </a>
                    , and they've been extremely supportive since we started up.
                    We've tried everything they've supplied, and it's amazing.
                  </p>
                  <p>
                    Huge shout out to Beth for supplying us and our customers
                    with amazing cakes and cookies!
                  </p>
                </div>
              </div>
              {/* <div className="flex flex-col lg:flex-row lg:gap-16">
                  <div className="my-auto lg:w-3/5">
                    <h4 className="mt-0">Owen Taylor</h4>
                    <p>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.owentaylor.co.uk/"
                      >
                        Owen Taylor
                      </a>{" "}
                      supply much of our meat, including their award winning
                      sausages, and we're really proud to be working with them.
                    </p>
                  </div>
                  <div className="order-first my-auto lg:order-last lg:w-2/5">
                    <StaticImage
                      className="my-auto"
                      src="../images/who/owen-taylor.jpg"
                      alt="Owen Taylor"
                    />
                  </div>
                </div> */}
              <div className="flex flex-col lg:flex-row lg:gap-16">
                <div className="lg:w-1/2">
                  <h4 className="mt-0">Wells Farm Dairy</h4>
                  <p>
                    <a
                      href="https://www.wellsfarmdairy.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wells Farm Dairy
                    </a>{" "}
                    are based in Stafford, just a a short drive from our shop,
                    and have been consistently delivering our whole and skimmed
                    milk, as well as supplying high-quality alternative milks
                    too.
                  </p>
                </div>

                <div className=" lg:w-1/2">
                  <h4 className="mt-0">Fancy working with us?</h4>
                  <p>
                    We'd love to hear from you if you have something we could
                    stock.
                  </p>
                  <Link to="/contact/" className="btn btn--tuscany">
                    Get in touch with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="content mb-8 lg:mb-16">
            <h2 id="team" className="title--who">
              {" "}
              Meet Your Friendly <span>Been Team</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="m-auto max-w-[270px] md:m-0 md:w-2/5 md:max-w-none">
                <StaticImage
                  className="my-auto h-full w-full object-cover"
                  src="../images/who/martin.jpg"
                  alt="Martin Witheford of Been Coffee"
                />
              </div>

              <div className="content my-auto md:w-3/5">
                <h3 className="my-2">Martin Witheford</h3>
                <h5 className="mb-8">Co-Director & Founder</h5>
                <p>
                  Martin has spent a considerable time as a manager at a major
                  UK coffee shop chain. He has years of experience managing a
                  coffee shop and over time has built up a credible reputation
                  with his peers and customers.
                </p>
                <p>
                  Martins's dream to open his own coffee shop has finally come
                  true with Been Coffee.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="md:w-2/5 max-w-[270px] m-auto md:m-0 md:max-w-none md:order-last">
                <StaticImage
                  className="my-auto h-full w-full object-cover"
                  src="../images/who/sarah.jpg"
                  alt="Sarah Farrow of Been Coffee"
                />
              </div>

              <div className="content my-auto md:w-3/5">
                <h3 className="my-2">Sarah Farrow</h3>
                <h5 className="mb-8">Co-Director & Founder</h5>
                <p>
                  Sarah has years of experience in customer satisfaction, having
                  previously worked for a local business as one of their key
                  client relationship managers.
                </p>
                <p>
                  Sarah joined Martin's venture and together they have formed a
                  formidable business partnership.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
