/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import profileimage from "../../assets/profileimage.png";
import imag from "../../assets/star.png";
import link from "../../assets/link.png";

function Profilepage(params) {
   return(
<div style={{
       marginLeft: "8%",
       marginTop: "4%",
       display: "flex",
       flexDirection: "column",
       justifyContent: "space-between",
       height:"5%"
     }}>
<div style={{ display: "flex",width:"100",
       flexDirection: "row",}}>
        <div
           className="flex flex-row"
           style={{ justifyContent: "space-between",width:"50%"}}
         >
     <div> 
       <img src={profileimage} style={{
               alignContent: "center", flexDirection: "row",
               justifyContent: "space-between",
               width: "80%",
               padding: "5px",
               float: "left",
             }}></img>
     </div>
     <div style={{fontSize: 50,width:"50%", fontWeight: "500", color:"#E3655B"}}>Farzi Shayar</div>
</div>
<div style={{fontSize: 35,width:"20%",marginTop:"1%",alignContent:"center" ,fontWeight: "300", color:"black",}}></div>
<div style={{fontSize: 30,marginTop:"2%", fontWeight: "300", color:"grey",}}>$60/hr Available for freelance</div>
</div>
 <div
         className=""
         style={{
           width: "100%",
           flexDirection: "row",
           justifyContent: "space-between",marginLeft: 6
         }}
       >         
   <div className="" style={{ fontSize: 20, fontWeight: "400"}}>
             Design partner for your startup
   </div>
 </div>
 <div style={{ display: "flex",
       flexDirection: "row",}}>
         <img src={imag} style={{
               alignContent: "center",
               width: "2%",
               padding: "5px",
               float: "left",}}></img>
               <img src={imag} style={{
               alignContent: "center",
               width: "2%",
               padding: "5px",
               float: "left",}}></img>
               <img src={imag} style={{
               alignContent: "center",
               width: "2%",
               padding: "5px",
               float: "left",}}></img>
               <img src={imag} style={{
               alignContent: "center",
               width: "2%",
               padding: "5px",
               float: "left",}}></img>
               <img src={imag} style={{
               alignContent: "center",
               width: "2%",
               padding: "5px",
               float: "left",}}></img>
   <div><span style={{marginLeft: 10,fontSize:20, fontWeight: "bold"}}> 5.0</span>
               <span style={{marginLeft: 10,fontSize:20,color:"grey"}}>(15 reviews) </span>
   </div>
 </div>
 <div className="" style={{ width: "100%" }}>
       <div className="clicks">
         <div
           className="flex flex-row"
           style={{ justifyContent: "space-between" }}
         >   
 <div style={{ width: "50%", float:"right"}}>
             <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "1%",
             color: "white",
             padding: "10px",
             borderRadius: "5px",
             float:"left",
             width: "150px"}}>Hire me</button></div>
     </div>
     <div className="">Client reviews</div>
           <div className="">Projects </div>
       <div className="">About</div>   
     </div> 
     </div>
 </div>
    
<div style={{display: "flex",
       flexDirection: "column",}}>
 <div style={{
       width: "50%",
       marginTop:"1%",
       boxShadow: "0px 1px 5px grey",
       paddingLeft: "40px",
       paddingRight: "10px",
       paddingTop: "30px",
       paddingBottom: "30px",
       borderRadius: 20,
     }}>
       <div style={{marginLeft: 10,fontSize:20, fontWeight: "bold"}}>Location</div>
       <div style={{marginLeft: 10,fontSize:17,color:"grey"}}> New Delhi, India </div>
 </div>

 <div style={{
       width: "50%",
       marginTop:"1%",
       boxShadow: "0px 1px 5px grey",
       paddingLeft: "40px",
       paddingRight: "10px",
       paddingTop: "30px",
       paddingBottom: "30px",
       borderRadius: 20,
     }}>
     
       <div style={{marginLeft: 10,fontSize:20, fontWeight: "bold"}}>Portfolios</div>
       <img src={link} style={{
               alignContent: "center",marginLeft:"2%",
               width: "5%",
               padding: "px",
             }}></img>
       <div style={{marginLeft: 10,fontSize:17,color:"grey"}}> linkedin.com/company/sansamhar </div>
       <img src={link} style={{
               alignContent: "center",marginLeft:"2%",
               width: "5%",
               padding: "px",
             }}></img>
       <div style={{marginLeft: 10,fontSize:17,color:"grey"}}> sameerda3@jkghcab.com </div>
       <img src={link} style={{
               alignContent: "center",marginLeft:"2%",
               width: "5%",
               padding: "px",
             }}></img>
       <div style={{marginLeft: 10,fontSize:17,color:"grey"}}> azure.com</div>
 </div>

 <div style={{
       width: "50%",
       marginTop:"1%",
       boxShadow: "0px 1px 5px grey",
       paddingLeft: "40px",
       paddingRight: "10px",
       paddingTop: "30px",
       paddingBottom: "30px",
       borderRadius: 20,
     }}>
   <div style={{marginLeft: 10,fontSize:20, fontWeight: "bold",}}>Tags</div>
       <div style={{ display: "flex",
       flexDirection: "row", }}>
         <div style={{width:"10%",marginLeft:"1%",
       boxShadow: "0px 1px 5px grey",
       paddingLeft: "20px",
       paddingRight: "10px",
       paddingTop: "10px",
       paddingBottom: "10px",
       borderRadius: 10,}}>ui</div>

         <div style={{width:"10%",marginLeft:"2%",
       boxShadow: "0px 1px 5px grey",
       paddingLeft: "20px",
       paddingRight: "10px",
       paddingTop: "10px",
       paddingBottom: "10px",
       borderRadius: 10,}}>ui</div>

         <div style={{width:"10%",
       boxShadow: "0px 1px 5px grey",marginLeft:"1%",
       paddingLeft: "20px",
       paddingRight: "10px",
       paddingTop: "10px",
       paddingBottom: "10px",
       borderRadius: 10,}}>ui</div></div>
     </div></div>
     <div></div>
</div>
   );
}
export default Profilepage;









