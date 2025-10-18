"use client"

import React, { useState } from 'react'
import { Sidebar, SidebarContent } from './ui/sidebar'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const menuItems = [
    {
        label: "Home",
        name: "home",
        icon: "/icons/home.svg",
        activeIcon: "/icons/home-active.svg",
        link: "/dashboard"
    },
    {
        label: "My Library",
        name: "library",
        icon: "/icons/library.svg",
        activeIcon: "/icons/library-active.svg",
        link: "/dashboard/library"
    },
    {
        label: "Billing",
        name: "billing",
        icon: "/icons/card.svg",
        activeIcon: "/icons/card-active.svg",
        link: "/dashboard/billing"
    },
    {
        label: "Settings",
        name: "settings",
        icon: "/icons/settings.svg",
        activeIcon: "/icons/settings-active.svg",
        link: "/dashboard/settings"
    }
];

const AppSidebar = () => {

    const [activeItem, setActiveItem] = useState<string>("home");

    return (
        <Sidebar className="bg-bg border-none">
            <SidebarContent className="flex flex-col w-full h-full px-[30px] py-[35px] gap-[60px]">
                <div className="flex justify-center items-center gap-[10px]">
                    <Image src={"/icons/logo.svg"} alt="Recura Logo" width={40} height={40} />
                    <p className="text-[26px] font-semibold">Recura</p>
                </div>

                <div className="flex flex-col w-full h-full gap-11">
                    <div className="flex flex-col gap-[5px]">
                        <p className="font-semibold text-sm text-text-secondary pb-[15px]">Menu</p>
                        {menuItems.map((item, index) => (
                            <MenuItem key={index} item={item} activeItem={activeItem} setActiveItem={setActiveItem} />
                        ))}
                    </div>

                    <Separator className="bg-border" />

                    <div className="flex flex-col gap-7 px-[15px] py-[18px] border border-border rounded-2xl w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="font-semibold text-text">Upgrade to Pro</h1>
                            <p className="text-xs text-text-secondary">Unlock unlimited videos, AI features like transcription, AI summary and more</p>
                        </div>

                        <Button className="bg-button w-full rounded-2xl text-bg cursor-pointer hover:bg-button/95 font-semibold text-[14px]">Upgrade</Button>
                    </div>
                </div>
            </SidebarContent>
        </Sidebar>
    )
}

interface MenuItemProps {
    label: string;
    icon: string;
    activeIcon: string;
    link: string;
    name: string;
}

const MenuItem = ({ item, activeItem, setActiveItem }: { item: MenuItemProps, activeItem: string, setActiveItem: (name: string) => void }) => {

    const isActive: boolean = activeItem == item.name;
    const router = useRouter();

    const onClick = () => {
        setActiveItem(item.name);
        router.push(item.link);
    }

    return (
        <div className={`flex items-center gap-4 cursor-pointer p-[10px] ${isActive ? "bg-bg-secondary" : "hover:bg-bg-secondary/20"} rounded-2xl`} onClick={onClick}>
            <Image src={isActive ? item.activeIcon : item.icon} alt={item.label} width={24} height={24} />
            <p className={`text-sm font-medium ${isActive ? "text-text" : "text-text-secondary"}`}>{item.label}</p>
        </div>
    )
}

export default AppSidebar;