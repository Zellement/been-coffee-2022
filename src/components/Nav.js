import React from "react"
import { Link } from "gatsby"
import Logo from "./atoms/Logo"

export default function Nav() {

  return (
    <nav className="text-3xl lg:text-6xl font-riverside text-navy">
      <ul className="">
        <li className="fixed top-0 left-0 p-8">
          <Link
            className=""
            activeClassName="is-active"
            to="/"
          >
            <Logo className="w-56 h-auto" />
          </Link>
        </li>
        <li className="fixed top-0 right-0 p-8">
          <Link
            className=""
            activeClassName="is-active"
            to="/about/"
          >
            Where
          </Link>
        </li>
        <li className="fixed bottom-0 left-0 p-8">
          <Link
            className=""
            activeClassName="is-active"
            to="/who/"
          >
            Who
          </Link>
        </li>
        <li className="fixed bottom-0 right-0 p-8">
          <Link
            className=""
            activeClassName="is-active"
            to="/contact/"
          >
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  )
}
