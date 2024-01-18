import { Carousel } from "react-bootstrap";
import React from "react";
function Sliders() {
  return (

    <Carousel>
      
     <Carousel.Item classeName="azert">
       <img src="./images/041.webp" alt="Image Pc"/> 
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item>
      <img src="./images/042.webp" alt="Image Pc"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item> 

      <Carousel.Item>
      <img src="./images/043.webp" alt="Image Pc"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      


    </Carousel>
  );
}

export default Sliders;