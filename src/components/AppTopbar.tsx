"use client"

import React from 'react'
import { Input } from './ui/input'
import Image from 'next/image'
import { Button } from './ui/button'

const AppTopbar = () => {
    return (
        <div className="flex items-center p-5 justify-between">
            <div className="flex items-center gap-1 border border-border rounded-full px-4">
                <Image src={"/icons/search.svg"} alt="Search" width={20} height={20} />
                <Input type="text" placeholder="Search..." className="w-[300px] h-[40px] text-text placeholder:text-text-secondary border-none focus-visible:ring-0" />
            </div>

            <div className="flex items-center gap-4">
                <Button className="bg-button rounded-2xl text-bg cursor-pointer hover:bg-button/95 font-semibold text-[14px]">
                    <Image src={"/icons/upload.svg"} alt="upload" width={16} height={16} />
                    Upgrade
                </Button>
                <Button className="bg-button rounded-2xl text-bg cursor-pointer hover:bg-button/95 font-semibold text-[14px]">
                    <Image src={"/icons/record.svg"} alt="upload" width={16} height={16} />
                    Upgrade
                </Button>
                <div className="rounded-full bg-button h-9 w-9 cursor-pointer"></div>
            </div>
        </div>
    )
}

export default AppTopbar