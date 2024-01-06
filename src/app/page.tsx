"use client"
import Navbar from "./components/layout/navbar"
import Openai from "./components/openai/page"
import Threejs from "./components/threejs/page"

export default function Home() {
  return (
    <main className="min-h-screen sm:pt-5 sm:px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content flex flex-col sm:flex-row items-center p-2 sm:p-4">
        <div className="avtar sm:w-full sm:pr-0 md:w-1/2 md:pr-2 flex justify-center">
          <Threejs />
        </div>
        <div id="dev_chat" className="w-full md:w-1/2 flex justify-center">
          <Openai />
        </div>
      </div>
    </main>
  )
}
