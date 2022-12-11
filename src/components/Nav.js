import React from "react"
import { Link } from "gatsby"
import Logo from "./atoms/Logo"
import { AnimatePresence, motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"

export default function Nav({ linkClassName }) {
  return (
    <nav className="text-3xl font-riverside text-navy lg:text-6xl main-nav">
      <ul className="">
        <AnimatePresence>
          <motion.li
            initial={{ x: "-500" }}
            transition={{ delay: 0.5 }}
            animate={{ x: 0 }}
            exit={{ x: "-500" }}
            className="fixed top-0 left-0 z-50"
          >
            <Link
              className={
                "relative  flex flex-row items-center gap-4 p-4 leading-none transition-all duration-300 hover:px-8 focus:px-8 lg:block " +
                linkClassName
              }
              to="/"
            >
              <Logo className="relative z-20 w-24 h-auto lg:w-56" />
              <StaticImage
                className="z-10 w-20 aspect-square lg:w-40 lg:-translate-y-8 lg:translate-x-24"
                src="../images/goodfood.png"
                alt="Good Food Blue Ribbon Winners 2023"
              />
            </Link>
          </motion.li>
        </AnimatePresence>
        <motion.li
          initial={{ x: "500" }}
          transition={{ delay: 0.7 }}
          animate={{ x: 0 }}
          className="fixed top-0 right-0 z-50"
        >
          <Link
            className={
              "relative block p-4 leading-none transition-all duration-300 hover:px-8 hover:text-butterscotch focus:px-8 focus:text-butterscotch " +
              linkClassName
            }
            activeClassName="text-butterscotch"
            to="/where/"
          >
            Where
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "-500" }}
          transition={{ delay: 0.9 }}
          animate={{ x: 0 }}
          className="fixed bottom-0 left-0 z-50"
        >
          <Link
            className={
              "relative block p-4 leading-none transition-all duration-300 hover:px-8 hover:text-butterscotch focus:px-8 focus:text-butterscotch " +
              linkClassName
            }
            activeClassName="text-butterscotch"
            to="/about/"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500" }}
          transition={{ delay: 1.1 }}
          animate={{ x: 0 }}
          className="fixed bottom-0 right-0 z-50"
        >
          <Link
            className={
              "relative block p-4 leading-none transition-all duration-300 hover:px-8 hover:text-butterscotch focus:px-8 focus:text-butterscotch " +
              linkClassName
            }
            activeClassName="text-butterscotch"
            to="/contact/"
          >
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  )
}
