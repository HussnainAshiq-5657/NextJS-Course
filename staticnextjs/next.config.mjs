/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  redirects: async () => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
    ];
  },
  reactCompiler: true,
  output: 'export',
};

export default nextConfig;
