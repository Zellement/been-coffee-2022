import React from "react"
import Seo from "../components/Seo"
import Nav from "../components/Nav"
import OpeningHours from "../components/OpeningHours"
import ContactForm from "../components/ContactForm"

import Social from "../components/Social"

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Been Coffee"
        description="Get in touch with us"
      />
      <Nav />
      <section className="mx-auto mt-40 max-w-screen-md px-8">
        <div className="content">
          <h1 className="text-center font-riverside text-4xl text-tuscany lg:text-7xl">
            Contact
          </h1>
        </div>
      </section>
      <section className="my-24 max-w-screen-md mx-auto md:p-16 bg-seashell p-8 lg:p-24 xl:p-32">
          <p className="mb-8">If you would like to get in touch to send us some direct feedback, or if you'd be interested in becoming a supply partner, please reach out to us using the form below.</p>
            <ContactForm />
            <OpeningHours showTitle={true} className="mx-auto mt-16 text-xs lg:text-sm max-w-sm" />
            
            <Social />
      </section>
   
    </>
  )
}
