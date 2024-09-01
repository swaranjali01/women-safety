// import React from 'react';
// import YouTube from 'react-youtube';

// const SelfDefenceVideo = () => {
//   const videos = [
//     { id: 1, youtubeId: 'fr2dahob6g0' }, // Extract only the video ID
//     { id: 2, youtubeId: 'fr2dahob6g0' },
//     { id: 3, youtubeId: 'fr2dahob6g0' },
//     // { id: 4, youtubeId: 'fr2dahob6g0' },
//   ];

//   const opts = {
//     height: 'auto',  
//     width: '100%',   
//     playerVars: {
//       autoplay: 0,
//     },
//   };

//   return (
//     <div style={{ 
//       backgroundColor: '#E6E6FA',
//       padding: '20px',
//       fontFamily: 'Arial, sans-serif',
//       maxWidth: '1200px', 
//       margin: '0 auto'   
//     }}>
//       <h1 style={{ 
//         marginBottom: '20px',
//         color: '#333',
//         fontSize: '24px',
//         fontWeight: 'bold'
//       }}>
//         Self Defence
//       </h1>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         flexWrap: 'wrap',
//         gap: '20px'
//       }}>
//         {videos.map((video) => (
//           <div key={video.id} style={{
//             backgroundColor: '#fff',  
//             borderRadius: '8px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//             width: '320px', 
//             height: '190px',
//           }}>
//             <YouTube videoId={video.youtubeId} opts={opts} />
//             <div style={{ padding: '15px' }}>
//               <h3 style={{ margin: '0', fontSize: '18px', color: '#0077be' }}>Video {video.id}</h3>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button style={{
//         marginTop: '20px',
//         backgroundColor: 'transparent',
//         border: 'none',
//         color: '#0077be',
//         cursor: 'pointer',
//         fontSize: '16px'
//       }}>
//         show more
//       </button>
//     </div>
//   );
// };

// export default SelfDefenceVideo;
