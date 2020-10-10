import React from 'react'
import "./heroImage.css";

function Hero() {
  return (
    <div className="Hero">
      <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81b63702-a53f-4dc2-9bd4-31ea64536391/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201009T231934Z&X-Amz-Expires=86400&X-Amz-Signature=a5c3cea5c9df9102d6ab0c19b2907947f716a81e2581db5182e17f0c967407bc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"></img>
    </div>
  );
}

export default Hero;