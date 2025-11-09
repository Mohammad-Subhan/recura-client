"use client"

import React from 'react'

const TranscriptionTab = () => {
    const transcriptionText = `Generate title and description your using AI. Generate title and description for video using AI. Generate title and on for your using AI. Generate title and description for your video using AI. Generate title and description for your video using Generate title and description for your video using AI.`

    return (
        <div className="flex flex-col gap-6 animate-fadeIn">
            <h2 className="text-xl font-semibold text-text">Transcription</h2>

            <div className="flex flex-col gap-4">
                <div className="p-5 rounded-xl border border-border bg-bg-secondary/30">
                    <p className="text-sm text-text-secondary leading-relaxed">
                        {transcriptionText}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TranscriptionTab
