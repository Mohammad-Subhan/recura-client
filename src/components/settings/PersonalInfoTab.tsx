"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const PersonalInfoTab = () => {
    const [fullName, setFullName] = useState("John Doe")
    const [profileImage, setProfileImage] = useState<string | null>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfileImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex flex-col gap-8 animate-fadeIn">
            {/* Name and Photos Section */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-medium text-text">Name and photos</h3>
                    <p className="text-xs text-text-secondary">
                        Changing your name below will update your name on your profile.
                    </p>
                </div>

                {/* Profile Images */}
                <div className="flex items-center gap-6 mt-2">
                    {/* Current Profile Picture */}
                    <div className="relative w-[120px] h-[120px] rounded-full bg-white overflow-hidden flex items-center justify-center">
                        {profileImage ? (
                            <Image
                                src={profileImage}
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-white" />
                        )}
                    </div>

                    {/* Upload Button */}
                    <Label
                        htmlFor="profile-upload"
                        className="w-[120px] h-[120px] rounded-full border-2 border-dashed border-border bg-bg-secondary hover:bg-border/30 cursor-pointer transition-all flex items-center justify-center"
                    >
                        <Image src={"/icons/camera.svg"} alt="Camera" width={40} height={40} />
                        <input
                            id="profile-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </Label>
                </div>

                {/* Full Name Input */}
                <div className="flex flex-col gap-2 mt-4 max-w-[400px]">
                    <Label htmlFor="fullName" className="text-sm text-text">
                        Full Name
                    </Label>
                    <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="bg-input-bg border-input-border text-text h-10 rounded-2xl px-4"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-2">
                    <Button
                        className="bg-button text-bg hover:bg-button/90 rounded-2xl cursor-pointer px-8 h-10 font-medium"
                    >
                        Save
                    </Button>
                    <Button
                        variant="ghost"
                        className="text-text-secondary hover:text-text cursor-pointer hover:bg-transparent"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfoTab
