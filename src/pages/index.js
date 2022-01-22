import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Home"
        description="Been Coffee is an independent, family-run coffee shop near Willington, UK"
      />
      <Nav linkClassName="text-navy" />
      <div className="relative flex w-full h-screen overflow-hidden">
        <StaticImage
          className="object-cover w-full h-full lg:hidden homepage-image homepage-image--mobile"
          src="../images/index/mobile.jpg"
          alt="Been Coffee"
        />
        <StaticImage
          className="hidden object-cover w-full h-full lg:block homepage-image"
          src="../images/index/desktop.jpg"
          alt="Been Coffee"
        />

        <AnimatePresence>
          <motion.div
            initial={{ width: "0" }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            animate={{ width: "40%" }}
            exit={{ x: "-500" }}
            className="absolute inset-0 hidden w-2/5 h-full lg:block bg-tuscany overlay"
          ></motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <div className="absolute bottom-0 w-full p-4 mb-32 text-3xl text-right text-butterscotch lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:bottom-auto lg:text-left">
            <h1 className="sr-only">Been Coffee</h1>
            <h2 className="sr-only">
              Independent coffee shop between Derby & Burton, UK.
            </h2>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1, type: "intertia" }}
              className="font-riverside text-navy lg:text-7xl"
            >
              Amazing Coffee.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1, type: "intertia" }}
              className="font-riverside text-tuscany lg:text-white lg:text-6xl"
            >
              Tea. Hot Chocolate.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 1, type: "intertia" }}
              className="font-riverside lg:text-5xl"
            >
              Cobs. Paninis. Cakes.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.9, duration: 1, type: "intertia" }}
              className="mt-4 font-riverside-outline text-navy lg:text-white lg:text-4xl"
            >
              Independent & Family Run
            </motion.p>
          </div>
        </AnimatePresence>
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
