import Image from 'next/image';
import React from 'react';
import Html from '../../public/img/html.png';
import Css from '../../public/img/css.png';
import Javascript from '../../public/img/javascript.png';
import Mysql from '../../public/img/mysql.png';
import Tailwind from '../../public/img/tailwind.png';  
import Bootstrap from '../../public/img/bootstrap.png';
import Nextjs from '../../public/img/nextjs.png';
import Github from '../../public/img/github.png';
import Gitbash from '../../public/img/gitbash.png';
import Netlify from '../../public/img/netlify.png';
import Reactjs from '../../public/img/react.png';

export default function FavouriteTec() {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-left text-3xl py-1 dark:text-white font-yekan">
          Teknologi Favourite

        </h3>
      </div>
      <div className="flex gap-10 py-10 flex-row">
        <div className="basis-1/6 flex-1 ">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Reactjs}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Nextjs}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Javascript}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Mysql}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Html}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Css}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Bootstrap}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Tailwind}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Netlify}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Gitbash}
          />
        </div>
        <div className="basis-1/6 flex-1">
          <Image
            className="rounded-lg object-cover"
            width={'100%'}
            height={'100%'}
            src={Github}
          />
        </div>
      </div>
    </section>
  );
}
