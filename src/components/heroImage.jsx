import React from 'react'
import "./heroImage.css";

function Hero() {
  return (
    <div className="Hero">
      <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81b63702-a53f-4dc2-9bd4-31ea64536391/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201003T064812Z&X-Amz-Expires=86400&X-Amz-Signature=e81ef93ff6954e5a7d950001a20b6ceb873bc4cdad0d542136f0f7368d68fa75&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22"></img>
    </div>
  );
}

export default Hero;