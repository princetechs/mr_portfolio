"use client"
import Atropos from 'atropos/react';
import 'atropos/css'
import ViewButton from '../components/card/ViewButton';

export default function App() {
    return (
        <main className=" min-h-screen   pt-5 px-32">

            <div className="max-w-screen-md mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16 ">
                <Atropos
                    className=" "
                    rotateTouch="scroll-y"
                    highlight={false}
                >

                    <div className='flex items-center justify-center  '>
                        <img data-atropos-offset="-5" src="https://images.unsplash.com/photo-1699823242809-0386f4592503?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        <ViewButton offset={"5"} className={"absolute  bg-blue-400 bg-blend-saturation"} text={"Go now"} />

                    </div>


                </Atropos>
            </div>
        </main>
    )
}