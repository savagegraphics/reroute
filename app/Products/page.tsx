'use client'
import React from 'react'
import Delivery from '../Fulfilment/Delivery'
import Shippings from '../Fulfilment/Shippings'
import Shipment from './Shipment'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='h-[200vh]'>
      <Shipment />
    </div>
  )
}

export default page
