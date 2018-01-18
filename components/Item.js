
 import React from 'react'
 import PropTypes from 'prop-types'
 
 const Item = ({ onClick, OutOfStock, desc }) => (
   <div
     onClick={onClick}
     style={{
       textDecoration: OutOfStock ? 'line-through' : 'none',
       paddingBottom: 5, marginRight:40
     }}
   >
        <span>{desc}</span>
        <div style={{backgroundColor:'white',height:2}}/>
   </div>
 )
 
Item.propTypes = {
   onClick: PropTypes.func.isRequired,
   OutOfStock: PropTypes.bool.isRequired,
   desc: PropTypes.string.isRequired
 }
 
 export default Item
 