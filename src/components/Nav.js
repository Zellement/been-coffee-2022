import React from "react"
import { Link } from "gatsby"
import Logo from "./atoms/Logo"
import { AnimatePresence, motion } from "framer-motion"

export default function Nav( {linkClassName} ) {
  return (
    <nav className="text-3xl lg:text-6xl font-riverside text-navy">
      <ul className="">
        <AnimatePresence>
            <motion.li
              initial={{ x: "-500" }}
              transition={{ delay: 0.5 }}
              animate={{ x: 0 }}
              exit={{ x: "-500" }}
              className="fixed top-0 left-0 z-50"
            >
              <Link className={"relative block p-4 transition-all duration-300 hover:text-butterscotch focus:text-butterscotch focus:px-8 hover:px-8 " + linkClassName} activeClassName="is-active" to="/">
                <Logo className="w-24 h-auto lg:w-56" />
              </Link>
            </motion.li>
        </AnimatePresence>
        <motion.li
          initial={{ x: "500" }}
          transition={{ delay: 0.7 }}
          animate={{ x: 0 }}
          className="fixed top-0 right-0 z-50"
        >
          <Link className={"relative block p-4 transition-all duration-300 hover:text-butterscotch focus:text-butterscotch focus:px-8 hover:px-8 " + linkClassName} activeClassName="is-active" to="/about/">
            Where
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "-500" }}
          transition={{ delay: 0.9 }}
          animate={{ x: 0 }}
          className="fixed bottom-0 left-0 z-50"
        >
          <Link className={"relative block p-4 transition-all duration-300 hover:text-butterscotch focus:text-butterscotch focus:px-8 hover:px-8 " + linkClassName} activeClassName="is-active" to="/who/">
            Who
          </Link>
        </motion.li>
        <motion.li
          initial={{ x: "500" }}
          transition={{ delay: 1.1 }}
          animate={{ x: 0 }}
          className="fixed bottom-0 right-0 z-50"
        >
          <Link className={"relative block p-4 transition-all duration-300 hover:text-butterscotch focus:text-butterscotch focus:px-8 hover:px-8 " + linkClassName} activeClassName="is-active" to="/contact/">
            Contact
          </Link>
        </motion.li>
      </ul>
    </nav>
  )
}
