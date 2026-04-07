import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});

function Fonts() {
  return (
    <div>
      <h1 className={`${inter.className} text-3xl`}>
        Font Family Custom Apply
      </h1>
    </div>
  );
}

export default Fonts;