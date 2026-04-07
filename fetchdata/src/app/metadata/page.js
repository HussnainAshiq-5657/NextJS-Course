import { Roboto } from 'next/font/google';
const roboto = Roboto({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
});
function MetaData() {
  return (
    <>
      <div className="flex flex-col gap-8 my-10 ml-8">
        <h1 className={`${roboto.className} text-blue-500 text-3xl`}>
          Dynamic MetaData in NextJs Application
        </h1>
      </div>
    </>
  );
}

export default MetaData;

export function generateMetadata() {
  return {
    title: 'Meta Data page in Next js ApplicationI',
  };
}
