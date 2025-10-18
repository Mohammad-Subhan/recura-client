"use client"

import React from 'react'

const Heading = ({ label }: { label: string }) => {
    return (
        <div className="flex flex-col">
            <p className="text-[10px] font-medium text-text-secondary">PERSONAL</p>
            <h1 className="text-3xl font-semibold">{label}</h1>
        </div>
    )
}

export default Heading