"use client"
import Navbar from "./components/layout/navbar"
import Openai from "./components/openai/page"
import Threejs from "./components/threejs/page"
export default function Home() {
  return (
    <main className="min-h-screen pt-5 px-4 lg:px-32">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content flex flex-col lg:flex-row p-2 lg:p-4">
        <div className="avtar lg:w-1/2 lg:pr-2 order-last lg:order-first">
          <Threejs />
        </div>
        <div className="w-full lg:w-1/2 order-first lg:order-last">
          <Openai />
        </div>
      </div>
    </main>

  )
}
