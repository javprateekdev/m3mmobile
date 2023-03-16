import React from 'react';
import Dialog from './Dialog2';

const FloorPlan = () => {
  return (
    <div className='floorplancontainer'>
      <div style={{display:"block",marginLeft:"40%",marginBottom:"10%"}}>
            <div style={{height:"12vh",borderLeft:"3px solid #b5943b",letterSpacing: "1px",fontSize: "28px", marginBottom: "15px"}}>
                <div style={{display:"block"}}>
                <div style={{marginLeft:"50px",fontSize:"28px",fontFamily: 'Cursive',color:"white"}}>Brochure</div>
                <div style={{marginLeft:"50px",fontSize:"32px",color:"#2f2f2f",fontWeight:"700",color:"white"}}  className="gold">Floor Plan</div>
              
                    </div>
                    </div>
                    </div>

                    <div className='plancontainer'>

                    <div className='goldbar' ></div>

<div className='containerblock'>
  <div class="floorplan"><div style={{position:"relative",zIndex:"100",width:"60%",top:"40%",left:"20%",height:"15%",borderRadius:"20px",fontSize:"24px",padding:"10px",textAlign:"center"}} className="btn-1"> <Dialog/> </div></div>
  <div class="floorplan"><div style={{position:"relative",zIndex:"100",width:"60%",top:"40%",left:"20%",height:"15%",borderRadius:"20px",fontSize:"24px",padding:"10px",textAlign:"center"}} className="btn-1" ><Dialog/></div></div>
  <div class="floorplan"><div style={{position:"relative",zIndex:"100",width:"60%",top:"40%",left:"20%",height:"15%",borderRadius:"20px",fontSize:"24px",padding:"10px",textAlign:"center"}} className="btn-1" ><Dialog/></div></div>
                    </div>

</div>





    </div>
  )
}

export default FloorPlan