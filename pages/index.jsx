import { Header } from '../components/header'
import posts from '../posts.json'
import Link from 'next/link'
import {useState, useEffect} from 'react';


const getRandomEle = (arr) => {
  if(!Array.isArray(arr)) return false;
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
};

export default function Home() {
  
  const langs = ["Java", "C#", "JavaScript", "Go", "Rust", "Haskell"];
  const things = ["Todo App", "API", "Video Game", "Data Structures", "Chat Server", "Bot"];
  
  let [X, setX] = useState("X");
  let [Y, setY] = useState("Y");

  useEffect(()=>{
    let timer = setInterval(() => {
      setX(getRandomEle(langs));
      setY(getRandomEle(things));
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="grid place-items-center h-screen bg-violet-100">
        <div className="flex justify-center content-center">
          <div className="text-xl sm:text-7xl flex">
            <span>{'CODE'}</span>
            <span>{'('}</span>
            <span className="text-center font-semibold text-blue-800">{Y}</span>
            <span>{')'}</span>
            <span>{'('}</span>
            <span className="text-center font-semibold text-red-800">{X}</span>
            <span>{')'}</span>
          </div>
        </div>
    <Anime opacity={[0, 1]} translateY={'1em'} delay={(e, i) => i * 1000}>
  <h1>Blog Post</h1>
  <section>
    <p>Upon this, Daggoo, with either hand upon the gunwale to steady his way, swiftly slid aft, and then erecting himself volunteered his lofty shoulders for a pedestal.</p>
    <p>"Good a mast-head as any, sir. Will you mount?"</p>
    <p>"That I will, and thank ye very much, my fine fellow; only I wish you fifty feet taller."</p>
  </section>
</Anime>
      </div>
    </>
  )
}
