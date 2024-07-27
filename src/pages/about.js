import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"

export default function WhoPage() {
  return (
    <>
      <Seo
        title="Who are we? | Been Coffee"
        description="Been Coffee is a small, independent family-run coffee shop near Derby and Willington, UK"
      />
      <Nav />
      <section className="max-w-screen-md px-8 mx-auto mt-40">
        <div className="content">
          <h1 className="text-4xl text-center font-riverside text-tuscany lg:text-7xl">
            About
          </h1>
        </div>
      </section>
      {/* Hero */}
      <section className="">
        <div className="relative lg:flex lg:flex-row">
          <StaticImage
            className="object-cover w-full h-full g:items-center saz-martin-hero lg:w-3/4 xl:w-3/4"
            src="../images/who/hero.jpg"
            alt="Martin, Dan and Sarah, Directors of Been Coffee"
          />
          <span className="absolute bottom-0 left-0 px-3 py-2 mb-4 ml-4 text-xs font-bold bg-seashell sm:text-base lg:inset-auto lg:right-0 lg:top-1/2 lg:-ml-8 lg:w-4/12 lg:p-8 lg:text-xl xl:w-1/3 2xl:text-2xl">
            Martin, Dan &amp; Sarah
            <span className="block text-[0.9em] font-normal">
              Co-Directors of Been Coffee
            </span>
          </span>
        </div>
      </section>
      <div className="flex flex-col gap-8 mb-16">
        <section className="relative w-full max-w-screen-lg mx-auto mt-4 bg-seashell lg:-mt-8 ">
          <div className="p-4 lg:p-24">
            <h2 className="text-3xl text-center font-riverside-outline lg:text-5xl">
              <span className="block font-riverside text-tuscany-500 lg:inline">
                Hello!
              </span>{" "}
              We're Been Coffee.
            </h2>
            <div className="content">
              <p className="mx-auto max-w-screen-sm  pt-8 text-center text-[1.2em]">
                Been Coffee was founded in late 2021 by Martin, Sarah &amp; Dan,
                with a view to offering an alternative to big brand chains and
                UHT milk coffee machines. Award-winning, independent,
                environmentally-friendly, coffee-loving and dog-friendly, Been
                Coffee serves specialty coffee, loose-leaf tea, locally sourced
                food and more, all hand-crafted in a genuinely welcoming
                environment. The perfect pit-stop for any weary traveller.
              </p>

              <div className="flex flex-row flex-wrap justify-center gap-4 pb-16 border-b border-tuscany-50 ">
                <AnchorLink className="btn btn--tuscany" href="#fooddrink">
                  Food & Drink
                </AnchorLink>
                <AnchorLink className="btn btn--tuscany" href="#environment">
                  Environment
                </AnchorLink>
                <AnchorLink className="btn btn--tuscany" href="#business">
                  Local Business
                </AnchorLink>
                <AnchorLink className="btn btn--tuscany" href="#team">
                  The Team
                </AnchorLink>
                <Link to="/careers/" className="btn btn--tuscany">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
            <h2 id="fooddrink" className="title--who">
              <span>Food</span> & <span>Drink</span>
            </h2>
          </div>
          <div className="content">
            <div className="relative">
              <StaticImage
                className="object-cover w-full h-full "
                src="../images/who/food-drink.jpg"
                alt="Metal recycles forever - picture of cans and bottles, no plastic"
              />
            </div>
            <div class="relative">
              <p className="mx-auto max-w-[450px] py-8 text-center text-lg lg:-mt-12 lg:bg-tuscany-500  lg:p-8 lg:text-white">
                We offer a variety of both food and drink options, come in and
                find out what we have on offer at the moment.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4 text-center">
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Bagels
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Paninis
                </h2>
                <h2 className="m-0 font-riverside-outline ">
                  Sausage, Bacon, Egg & Vegan Sausage Cobs
                </h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-700">
                  Handmade Sausage Rolls
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Cinnamon Buns
                </h2>
                <h2 className="m-0 font-riverside-outline">Cookies</h2>
                <h2 className="m-0 font-riverside-outline ">
                  Cakes & Flapjacks
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Porridge
                </h2>
                <h2 className="m-0 font-riverside-outline">Toast</h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Teacakes
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Croissants
                </h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Flat White
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Long Black
                </h2>
                <h2 className="m-0 font-riverside-outline">Latte</h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Americano
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Cappuccino
                </h2>
                <h2 className="m-0 font-riverside-outline">Cookies</h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-700">
                  Iced Coffee
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Tea
                </h2>
                <h2 className="m-0 font-riverside-outline">Toast</h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Chai, Matcha & Turmeric
                </h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Iced &amp; Bubble Tea
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Juice
                </h2>
                <h2 className="m-0 font-riverside-outline">Pop</h2>
                <h2 className="m-0 font-riverside-outline text-tuscany-500">
                  Milkshakes
                </h2>
                <h2 className="m-0 font-riverside-outline text-butterscotch-500">
                  Smoothies
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
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
            </div>
          </div>
        </section>

        <section className="section--who">
          <div className="mb-8 content lg:mb-16">
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
              <div className="flex flex-col mt-8 lg:flex-row lg:gap-16">
                <div className="m-auto max-w-[270px] lg:m-0 lg:w-2/5 lg:max-w-none">
                  <StaticImage
                    className="object-cover w-full h-full my-auto"
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
                    are a local family butchers who supply much of our meat,
                    including their award winning sausages, and we're really
                    proud to be working with them.
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
                    <a
                      href="https://www.wellsfarmdairy.co.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Wells Farm Dairy
                    </a>{" "}
                    are based in Stafford, just a short drive from our shop, and
                    have been consistently delivering our whole and skimmed
                    milk, as well as supplying high-quality alternative milks
                    and yoghurts too.
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
          <div className="mb-8 content lg:mb-16">
            <h2 id="team" className="title--who">
              {" "}
              Meet Your Friendly <span>Been Team</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="m-auto flex max-w-[270px] items-center md:m-0 md:w-2/5 md:max-w-none">
                <StaticImage
                  className="self-center justify-center block w-full h-auto my-auto clip-hexagon"
                  src="../images/who/martin.jpg"
                  alt="Martin of Been Coffee"
                />
              </div>

              <div className="my-auto content md:w-3/5">
                <h3 className="my-2">Martin</h3>
                <h5 className="mb-8 text-tuscany-500">Co-Director</h5>
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
              <div className="m-auto flex max-w-[270px] items-center md:order-last md:m-0 md:w-2/5 md:max-w-none">
                <StaticImage
                  className="self-center justify-center block w-full h-auto my-auto clip-hexagon"
                  src="../images/who/sarah.jpg"
                  alt="Sarah of Been Coffee"
                />
              </div>

              <div className="my-auto content md:w-3/5">
                <h3 className="my-2">Sarah</h3>
                <h5 className="mb-8 text-tuscany-500">Co-Director</h5>
                <p>
                  Sarah has years of experience in customer satisfaction and
                  logistics, having previously worked for a local business as
                  one of their key client relationship managers.
                </p>
                <p>
                  Sarah joined Martin's venture and together they have formed a
                  formidable business partnership.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-16">
              <div className="m-auto flex max-w-[270px] items-center md:m-0 md:w-2/5 md:max-w-none">
                <StaticImage
                  className="self-center justify-center block w-full h-auto my-auto clip-hexagon"
                  src="../images/who/dan.jpg"
                  alt="Dan of Been Coffee"
                />
              </div>

              <div className="my-auto content md:w-3/5">
                <h3 className="my-2">Dan</h3>
                <h5 className="mb-8 text-tuscany-500">Brand Director</h5>
                <p>
                  As the Brand Director, Dan takes care of all things to do with
                  social media, the website, the till, behind-the-scenes
                  operations as well as improvements when it comes to how the
                  business operates from a digital perspective.
                </p>
                <p>
                  He is the husband of Sarah, and is also known to occasionally
                  be in the shop, either running tables, putting up shelves or
                  drinking coffee in the corner.
                </p>
              </div>
            </div>

            {/* <div className="flex flex-col md:flex-row md:gap-16">
              <div className="m-auto flex max-w-[270px] items-center md:order-last md:m-0 md:w-2/5 md:max-w-none">
                <StaticImage
                  className="self-center justify-center block w-full h-auto my-auto clip-hexagon"
                  src="../images/who/michaela.jpg"
                  alt="Michaela of Been Coffee"
                />
              </div>

              <div className="my-auto content md:w-3/5">
                <h3 className="my-2">Michaela</h3>
                <h5 className="mb-8 text-tuscany-500">Assistant Manager</h5>
                <p>
                  Michaela comes from a local hospitality brand, and brings with
                  her a wealth of managerial experience in the sector.
                </p>
                <p>
                  A resident of the local area, Michaela's drive and passion to
                  offer exceptional service to all Been Coffee's customers is
                  fantastic, and we're lucky to have her.
                </p>
              </div>
            </div> */}
          </div>
          <div className="my-16">
            <StaticImage
              className="object-cover w-full h-full "
              src="../images/who/all-team.jpg"
              alt="The Been Coffee Team"
            />
          </div>
          <div className="flex">
            <Link to="/careers/" className="mx-auto btn btn--tuscany max-w-56">
              Careers
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
