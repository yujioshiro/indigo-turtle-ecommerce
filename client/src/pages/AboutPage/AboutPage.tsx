import React from 'react';
import './AboutPage.css';

export default function AboutPage(): JSX.Element {
  return (
    <div className="flex flex-col my-10 gap-4 content-center">
      <h1 className="text-neutral-white text-5xl text-center my-10">
        Welcome to the Indigo Turtle Group!
      </h1>
      <div className="text-link text-3xl text-center mx-auto">
        Meet the crew!
      </div>
      <ul className="text-neutral-white text-3xl text-center">
        <li>DekoMoon</li>
        <li>Jennifer</li>
        <li>missbabelfish</li>
        <li>obi</li>
        <li>shankssc</li>
        <li>Shohei</li>
        <li>solarized7124</li>
        <li>Yuji</li>
      </ul>
      <a
        className="text-3xl text-link text-center my-10 block"
        href="https://github.com/Hack-Weekly/indigo-turtle-ecommerce"
      >
        Check us out on Github!
      </a>
    </div>
  );
}
