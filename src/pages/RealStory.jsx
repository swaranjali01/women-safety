// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const RealStory = () => {
//   const videos = [
//     { id: 1, title: "Story 1", src: "https://www.youtube.com/embed/domt_Sx-wTY" },
//     { id: 2, title: "Story 2", src: "" },
//     { id: 3, title: "Story 3", src: "" },
//     { id: 4, title: "Story 4", src: "" },
//     { id: 5, title: "Story 5", src: "" },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     centerMode: true,
//     centerPadding: '0',
//     arrows: true,
//     autoplay: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div style={{
//       fontFamily: 'Arial, sans-serif',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '30px',
//       backgroundColor: '#E6E6FA'  // Background similar to the image
//     }}>
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '20px'
//       }}>
//         <h2 style={{
//           color: '#333',
//           fontWeight: 'bold',
//         }}>
//           Real Story
//         </h2>
//         <button style={{
//           backgroundColor: 'transparent',
//           border: 'none',
//           color: '#333',
//           cursor: 'pointer',
//           fontSize: '16px'
//         }}>
//           show more ➔
//         </button>
//       </div>
//       <Slider {...settings}>
//         {videos.map((video, index) => (
//           <div key={video.id} style={{ padding: '0 20px' }}> {/* Increased padding for more gap */}
//             <div style={{
//               backgroundColor: 'transparent',  // Removed white background color
//               borderRadius: '8px',
//               overflow: 'hidden',
//               height: '180px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               boxShadow: index === 2 ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',  // Shadow only on center slide
//             }}>
//               <iframe
//                 width="320px"
//                 height="190px"
//                 src={video.src}
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 title={video.title}
//               ></iframe>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default RealStory;
