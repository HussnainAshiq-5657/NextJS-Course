import Image from 'next/image';
import Globe from '../../../public/globe.svg';
function ImageOptimization() {
  return (
    <>
      <div className="flex flex-col gap-10 my-10 ml-8">
        <button className="bg-blue-500 transition duration-300 hover:bg-blue-800 px-4 py-2 cursor-pointer rounded-xl text-white font-bold w-fit">
          Change Color
        </button>
        <Image src={Globe} width={200} height={200} alt="Image of Globe" priority />
        <img src={Globe.src} width={200} height={200} alt="Image of Globe" />
        <Image
          src="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={200}
          height={200}
          alt="Image of Globe"
          priority
        />
      </div>
    </>
  );
}

export default ImageOptimization;
