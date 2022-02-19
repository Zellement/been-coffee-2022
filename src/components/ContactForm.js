import React from "react"
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      telephone: "",
    }
    this.validator = new SimpleReactValidator({
      className:
        "absolute z-20 top-0 right-0 text-2xl text-white bg-red-800 leading-none -mt-1 -mr-1 p-1 px-2",
      messages: {
        default: "*",
      },
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    if (this.validator.allValid()) {
      const form = e.target
      this.setState({
        submitting: true,
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state,
        }),
      })
        .then(() => navigateTo(form.getAttribute("action")))
        .catch((error) => alert(error))
    } else {
      this.validator.showMessages()
      this.forceUpdate()
    }
    e.preventDefault()
  }

  render() {
    return (
      <form
        className="form text-black"
        name="quick-contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        {/* <p hidden>
                Don't fill this out:{" "} */}
        <label className="hidden">
          Do not fill this in
          <input name="bot-field" />
        </label>
        {/* </p> */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="col-span-1">
            <label className="relative flex w-full">
              <input
                className="w-full bg-white p-4 text-navy"
                placeholder="Name"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
              {this.validator.message("name", this.state.name, "required")}
            </label>
          </div>
          <div>
            <label className="relative flex w-full">
              <input
                className="w-full bg-white p-4 text-navy"
                placeholder="Email or telephone"
                type="text"
                name="email_telephone"
                onChange={this.handleChange}
              />
              {this.validator.message(
                "email_telephone",
                this.state.email_telephone,
                "required"
              )}
            </label>
          </div>
          <div className="md:col-span-2">
            <label className="relative flex flex-1">
              <textarea
                className="w-full bg-white p-4 text-navy h-60"
                placeholder="Details"
                type="text"
                name="details"
                onChange={this.handleChange}
              >
              {this.validator.message(
                "details",
                this.state.details,
                "required"
              )}
              </textarea>
            </label>
          </div>
          <div className="flex col-span-2">
            <button className="w-full p-4 bg-navy hover:bg-tuscany hover:text-navy transition duration-300 text-white" type="submit">
              Get in touch
            </button>
          </div>
        </div>
      </form>
    )
  }
}
