"use client"
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Projects() {
    const cards = [
        {
          title: 'AccessiScan',
          description: 'Chrome extension and connected website for developers to improve the accessiblity of their websites',
          image: 'accessiscan.png',
        },
        {
          title: 'Global Conflict Visualizer',
          description: 'Tool which visualizes various international conflicts from the 20th and 21st centuries',
          image: 'gcv.png',
        },
        {
          title: 'Stock Trading Simulator',
          description: 'Paper trading platform to practice stock market strategies',
          image: 'stocktrading.png',
        },
        {
          title: 'Text Image Generator',
          description: 'Generate an image from any text description',
          image: 'texttoimage.png',
        },
      ];
      
    return (
      <div style={{ transform: "scale(.9)", paddingBottom: "40px"}} className="fade-in">
        <Swiper
      effect={'coverflow'}
      style={{ maxWidth: '495px', margin: '0 auto' }}
      modules={[Navigation, Pagination, EffectCoverflow]} // Register navigation
      navigation
      pagination={{ clickable: true, el: ".pagination-dots" }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1} // Adjust for responsiveness
      observer={true}
      observeParents={true}
      centeredSlides={true}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card sx={{ width: '495px', height: '630px' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
      <div className="pagination-dots flex justify-center pt-5"></div>
    </Swiper>
    
    </div>
    );
}