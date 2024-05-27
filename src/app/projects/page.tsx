"use client"
import Atropos from 'atropos/react';
import 'atropos/css';
import ViewButton from '../components/card/ViewButton';
import { useEffect, useState } from 'react';
import { getContent } from '@/services/GetProjects';

// Define a helper function to get a color based on the tag text
const getColorForTag = (tag: string): string => {
  const colors = [
    'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 
    'bg-pink-500', 'bg-indigo-500', 'bg-orange-500', 'bg-teal-500'
  ];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

const App = () => {
    const [content, setContent] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getContent();
                setContent(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="max-w-screen-md mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content?.map((project, index) => (
                    <Atropos rotateTouch="scroll-y" highlight={false}>
                        <div className='flex items-center justify-center'>
                            <img
                                data-atropos-offset="-5"
                                src={project.coverImage.asset.url}
                                alt=""
                            />
                            <h1 className='text-4xl font-bold top-4 absolute' data-atropos-offset="2">{project.title}</h1>
                            <ViewButton href={project.site} offset="5" className="absolute bg-blue-400 bg-blend-saturation" text="Visit" />
                            <div className='absolute bottom-4 space-x-4 ' data-atropos-offset="4">
                                {project.tags.map((tag: string) => (
                                    <span key={tag} className={`${getColorForTag(tag)} text-white px-2 py-1 rounded-md`}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Atropos>
                ))}
            </div>
        </div>   
    );
}

export default App;
