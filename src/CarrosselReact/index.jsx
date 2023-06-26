import { useState } from "react";
import { Carousel } from "react-carousel-minimal";
import { api } from "../service/api";

function CarrosselReact() {
  const [imageCarrocel, setImageCarrocel] = useState();

  async function handleCarrocel() {
    try {
      const { data } = await api.get("/image");
      setImageCarrocel(data)
    } catch (error) {}
  }

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
        }}
      />
      <div style={{ width: "50px" }}></div>
    </div>
  );
}

export default CarrosselReact;
