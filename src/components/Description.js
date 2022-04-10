import React from "react";
import { useParams } from "react-router";

const Description = ({list}) => {
  const { id } = useParams();
  
  return (
    <div>
      {list
        .filter((each) => parseInt(each.id) === parseInt(id))
        .map((last) => {
          return ( 
            <div key={last.id}  style={{ margin: "20px",paddingTop:"150px" ,width:"50%"}}>
            <img
              style={{ marginTop: "20px", width:"200px",height:"200px"}}
              src={last.img}
              alt={last.id}
            />
            <div >
              <h3 >Product name: {last.title}</h3>
            </div>
            <div>
              <h4> Price: {last.price}</h4>
            </div>
            <div>
              <h5 style={{ display: "inline" }}>Description:</h5>{" "}
              {last.description}
            </div>
          </div>
        );
      })}
  </div>
);
};

export default Description;