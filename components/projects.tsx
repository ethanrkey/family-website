"use client"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Projects() {
    const cards = [
        {
          title: 'AccessiScan',
          description: 'Description for card 1',
          image: 'https://via.placeholder.com/300',
        },
        {
          title: 'Global Conflict Visualizer',
          description: 'Description for card 2',
          image: 'https://via.placeholder.com/300',
        },
        {
          title: 'Stock Trading Simulator',
          description: 'Description for card 3',
          image: 'https://via.placeholder.com/300',
        },
        {
          title: 'Text Image Generator',
          description: 'Description for card 4',
          image: 'https://via.placeholder.com/300',
        },
      ];
      
    return (
        <Swiper
    style={{ maxWidth: '1000px', margin: '0 auto' }}
      modules={[Navigation]} // Register navigation
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={4} // Adjust for responsiveness
      observer={true}
      observeParents={true}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <Card sx={{ maxWidth: '100%' }}>
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
    </Swiper>
    );
}