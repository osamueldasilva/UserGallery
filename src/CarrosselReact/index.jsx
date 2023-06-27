import { Carousel } from "react-carousel-minimal";
import { useState, useEffect } from "react";

function CarrosselReact(props) {  
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = props.image.map((image) => ({
      image: `data:image/${image?.extension.split("/")[1]};base64, ${image?.data}`,
    }));

    setData(newData);

  }, []);

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50px" }}></div>
      {data.length && (

      
      <Carousel
        data={data}
        time={2000}
        width="750px"
        height="500px"
        captionStyle={captionStyle}
        radius="10px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "850px",
          maxHeight: "500px",
          display: "block",
          
          borderRadius: "10px"
        }}
      />
      )}
      <div style={{ width: "50px" }}></div>
    </div>
  );
}

export default CarrosselReact;
