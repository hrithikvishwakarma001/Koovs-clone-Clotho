import React from "react";
import Carousel from "react-multi-carousel"; 
import 'react-multi-carousel/lib/styles.css'
import { Box } from "@chakra-ui/react";
import banner1  from "../Img/banner.png"
import banner2  from "../Img/banner2.png"

const bannerData=[
    { id:1 , url:banner1},
    { id:2 , url:banner2}
   

   
]


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
    
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },

    
  };

 const Banner=()=>{
    return (
        <Carousel responsive={responsive}
        swipeable={false} 
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
       {bannerData.map(data => (
        <Box key={data.id} style={{width:"100%",height:"auto"}}>
            <img style={{width:"100%",height:"100%"}} src={data.url} alt="banner"/>
        </Box>
       ))}


        </Carousel>

    )
  }

  export default Banner;