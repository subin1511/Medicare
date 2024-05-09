import { useEffect } from "react";

function IotMonitoring(){

  useEffect(()=>{
    console.log("something");
  },[])

  return(
    <p style={{fontSize:"20px", color:"black"}}>
      Iot Temperature 
    </p>
  );
}

export default IotMonitoring;