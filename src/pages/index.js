import React from 'react'
import { Link } from 'gatsby'
import { Jumbo, SEO } from '../components'

const IndexPage = () => (
  <>
    <SEO title='Home' />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/gracias/'>Go to gracias</Link>
    <br/>
    <Link to='/cancelado/'>Go to cancelado</Link>
  </>
)

export default IndexPage
