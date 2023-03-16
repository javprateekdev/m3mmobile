import React from 'react'
import Dialog from './Dialog'

const Card = () => {
  return (
    <div style={{background:"black"}}>
      <div className='Priceheading'  >
            <div className='Priceheading1' >
                <div style={{display:"block"}}>
                <div style={{marginLeft:"50px",fontSize:"28px",fontFamily: 'Cursive',color:"white"}}>Brochure</div>
                <div style={{marginLeft:"50px",fontSize:"32px",color:"#2f2f2f",fontWeight:"700",color:"white"}} className="gold">Price List</div>

                    </div>
</div>
</div>

    <div className="pricecontainer" >
      
        <div class="single_price" >
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
     <Dialog/>
    </button>
  </div>
</div>
<div class="single_price" >
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button  style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
    <Dialog/>
    </button>
  </div>
</div>

<div class="single_price snipcss-ME8DR" >
  <p class="typology">
    APARTMENTS
  </p>
  <div class="price_c">
    <h3 class="price">
      <sup>
        ₹
      </sup>
      7.77 Cr*
    </h3>
    <small class="onw">
      Onwards
    </small>
  </div>
  <div class="content">
    <div class="sizes">
      <small class="title">
        Super Area
      </small>
      <p>
        4200 Sq.Ft.
      </p>
    </div>
    <div class="type">
      <small class="title">
        Type
      </small>
      <p>
        4.5 BHK Apartments 
      </p>
    </div>
    <button  style={{background:"black",color:"white",width:'50%',marginLeft:"25%"}}>
    <Dialog/>
    </button>
  </div>
</div>


    </div>
    </div>
  )
}

export default Card