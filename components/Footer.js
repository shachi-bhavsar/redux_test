import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <span style={{paddingRight: 10,paddingLeft: 5}}>{" Show: "}</span>
    <FilterLink filter="SHOW_ALL" name="All"/>
    {" "}
    <FilterLink filter="SHOW_AVAILABLE" name="Available"/>
    {" "}
    <FilterLink filter="SHOW_OUTOFSTOCK" name="OutOfStock"/>
  </p>
)

export default Footer