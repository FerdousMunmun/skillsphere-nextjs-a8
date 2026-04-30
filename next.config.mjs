// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
 
//     reactCompiler: true,
 
//   images: {
//     remotePatterns: [
//       {
//         hostname: 'i.pinimg.com'
//       }
//     ]
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
