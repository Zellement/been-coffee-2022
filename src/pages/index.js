import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"

import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"

export default function IndexPage() {
  return (
    <>
      <Seo
        title="Been Coffee | Coffee shop at Derby & Burton Services off Toyota Island on the A38 and A50"
        description="Been Coffee is an independent, family-run coffee shop with amazing coffee, cakes, cobs & paninis near Derby & Willington, UK"
      />
      <Nav linkClassName="text-navy" />
      <div className="relative flex w-full h-screen overflow-hidden">
        {/* Mobile */}

        <div className="w-full h-full homepage-image homepage-image--mobile lg:hidden">
          <StaticImage
            className="object-cover w-full h-full"
            src="../images/index/mobile.jpg"
            alt="Barista at Been Coffee"
          />
        </div>

        <AnimatePresence>
          <motion.div
            initial={{ width: "0", opacity: 0 }}
            transition={{ delay: 1.5, duration: 2, type: "tween" }}
            animate={{ width: "100%", opacity: 1 }}
            className="overlay absolute bottom-0 right-0 mb-24 h-[300px] w-full max-w-[400px] bg-tuscany lg:hidden"
          ></motion.div>
        </AnimatePresence>

        {/* Desktop */}

        <div className="hidden w-full h-screen homepage-image lg:block">
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
            className="absolute inset-0 hidden w-2/5 h-full overlay bg-tuscany lg:block"
          ></motion.div>
        </AnimatePresence>

        <AnimatePresence>
          <div className="absolute bottom-0 mb-[14.5rem] w-full p-4 text-right text-3xl text-butterscotch lg:left-0 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:transform lg:text-left">
            <h1 className="sr-only">Been Coffee</h1>
            <h2 className="sr-only">
              Independent coffee shop between Derby & Burton, UK.
            </h2>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 1, type: "intertia" }}
              className="font-riverside text-navy lg:text-7xl 2xl:text-9xl"
            >
              Amazing Coffee.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1, type: "intertia" }}
              className="text-white font-riverside lg:text-6xl 2xl:text-7xl"
            >
              Tea. Hot Chocolate.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 1, type: "intertia" }}
              className="font-riverside lg:text-5xl 2xl:text-6xl"
            >
              Cobs. Paninis. Bagels.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.9, duration: 1, type: "intertia" }}
              className="text-xl font-riverside-outline text-navy lg:text-4xl lg:text-white 2xl:text-5xl"
            >
              Cakes. Cookies. Brownies.
            </motion.p>
            <motion.p
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 3.2, duration: 1, type: "intertia" }}
              className="text-lg font-riverside text-navy lg:text-2xl lg:text-butterscotch 2xl:text-4xl"
            >
              Vegan & Gluten Free Options
            </motion.p>
          </div>
        </AnimatePresence>
      </div>
    </>
  )
}
