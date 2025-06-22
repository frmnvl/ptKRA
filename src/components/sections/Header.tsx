// src/components/sections/Header.tsx
"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Menu, X, Phone, Mail, MapPin, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Tentang Kami", href: "/about" },
    { label: "Layanan", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Kontak", href: "/contact" },
]

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50"
                : "bg-transparent"
                }`}
        >
            {/* Professional Top Contact Bar */}
            <div className="bg-gradient-to-r from-navy via-navy-dark to-charcoal text-white py-2.5 hidden lg:block">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 hover:text-amber transition-colors cursor-pointer group"
                            >
                                <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                <span>+62 XXX-XXXX-XXXX</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 hover:text-amber transition-colors cursor-pointer group"
                            >
                                <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                <span>info@karyarizkyandrian.com</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 hover:text-amber transition-colors cursor-pointer group"
                            >
                                <MapPin className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                <span>Jakarta, Indonesia</span>
                            </motion.div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Award className="w-4 h-4 text-amber" />
                            <span className="text-amber-light font-medium">
                                Professional Engineering & Construction Services Since 2021
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Enhanced Logo with Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-4"
                        >
                            <Link href="/" className="flex items-center space-x-4 group">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-lg group-hover:shadow-navy/25 transition-all duration-300 bg-white"
                                >
                                    <Image
                                        src="/logo.jpeg"
                                        alt="PT. Karya Rizky Andrian Logo"
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-contain"
                                        priority
                                    />
                                </motion.div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-black gradient-text-navy">
                                        PT. KRA
                                    </div>
                                    <div className="text-xs sm:text-sm text-charcoal-light font-medium hidden sm:block">
                                        Karya Rizky Andrian
                                    </div>
                                </div>
                            </Link>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`text-sm font-semibold transition-all relative group py-3 px-4 rounded-xl ${pathname === item.href
                                        ? "text-navy bg-navy/10 shadow-sm"
                                        : "text-charcoal hover:text-navy hover:bg-navy/5"
                                        }`}
                                >
                                    {item.label}
                                    <span
                                        className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-navy to-amber transition-all duration-300 ${pathname === item.href ? "w-6" : "w-0 group-hover:w-6"
                                            }`}
                                    />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:flex items-center gap-4">
                            <Link href="/contact">
                                <Button className="btn-navy font-semibold px-6 py-2 hover:scale-105 border-0">
                                    Konsultasi Gratis
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Navigation */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="relative hover:bg-navy/10 text-navy">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-white border-l border-border">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-sm">
                                            <Image
                                                src="/logo.jpeg"
                                                alt="PT. Karya Rizky Andrian Logo"
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-lg font-black gradient-text-navy">
                                                PT. KRA
                                            </div>
                                            <div className="text-xs text-charcoal-light">Karya Rizky Andrian</div>
                                        </div>
                                    </div>
                                    <SheetClose asChild>
                                        <Button variant="ghost" size="icon" className="hover:bg-muted">
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </SheetClose>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-semibold transition-all py-4 px-4 rounded-xl ${pathname === item.href
                                                ? "text-navy bg-navy/10 border-l-4 border-navy"
                                                : "text-charcoal hover:text-navy hover:bg-navy/5"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    <div className="mt-8 pt-6 border-t border-border space-y-4">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                                            <Button className="w-full btn-navy font-semibold">
                                                Konsultasi Gratis
                                            </Button>
                                        </Link>

                                        {/* Contact info in mobile */}
                                        <div className="glass rounded-xl p-4 space-y-3">
                                            <h4 className="font-bold text-charcoal text-sm">Kontak Cepat</h4>
                                            <div className="text-sm text-charcoal-light space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4 text-navy" />
                                                    <span>+62 XXX-XXXX-XXXX</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4 text-amber" />
                                                    <span>info@karyarizkyandrian.com</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-teal" />
                                                    <span>Jakarta, Indonesia</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}