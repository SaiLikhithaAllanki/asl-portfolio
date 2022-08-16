import React from "react"
import { Helmet } from "react-helmet"
import Favicon from "../../images/FavIcon/favicon-32x32.png"

const Seo = () => {
  return (
    <Helmet>
      <meta charset="utf-8" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="author" content="Sai Likhitha Allanki" />

      <meta name="description" content="This is my Portfolio" />

      <meta name="image" content={Favicon} />

      <title>Sai Likhitha Allanki</title>

      <link rel="shortcut icon" type="image/jpg" href={Favicon} />

      <html lang="en" />
    </Helmet>
  )
}
export default Seo
