"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const AIToolsTab = () => {
    const handleGenerateTitleDescription = () => {
        console.log("Generate title and description");
    }

    const handleGenerateTranscription = () => {
        console.log("Generate transcription");
    }

    return (
        <div className="flex flex-col gap-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-text">AI tools</h2>

            <div className="flex flex-col gap-4">
                {/* AI Title and Description */}
                <div className="flex items-center gap-1 justify-between p-4 rounded-xl border border-border bg-bg-secondary/30">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-medium text-text">AI Title and Description</h3>
                        <p className="text-xs text-text-secondary">
                            Generate title and description for your video using AI
                        </p>
                    </div>
                    <Button
                        onClick={handleGenerateTitleDescription}
                        variant="outline"
                        className="bg-button hover:bg-button/95 text-bg cursor-pointer rounded-2xl px-5 h-9 gap-2"
                    >
                        <Image
                            src="/icons/ai.svg"
                            alt="Generate"
                            width={16}
                            height={16}
                        />
                        Generate
                    </Button>
                </div>

                {/* AI Transcription */}
                <div className="flex items-center gap-1 justify-between p-4 rounded-xl border border-border bg-bg-secondary/30">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-medium text-text">AI Transcription</h3>
                        <p className="text-xs text-text-secondary">
                            Generate transcription for your video using AI
                        </p>
                    </div>
                    <Button
                        onClick={handleGenerateTranscription}
                        variant="outline"
                        className="bg-button hover:bg-button/95 text-bg rounded-2xl cursor-pointer px-5 h-9 gap-2"
                    >
                        <Image
                            src="/icons/ai.svg"
                            alt="Generate"
                            width={16}
                            height={16}
                        />
                        Generate
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AIToolsTab;
