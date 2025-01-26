"use client"
import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import OutboundIcon from '@mui/icons-material/Outbound';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Projects() {
    const cards = [
        {
          title: 'AccessiScan',
          description: 'Chrome extension and connected website for developers to improve the accessiblity of their websites',
          image: 'accessiscan.png',
          github: 'https://github.com/AccessiScan-XC475',
          liveproject: 'https://accessiscan.vercel.app/',
        },
        {
          title: 'Global Conflict Visualizer',
          description: 'Tool which visualizes various international conflicts from the 20th and 21st centuries',
          image: 'gcv3.png',
          github: 'https://github.com/ethanrkey/global-conflict-visualizer',
        },
        {
          title: 'Stock Trading Simulator',
          description: 'Paper trading platform to practice stock market strategies',
          image: 'stocktrading.png',
          github: 'https://github.com/ethanrkey/stock-trading-app',
        },
        {
          title: 'Text Image Generator',
          description: 'Generate an image from any text description',
          image: 'texttoimage.png',
          github: 'https://github.com/ethanrkey/text-to-image',
        },
      ];

      const DarkTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
          color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: theme.palette.common.black,
        },
      }));
      
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
          <Card sx={{ width: '495px', height: '675px' }}>
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
            <CardActions sx={{position: "absolute", bottom: 4, left: 4}}>
              <a href={card.github} target="_blank">
                <DarkTooltip title="GitHub Repository">
                  <IconButton>
                    <GitHubIcon sx={{color: "#000000", fontSize: 45}}/>
                  </IconButton>
                </DarkTooltip>
              </a>
              {card.liveproject && (
                <a href={card.liveproject} target="_blank">
                <DarkTooltip title="Deployed Project">
                  <IconButton>
                    <OutboundIcon sx={{color: "#000000", fontSize: 50}}/>
                  </IconButton>
                </DarkTooltip>
              </a>
              )}
            </CardActions>
          </Card>
        </SwiperSlide>
      ))}
      <div className="pagination-dots flex justify-center pt-5"></div>
    </Swiper>
    
    </div>
    );
}