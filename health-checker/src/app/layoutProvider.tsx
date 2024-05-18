'use client'

import { Header } from "@/components/Header"
import { usePathname } from "next/navigation"

export interface LayoutProps {
    children: React.ReactNode
}

export const LayoutProvider = (props: LayoutProps) => {
    const pathname = usePathname()
    const isLogin = pathname === '/SignIn' || pathname === '/Register'
    return (
        <>
            {!isLogin && <Header />}
            {props.children}
        </>
    )
}