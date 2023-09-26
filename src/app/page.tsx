import Navbar from "./components/layout/navbar"
import Threejs from "./components/threejs/page"
export default function Home() {
  return (
    <main className=" min-h-screen   pt-5 px-32">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content flex flex-row p-2   ">
        <div className="avtar   justify-start  ">
          <Threejs />
        </div>
        
      </div>

    </main>
  )
}
