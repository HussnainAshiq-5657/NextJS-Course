'use client';
import Script from 'next/script';

function Location() {
  return (
    <>
      <div className="flex flex-col gap-4 my-10 ml-8">
        <Script
          src="/location.js"
          onLoad={() => {
            console.log('Location Accessed');
          }}
        />
        <h1 className="text-3xl text-blue-600 font-bold">Get User Location</h1>
      </div>
    </>
  );
}

export default Location;
