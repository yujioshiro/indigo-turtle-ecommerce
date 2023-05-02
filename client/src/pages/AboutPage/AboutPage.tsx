import React from 'react';
import { FaGithub } from 'react-icons/fa';

export default function AboutPage(): JSX.Element {
  return (
    <div className="my-10 flex flex-col content-center gap-4">
      <h1 className="my-10 text-center text-5xl text-neutral-white">
        Welcome to the Indigo Turtle Group!
      </h1>
      <div className="mx-auto text-center text-3xl text-link">
        Meet the crew!
      </div>
      <ul className="text-center text-3xl text-neutral-white">
        <li>DekoMoon</li>
        <li>Jennifer</li>
        <li>missbabelfish</li>
        <li>obi</li>
        <li>shankssc</li>
        <li>Shohei</li>
        <li>solarized7124</li>
        <li>Yuji</li>
      </ul>
      <div className="flex items-center justify-center gap-3">
        <a
          className="my-10 inline-block text-center text-3xl text-link"
          href="https://github.com/Hack-Weekly/indigo-turtle-ecommerce"
        >
          Check us out on Github!
        </a>

        {<FaGithub size={40} style={{ fill: 'white' }} />}
      </div>
    </div>
  );
}
