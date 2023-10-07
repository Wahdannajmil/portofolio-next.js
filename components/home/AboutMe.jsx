import React from 'react';
import Me from '../../public/img/me.jpg';
import Image from 'next/image';
import info from '../../utils/info';

export default function AboutMe() {
  return (
    <div className="text-center p-10">
      <h2 className="text-5xl md:text-6xl py-2 text-teal-600 font-yekan dark:text-red-600">
        {info.name}
      </h2>
      <div className="relative mx-auto mt-5 w-36 h-36">
        <Image src={Me} className="rounded-full" alt="my image" />
      </div>
      <h3 className="text-2xl md:text-3xl py-2 dark:text-white">
        Frontend Web Developer
      </h3>
      <p className="text-2xl py-5 leading-8 font-yekan text-gray-800 max-w-xl mx-auto dark:text-white" >
Informatics engineering Student in Dian Nuswantoro University      </p>
    </div>
  );
}
