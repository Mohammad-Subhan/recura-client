"use client"

import Heading from '@/components/Heading'
import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="h-full w-full flex flex-col">
            <Heading label="Home" />
            <div className="flex w-full h-full items-center justify-center px-5">
                <div className="flex items-center justify-center w-full max-w-[800px] rounded-2xl bg-text/5 aspect-video">
                    <div className="flex items-center justify-center rounded-full h-[75px] aspect-square bg-text/10 cursor-pointer pl-1">
                        <Image src={"/icons/play.svg"} alt="play" width={27} height={27} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard