import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
function Seo({ description, title }) {
  return (
    <Helmet title={title}>
      <html lang="en" />
      <meta name="description" content={description} />
      <meta name="image" content={`../images/index/desktop.jpg`} />
      <meta name="been-coffee" content="Been Coffee" />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
