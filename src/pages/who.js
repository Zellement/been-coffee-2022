import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { StaticImage } from "gatsby-plugin-image"

import { BsChatQuote } from "react-icons/bs"
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
      <section className="max-w-screen-md px-8 mx-auto mt-40">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
            Who are we?
          </h1>
        </div>
      </section>
      <section className="">
        <div className="relative lg:flex lg:flex-row">
          <StaticImage
            className="object-cover w-full h-full g:items-center saz-martin-hero lg:w-3/4 xl:w-3/4"
            src="../images/who/saz-martin-hero.jpg"
            alt="Martin and Sarah, Directors of Been Coffee"
          />
          <span className="absolute bottom-0 left-0 px-3 py-2 mb-4 ml-4 text-xs font-bold bg-seashell sm:text-base lg:inset-auto lg:right-0 lg:top-1/2 lg:-ml-8 lg:w-4/12 lg:p-8 lg:text-xl xl:w-1/3 2xl:text-2xl">
            Martin &amp; Sarah
            <span className="block text-[0.9em] font-normal">
              Directors of Been Coffee
            </span>
            <span className="block text-[0.7em] font-normal opacity-70">
              Brother-in-Law & Sister-in-Law
            </span>
          </span>
        </div>
      </section>
      <section className="relative max-w-screen-lg mx-auto mt-4 lg:-mt-8 ">
        <div className="p-4 bg-seashell lg:p-24">
          <h2 className="text-3xl text-center font-riverside-outline lg:text-5xl">
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

            <div className="flex flex-row flex-wrap justify-center gap-4 pb-16 border-b border-tuscany-50 ">
              <AnchorLink className="btn btn--tuscany" href="#environment">
                Environment
              </AnchorLink>
              <AnchorLink className="btn btn--tuscany" href="#suppliers">
                Suppliers
              </AnchorLink>
              <AnchorLink className="btn btn--tuscany" href="#team">
                The Team
              </AnchorLink>
            </div>

            <h3 id="environment">Doing our bit for the environment</h3>

            <div className="relative">
              <p className="lg:w-2/5">
                We strive to make everything as environmentally friendly and
                sustainable as possible; our takeaway cups are compostable (even
                the lids!), our pre-packed drinks are all in cans (no plastic!)
                and we strive to choose{" "}
                <AnchorLink href="#suppliers">suppliers</AnchorLink> that share
                our vision for a greener future.
              </p>

              <div className="w-full h-auto my-8 lg:absolute lg:top-0 lg:right-0 lg:w-1/2">
                <div className="relative">
                  <StaticImage
                    className="object-cover w-full h-full polygon-clip-mask--bl"
                    src="../images/who/cans.jpg"
                    alt="Metal recycles forever - picture of cans and bottles, no plastic"
                  />
                  <span className="absolute bottom-0 right-0 z-10 max-w-sm p-1 mb-2 mr-2 text-xs text-right text-white bg-tuscany">
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

              <h3 id="suppliers">Supporting local businesses</h3>

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
                <div className="flex flex-col lg:flex-row lg:gap-16">
                  <div className="max-w-xs mx-auto my-auto lg:w-2/5">
                    <StaticImage
                      className="my-auto"
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
                      , and they've been extremely supportive since we started
                      up. We've tried everything they've supplied, and it's
                      amazing.
                    </p>
                    <p>
                      Huge shout out to Beth for supplying us and our customers
                      with amazing cakes and cookies!
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-16">
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
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-16">
                  <div className="lg:w-1/2">
                    <h4 className="mt-0">Wells Farm Dairy</h4>
                    <p>
                      Wells Farm Dairy are based in Stafford, just a a short
                      drive from our shop, and have been consistently delivering
                      our whole and skimmed milk, as well as supplying
                      high-quality alternative milks too.
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
          </div>
        </div>
      </section>
      <section className="relative max-w-screen-lg pb-40 mx-auto mt-4 lg:-mt-8">
        <div className="p-4 content bg-seashell lg:p-16">
          <h2
            id="team"
            className="text-2xl text-center font-riverside-outline lg:text-5xl"
          ></h2>
          <h2 className="text-3xl text-center font-riverside-outline lg:text-5xl">
            {" "}
            Meet Your Friendly{" "}
            <span className="block font-riverside text-tuscany-500 lg:inline">
              Been Team
            </span>
          </h2>
        </div>
      </section>
      {/* <section className="px-8 mx-auto mb-40 overflow-hidden max-w-screen-3xl">
        <div className="flex flex-col gap-8 py-16 my-16 bg-white lg:flex-row ">
          <div className="lg:w-2/5 lg:pt-8 lg:pl-8 2xl:w-1/3">
            <h1 className="sr-only">Been Coffee</h1>
            <div className="flex flex-row justify-center w-full gap-16 leading-none lg:justify-start font-riverside">
              <p className="flex flex-col ">
                <span className="text-base text-tuscany">Just off</span>
                <span className="text-2xl xl:text-4xl md:text-3xl">
                  Toyota Island
                </span>
              </p>
              <p className="flex flex-col">
                <span className="text-base text-tuscany">On the</span>
                <span className="text-2xl xl:text-4xl md:text-3xl">
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
          </div>
          <div className="relative w-[104%] ml-[-2%] mb-[-50px] lg:m-0 lg:w-3/5 2xl:w-2/3">
            <div className="absolute bottom-0 w-[30%] h-auto right-0 mr-[61%] mb-[17%] z-10">
              <img src={imgArrowBee} />
            </div>
            <img src={imgMap} />
          </div>
        </div>


        <div className="relative w-full ml-auto lg:w-3/5 mt-8 lg:mt-[-150px] xl:mt-[-100px] xl:p-16 bg-seashell p-8 ">
          <BsChatQuote className="absolute top-0 right-0 -mt-8 text-4xl text-tuscany" />
          <p><span className="text-2xl text-tuscany">Absolutely amazing!</span> Fast and friendly service and good prices, especially for the quality. I had a chai latte and it was the best one I have ever had. My husband had a coffee and said it was really good, <span className="text-xl">clearly great quality</span>. Just stopped on our way home but wish we were more local to be able to visit again! <a href="https://www.google.com/search?q=been+coffee&rlz=1C1CHBF_en-GBGB838GB838&oq=been+coffee&aqs=chrome..69i57j46i512l2j0i10i512j0i512j69i60l2j69i61.1931j0j4&sourceid=chrome&ie=UTF-8#lrd=0x4879f76a544386ad:0xdd73c388e6606809,1,,," rel="noopener noreferrer" target="_blank" className="text-sm hover:text-tuscany-700 focus:text-tuscany-700 font-riverside text-tuscany">- Kelly Barnsley</a></p>
        </div>

      </section> */}
    </>
  )
}
