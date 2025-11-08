"use client"

import Heading from '@/components/Heading'
import VideoCard from '@/components/VideoCard'
import Image from 'next/image'
import React from 'react'

const videos = [
    {
        thumbnail: "/images/test.png",
        title: "Dare to dream big",
        author: "John Doe",
        duration: "4:20",
        createdAt: "2024-06-10"
    },
    {
        thumbnail: "/images/test.png",
        title: "Dare to dream big",
        author: "John Doe",
        duration: "4:20",
        createdAt: "2024-06-10"
    },
    {
        thumbnail: "/images/test.png",
        title: "Dare to dream big",
        author: "John Doe",
        duration: "4:20",
        createdAt: "2024-06-10"
    },
    {
        thumbnail: "/images/test.png",
        title: "Dare to dream big",
        author: "John Doe",
        duration: "4:20",
        createdAt: "2024-06-10"
    },
    {
        thumbnail: "/images/test.png",
        title: "Dare to dream big",
        author: "John Doe",
        duration: "4:20",
        createdAt: "2024-06-10"
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
                        <VideoCard key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Library