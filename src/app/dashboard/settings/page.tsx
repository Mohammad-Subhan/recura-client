"use client"

import Heading from '@/components/Heading'
import PersonalInfoTab from '@/components/settings/PersonalInfoTab'
import AccountTab from '@/components/settings/AccountTab'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

type TabType = 'personal' | 'account'

const Settings = () => {
    const [activeTab, setActiveTab] = useState<TabType>('personal')

    return (
        <div className="h-full w-full flex flex-col gap-[35px]">
            <Heading label="Settings" />

            <div className="flex flex-col gap-8">
                {/* Tabs Navigation */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-6 relative">
                        <Button
                            onClick={() => setActiveTab('personal')}
                            className={`text-base p-0 font-medium cursor-pointer pb-3 relative transition-colors duration-200 ${activeTab === 'personal'
                                ? 'text-text'
                                : 'text-text-secondary hover:text-text'
                                }`}
                        >
                            Personal Info
                            {activeTab === 'personal' && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-text rounded-full animate-slideIn"
                                />
                            )}
                        </Button>

                        <Button
                            onClick={() => setActiveTab('account')}
                            className={`text-base p-0 font-medium pb-3 cursor-pointer relative transition-colors duration-200 ${activeTab === 'account'
                                ? 'text-text'
                                : 'text-text-secondary hover:text-text'
                                }`}
                        >
                            Account
                            {activeTab === 'account' && (
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-text rounded-full"
                                />
                            )}
                        </Button>
                    </div>

                    {/* Bottom border for tabs */}
                    <div className="w-full">
                        <Separator className="bg-border" />
                    </div>
                </div>

                {/* Tab Content */}
                <div className="flex flex-col" key={activeTab}>
                    {activeTab === 'personal' ? <PersonalInfoTab /> : <AccountTab />}
                </div>
            </div>
        </div>
    )
}

export default Settings