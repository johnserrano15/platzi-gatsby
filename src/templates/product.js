/* eslint-disable react/prop-types */
import React from 'react'
import { ProductDetail } from '../components'

export default function Product ({ pageContext }) {
  return <ProductDetail {...pageContext} />
}
