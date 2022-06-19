import { Header } from '../components/header'
import {withLayout} from '../components/layout';
import posts from '../posts.json'
import Link from 'next/link'
import {useState, useEffect} from 'react';


function Home() {
  return (
    <>
      <div className="grid place-items-center h-screen overflow-hidden">
        <div className="flex flex-col justify-center gap-5 content-center">
          <div className="flex flex-col text-center content-center">
            <div className="text-4xl sm:text-7xl flex text-center justify-center">
              <span>{'Code'}</span>
              <span>{'('}</span>
              <span className="text-center font-semibold text-rose-800">{"Y"}</span>
              <span>{')'}</span>
              <span>{'('}</span>
              <span className="text-center font-semibold text-sky-800">{"X"}</span>
              <span>{')'}</span>
            </div>
          </div>
          <div className="text-center flex flex-row justify-center gap-8">
            <span>github</span> <span>projects</span> <span><Link href='/blog'>blog</Link></span>
          </div>
        </div>
      </div>
    </>
  );
}

const HomePage = withLayout(Home);
//const HomePage = Home;

console.log(HomePage);
export default HomePage;
