import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

function SliderCarousel() {
  return (
<div className="container mx-auto mt-5">
      <Carousel autoPlay={true}>
        <div>
          <img src="https://img.freepik.com/free-vector/watercolor-shapes-facebook-cover_23-2149089900.jpg?w=1380&t=st=1694867352~exp=1694867952~hmac=4c284a9683d9cfecce63c1a4ba2f1009eb3f1a9d62d48a27b1d28ff747b5e580" alt="Image 1" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/watercolor-shapes-facebook-cover_23-2149089900.jpg?w=1380&t=st=1694867352~exp=1694867952~hmac=4c284a9683d9cfecce63c1a4ba2f1009eb3f1a9d62d48a27b1d28ff747b5e580" alt="Image 2" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/watercolor-shapes-facebook-cover_23-2149089900.jpg?w=1380&t=st=1694867352~exp=1694867952~hmac=4c284a9683d9cfecce63c1a4ba2f1009eb3f1a9d62d48a27b1d28ff747b5e580" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderCarousel;
