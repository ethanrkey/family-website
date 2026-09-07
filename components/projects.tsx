"use client"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import OutboundIcon from '@mui/icons-material/Outbound';
import GitHubIcon from '@mui/icons-material/GitHub';
import { projects } from '@/content/projects';

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

export default function Projects() {
    return (
      <div style={{ transform: "scale(.9)", paddingBottom: "40px"}} className="fade-in">
        <Swiper
      effect={'coverflow'}
      style={{ maxWidth: '495px', margin: '0 auto' }}
      modules={[Navigation, Pagination, EffectCoverflow]}
      navigation
      pagination={{ clickable: true, el: ".pagination-dots" }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      observer={true}
      observeParents={true}
      centeredSlides={true}
    >
      {projects.map((card) => (
        <SwiperSlide key={card.title}>
          <Card sx={{ width: '495px', height: '675px' }}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={`${card.title} screenshot`}
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
              <a href={card.github} target="_blank" rel="noopener noreferrer" aria-label={`${card.title} on GitHub`}>
                <DarkTooltip title="GitHub Repository">
                  <IconButton>
                    <GitHubIcon sx={{ color: "var(--ink)", fontSize: 45 }}/>
                  </IconButton>
                </DarkTooltip>
              </a>
              {card.live && (
                <a href={card.live} target="_blank" rel="noopener noreferrer" aria-label={`${card.title} live demo`}>
                <DarkTooltip title="Deployed Project">
                  <IconButton>
                    <OutboundIcon sx={{ color: "var(--ink)", fontSize: 50 }}/>
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
