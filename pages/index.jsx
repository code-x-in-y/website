
import { Header } from '../components/header';
import posts from '../posts.json';
import Link from 'next/link';




export default function Home() {
    return (
      <>
        <div className="grid place-items-center h-screen bg-violet-100">
            <div className="flex justify-center content-center">
                <h1 className="text-xl sm:text-7xl">
                    {"CODE"}{"("}<span className="font-semibold text-blue-800">Y</span>{")"}{"("}<span className="font-semibold text-red-800">X</span>{")"} 
                </h1>
            </div>
        </div>
       
      </>
    )
  }
