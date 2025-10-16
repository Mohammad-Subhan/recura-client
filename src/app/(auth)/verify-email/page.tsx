"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Verify = () => {
    return (
        <div className="flex justify-center items-center min-h-dvh">
            <div className="w-101 rounded-2xl p-[30px] border-border border-[1px] flex flex-col gap-[30px] justify-center items-center">
                <div className="w-full flex justify-between items-center">
                    <Button className="p-0 cursor-pointer" onClick={() => null}>
                        <Image src={"/icons/arrow-left.svg"} alt="Arrow Left" width={16} height={16} />
                    </Button>
                    <h1 className="text-xl font-bold">Verify Email</h1>
                    <div className="w-[10px] h-[10px]"></div>
                </div>

                <div className="text-center text-xs flex flex-col">
                    <p className="text-text/60">You’re almost there! We have sent an email to</p>
                    <p className="font-bold">subhankhalid185@gmail.com</p>
                </div>

                <div className="text-center text-[12px] text-text/60 w-full">
                    Just click on the link in that email to complete the registration. Check your spam folder if you don’t see the email.
                </div>

                <div className="w-full flex flex-col justify-center items-center gap-3">
                    <p className="text-xs text-text/60">Still can’t find the email?</p>
                    <Button className="bg-button w-full rounded-2xl text-bg cursor-pointer hover:bg-button/95 font-semibold text-[14px]" onClick={() => null}>Resend</Button>
                </div>
            </div>
        </div>
    )
}

export default Verify