import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ImageCarousel({ albumId }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/albums/${albumId}/images`).then((res) => setImages(res.data));
  }, [albumId]);

  return (
    <Container>
      <Typography variant="h6">Album Images</Typography>
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <img src={image.url} alt="Album Image" style={{ width: "100%", borderRadius: "10px" }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default ImageCarousel;
