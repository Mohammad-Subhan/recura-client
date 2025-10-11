"use client"

import React, { useState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import Image from 'next/image';
import Link from 'next/link';

const AuthForm = ({ isLogin }: { isLogin: boolean }) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form className="w-100 rounded-2xl p-[30px] border-border border-[1px] flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-[26px] font-bold mb-[5px]">{isLogin ? "Login" : "Register"}</h1>
                <p className="text-xs font-normal">{isLogin ? "Welcome back" : "Create an account"}</p>
            </div>

            {isLogin ?
                <>
                    <InputField label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </>
                : <>
                    <InputField label="Full Name" type="text" placeholder="Enter your full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <InputField label="Email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <InputField label="Password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputField label="Confirm Password" type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </>
            }

            <Button className="bg-button w-full rounded-2xl text-bg cursor-pointer hover:bg-button/95 font-semibold text-[14px]">{isLogin ? "Login" : "Register"}</Button>

            <div className="w-full flex justify-center items-center gap-2 overflow-hidden">
                <Separator className="bg-border" />
                <p className="font-normal text-sm text-input-border">OR</p>
                <Separator className="bg-border" />
            </div>

            <Button className="bg-button-secondary w-full rounded-2xl text-text cursor-pointer hover:bg-button/7 font-semibold text-[14px] border-[1px] border-input-border ">
                <Image src="/google.svg" alt="Google Icon" width={15} height={15} />
                Continue with Google
            </Button>

            <div className="w-full flex justify-center items-center">
                <p className="text-[11px]">{isLogin ? "Don't have an account?" : "Already have an account?"} <Link href={isLogin ? "/register" : "/login"} className="font-semibold hover:underline">{isLogin ? "Register" : "Login"}</Link></p>
            </div>

        </form>
    )
}

interface InputProps {
    label: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputField = ({ label, type, placeholder, value, onChange }: InputProps) => {
    return (
        <div className="w-full flex flex-col gap-2 p-0">
            <Label className="text-sm font-semibold" htmlFor={label}>{label}</Label>
            <Input placeholder={placeholder} type={type} id={label} className="w-full text-xs border-input-border border-[1px] rounded-2xl bg-input-bg px-4 py-2" value={value} onChange={onChange} />
        </div>
    )
}

export default AuthForm