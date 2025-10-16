"use client"

import React from 'react'
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar'
import AppTopbar from '@/components/AppTopbar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="min-h-dvh w-full bg-bg-secondary flex flex-col">
                <AppTopbar />
                <div className="w-full h-full p-5 pt-0">
                    {children}
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout