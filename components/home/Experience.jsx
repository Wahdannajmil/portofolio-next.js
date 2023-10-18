import Image from "next/image";
import React from "react";
import Skilvul from "../../public/img/Skilvul.png";

export default function Experience() {
  return (
    <section>
      <div>
        <h3 className="text-left text-3xl pt-10 font-mono dark:text-white">
          My Experience
        </h3>
        <p className="text-left ext-md  leading-8 text-gray-800 font-mono dark:text-gray-300">
          I'm always looking for new experiences and different technologies
        </p>
      </div>
      <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
          <Image src={Skilvul} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2 font-yekan">
          SKILVUL
          </h3>
          <h4>Frontend Web Developer</h4>
          <i className="text-sm">(Feb 2023 - Jul 2023 )</i>
          <p className="py-2 font-mono">
           MSIB batch 4 track frontend web developer program using React JS
          </p>
          <h4 className="py-4 text-teal-600 dark:text-red-600 font-yekan">
          Technology used
          </h4>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">HTML</p>
          <p className="text-gray-800 py-1">CSS</p>
          <p className="text-gray-800 py-1">Javascript</p>
          <p className="text-gray-800 py-1">Tailwind, Bootstrap</p>
          <p className="text-gray-800 py-1">Reactjs</p>
          <p className="text-gray-800 py-1">Git & Github</p>
          <p className="text-gray-800 py-1">Netlify</p>
        </div>
      </div>
    </section>
  );
}
