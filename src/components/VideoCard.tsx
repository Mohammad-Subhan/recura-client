"use client"

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

interface VideoCardProps {
    video: {
        id: string;
        thumbnail: string;
        title: string;
        author: string;
        duration: string;
        createdAt: string;
    }
}

const VideoCard = ({ video }: VideoCardProps) => {
    const rounter = useRouter();

    const onVideoClick = () => {
        console.log("Video clicked:", video.id);

        // navigate to video detail page
        rounter.push(`/dashboard/library/${video.id}`);
    }

    const getFormattedDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();

        const diffInMs = now.getTime() - date.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        // Return formatted string based on difference
        // Today, x days ago, x week/s ago, x month/s ago., x year/s ago
        if (diffInDays === 0) return 'Today';
        if (diffInDays < 7) return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
        if (diffInDays < 30) {
            const weeks = Math.floor(diffInDays / 7);
            return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        }
        if (diffInDays < 365) {
            const months = Math.floor(diffInDays / 30);
            return `${months} month${months > 1 ? 's' : ''} ago`;
        }
        const years = Math.floor(diffInDays / 365);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }

    return (
        <div className="flex flex-col cursor-pointer rounded-2xl overflow-hidden w-full min-w-[180px]" onClick={onVideoClick}>
            <div className="relative w-full">
                <Image src={video.thumbnail} alt="video thumbnail" className="aspect-video w-full" width={200} height={120} />
                <p className="absolute bottom-[6px] right-[6px] font-medium text-[10px] px-2 py-0.5 bg-bg/60 rounded-full">{video.duration}</p>
            </div>

            <div className="flex relative pt-3 flex-col gap-1 px-4 border-l border-r border-b border-border rounded-b-2xl h-full pb-5 hover:bg-text/1 transition-all ">
                <h1 className="font-medium">{video.title}</h1>
                <p className="font-normal text-[10px] text-text/40">{getFormattedDate(video.createdAt)}</p>
                <div className="h-6"></div>
                <div className="flex absolute bottom-4 gap-2 items-center text-[10px] pt-1">
                    <Image src={"/icons/user.svg"} alt="user icon" className="p-1 bg-text/8 rounded-full" width={24} height={24} />
                    <p>{video.author}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard