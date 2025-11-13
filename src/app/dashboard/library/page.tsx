"use client"

import Heading from '@/components/Heading'
import VideoCard from '@/components/VideoCard'
import Image from 'next/image'
import React from 'react'

const videos = [
    {
        id: "1",
        thumbnail: "/images/test.png",
        title: "Building Modern Web Applications",
        author: "Sarah Johnson",
        duration: "12:45",
        createdAt: "2024-11-08"
    },
    {
        id: "2",
        thumbnail: "/images/test.png",
        title: "React Hooks Deep Dive",
        author: "Michael Chen",
        duration: "8:30",
        createdAt: "2024-11-05"
    },
    {
        id: "3",
        thumbnail: "/images/test.png",
        title: "TypeScript Best Practices",
        author: "Emily Davis",
        duration: "15:20",
        createdAt: "2024-10-28"
    },
    {
        id: "4",
        thumbnail: "/images/test.png",
        title: "Next.js 15 New Features",
        author: "Alex Rodriguez",
        duration: "10:15",
        createdAt: "2024-10-20"
    },
    {
        id: "5",
        thumbnail: "/images/test.png",
        title: "CSS Grid and Flexbox Mastery",
        author: "David Kim",
        duration: "6:50",
        createdAt: "2024-10-15"
    }
]

const Library = () => {
    return (
        <div className="h-full w-full flex flex-col gap-[35px] ">
            <Heading label="Library" />
            <div className="flex flex-col gap-4">
                <div className="flex justify-start items-center gap-4">
                    <Image src={"/icons/video-camera.svg"} alt="folder" width={20} height={20} />
                    <p className="text-text/40 font-medium text-sm">Videos</p>
                </div>

                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5">
                    {videos.map((video, index) => (
                        <VideoCard key={index} video={video} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Library