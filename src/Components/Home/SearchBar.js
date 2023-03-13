import React from "react";


function SearchBar() {
 return (
   <div
     style={{
       marginLeft: "8%",
       marginTop: "4%",
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
     }}
   >
     <div className="" style={{ width: "50%" }}>
       <div className="" style={{fontFamily:"-moz-initial",fontSize:"30px"}}>What are You Looking For?</div>
       <div className="clicks">
         <div
           className="flex flex-row"
           style={{ justifyContent: "space-between" }}
         >
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "1%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}> UI/UX Development </button></div>
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "1%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}>Software Development </button></div>
         </div>
         <div
           className="flex flex-row"
           style={{ justifyContent: "space-between" }}
         >
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "5%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}> Content Writer </button></div>
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "5%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}> Film Maker </button></div>
         </div>
         <div
           className="flex flex-row"
           style={{ justifyContent: "space-between" }}
         >
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "5%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}> Video Editor </button></div>
           <div className=""><button style={{backgroundColor: "#E3655B",marginTop: "5%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}> Game Developer </button></div>
         </div>
       </div>
     </div>
     <div className="" style={{ marginRight: "20%", marginTop:"4%"}}>
       <div className="" style={{}}><button style={{backgroundColor: "#E3655B",marginTop: "5%",
             color: "white",
             padding: "2px",
             borderRadius: "5px",
             marginRight: "5%",
             width: "200px",}}>Post your requirements</button></div>
     </div>
   </div>
 );
}


export default SearchBar;



