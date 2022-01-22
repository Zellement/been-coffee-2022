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

        {/* Mobile */}

        <div className="w-full h-full lg:hidden homepage-image homepage-image--mobile">
          <StaticImage
            className="object-cover w-full h-full"
            src="../images/index/mobile.jpg"
            alt="Barista at Been Coffee"
          />
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ width: "0", opacity: 0 }}
            transition={{ delay: 1.5, duration: 2,  type: "tween" }}
            animate={{ width: "100%", opacity: 1 }}
            className="absolute bottom-0 mb-24 right-0 w-full h-[300px] max-w-[400px] lg:hidden bg-tuscany overlay"
          ></motion.div>
        </AnimatePresence>

        {/* Desktop */}

        <div className="hidden w-full h-screen lg:block homepage-image">
          <StaticImage
            className="object-cover w-full h-full"
            src="../images/index/desktop.jpg"
            alt="Internal shot of Been Coffee"
          />
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ width: "0" }}
            transition={{ delay: 1.5, duration: 0.5, type: "spring" }}
            animate={{ width: "35%" }}
            exit={{ x: "-500" }}
            className="absolute inset-0 hidden w-2/5 h-full lg:block bg-tuscany overlay"
          ></motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <div className="absolute bottom-0 w-full p-4 mb-56 text-3xl text-right text-butterscotch lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:bottom-auto lg:text-left">
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
              className="text-white font-riverside lg:text-6xl"
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
    </>
  )
}

export default IndexPage
