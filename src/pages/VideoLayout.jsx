import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const VideoLayout = () => {
  const videos = [
    { id: 1, title: "Video 1", src: "https://youtu.be/domt_Sx-wTY?si=33Y3srnxCR6sOnaZ" },
    { id: 2, title: "Video 2", src: "https://youtu.be/domt_Sx-wTY?si=33Y3srnxCR6sOnaZ" },
    { id: 3, title: "Video 3", src: "https://youtu.be/domt_Sx-wTY?si=33Y3srnxCR6sOnaZ" },
    { id: 4, title: "Video 4", src: "https://youtu.be/domt_Sx-wTY?si=33Y3srnxCR6sOnaZ" },
    { id: 5, title: "Video 5", src: "https://youtu.be/domt_Sx-wTY?si=33Y3srnxCR6sOnaZ" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '30px',
    }}>
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '20px',
        borderRadius: '8px',
      }}>
        <h2 style={{
          color: '#333',
          textTransform: 'capitalize',
          marginBottom: '20px',
        }}>
          Latest Videos
        </h2>
        <Slider {...settings}>
          {videos.map(video => (
            <div key={video.id} style={{ padding: '0 10px' }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}>
                <video
                  controls
                  width="100%"
                  height="auto"
                  style={{ display: 'block' }}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div style={{ padding: '15px' }}>
                  <h3 style={{ margin: '0', fontSize: '18px' }}>{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoLayout;