"use client"

import Image from 'next/image'
import React from 'react'

const VideoCard = () => {
    return (
        <div className="flex flex-col cursor-pointer rounded-2xl overflow-hidden w-full min-w-[180px] shadow-md hover:shadow-lg transition-shadow ">
            <div className="relative w-full">
                <Image src={"/images/test.png"} alt="video thumbnail" className="aspect-video w-full" width={200} height={120} />
                <p className="absolute bottom-[6px] right-[6px] font-medium text-[10px] px-2 py-0.5 bg-bg/60 rounded-full">05:00</p>
            </div>

            <div className="flex pt-3 flex-col gap-1 px-4 border-l border-r border-b border-border rounded-b-2xl pb-5 hover:bg-text/1 transition-all ">
                <h1 className="font-medium">Dare to dream big</h1>
                <p className="font-normal text-[10px] text-text/40">4d ago</p>
                <div className="flex gap-2 items-center text-[10px] pt-1">
                    <Image src={"/icons/user.svg"} alt="user icon" className="p-1 bg-text/8 rounded-full" width={24} height={24} />
                    <p>John Doe</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard