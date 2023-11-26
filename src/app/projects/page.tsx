"use client"
import Atropos from 'atropos/react';
import 'atropos/css';
import ViewButton from '../components/card/ViewButton';

const App = () => (
    <div className="max-w-screen-md mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Atropos rotateTouch="scroll-y" highlight={false}>
                <div className='flex items-center justify-center'>
                    <img
                        data-atropos-offset="-5"
                        src="https://images.unsplash.com/photo-1699823242809-0386f4592503?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <h1 className='text-4xl font-bold top-4 absolute' data-atropos-offset="2">DEVSAN</h1>
                    <ViewButton href='/' offset={"5"} className={"absolute bg-blue-400 bg-blend-saturation"} text={"Go now"} />
                    <div className='absolute bottom-4 space-x-4 ' data-atropos-offset="4">
                        <span className='bg-black'>react</span>
                        <span className=' bg-black'>atropos</span>
                    </div>
                </div>

            </Atropos>
            <Atropos rotateTouch="scroll-y" highlight={false}>
                <div className='flex items-center justify-center'>
                    <img
                        data-atropos-offset="-5"
                        src="https://images.unsplash.com/photo-1699823242809-0386f4592503?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <h1 className='text-4xl font-bold top-4 absolute' data-atropos-offset="2">DEVSAN</h1>
                    <ViewButton href='/' offset={"5"} className={"absolute bg-blue-400 bg-blend-saturation"} text={"Go now"} />
                    <div className='absolute bottom-4 space-x-4 ' data-atropos-offset="4">
                        <span className='bg-black'>react</span>
                        <span className=' bg-black'>atropos</span>
                    </div>
                </div>

            </Atropos>
        </div>
    </div>
);

export default App;
