import React from 'react'
import { SEO } from '../components'
import { Button, Purchase } from '../styles/components'
import { Link } from 'gatsby'

const Cancelado = () => {
  return (
    <>
      <SEO title='Compra Cancelada' />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Sentimos que no hayas comprado tu nuevo swag.</p>
        <span role='img' aria-label='emoji'>
          :(
        </span>
        <Link to='/'>
          <Button>Volver al Catálogo</Button>
        </Link>
      </Purchase>
    </>
  )
}

export default Cancelado
