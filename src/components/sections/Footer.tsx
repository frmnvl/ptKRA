// src/components/sections/Footer.tsx
"use client"

import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Award, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-charcoal text-white">
            {/* Main Footer */}
            <div className="py-8 sm:py-12 md:py-16 border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {/* Company Info */}
                        <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                            <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber" />
                                <span className="text-lg sm:text-xl font-bold gradient-text">
                                    PT. Karya Rizky Andrian
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-400 mb-4 max-w-md">
                                Perusahaan swasta nasional yang bergerak di bidang General Trading,
                                Engineering Construction, dan Industrial Services sejak 2021.
                            </p>
                            <div className="space-y-2 text-xs sm:text-sm">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-teal" />
                                    <span>Jakarta, Indonesia</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-teal" />
                                    <span>+62 XXX-XXXX-XXXX</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-teal" />
                                    <span>info@karyarizkyandrian.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-amber">Layanan Kami</h3>
                            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">General Trading</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Engineering Construction</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Maintenance Services</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Labor Supply</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Electrical & Mechanical</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cleaning & Civil Services</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-amber">Perusahaan</h3>
                            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
                                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
                            </ul>
                        </div>

                        {/* Newsletter & Certifications */}
                        <div>
                            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-amber">Tetap Terhubung</h3>
                            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">
                                Dapatkan informasi terbaru tentang layanan dan proyek kami
                            </p>
                            <form className="space-y-3">
                                <input
                                    type="email"
                                    placeholder="Email Anda"
                                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-teal text-white placeholder:text-gray-500"
                                />
                                <Button className="w-full btn-teal text-xs sm:text-sm py-2">
                                    Berlangganan
                                </Button>
                            </form>

                            {/* Certifications */}
                            <div className="mt-4 sm:mt-6">
                                <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-400">Sertifikasi & Penghargaan</h4>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-amber/20 transition-colors flex items-center justify-center">
                                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber" />
                                    </div>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-teal/20 transition-colors flex items-center justify-center">
                                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal" />
                                    </div>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-navy/20 transition-colors flex items-center justify-center">
                                        <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-navy-light" />
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="mt-4 sm:mt-6">
                                <h4 className="text-xs sm:text-sm font-medium mb-2 sm:mb-3 text-gray-400">Ikuti Kami</h4>
                                <div className="flex gap-2 sm:gap-3">
                                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-navy transition-colors flex items-center justify-center">
                                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-amber transition-colors flex items-center justify-center">
                                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-teal transition-colors flex items-center justify-center">
                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                    <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 hover:bg-maroon transition-colors flex items-center justify-center">
                                        <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Values Section */}
            <div className="border-t border-white/10 py-6 sm:py-8 bg-charcoal-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                                <Award className="w-5 h-5 text-amber" />
                                <h4 className="font-semibold text-white">Kualitas Terjamin</h4>
                            </div>
                            <p className="text-sm text-gray-400">Standar tinggi konsisten dengan sertifikasi profesional</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Shield className="w-5 h-5 text-teal" />
                                <h4 className="font-semibold text-white">Keselamatan Utama</h4>
                            </div>
                            <p className="text-sm text-gray-400">Mematuhi semua regulasi keselamatan kerja terkini</p>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                                <Clock className="w-5 h-5 text-navy-light" />
                                <h4 className="font-semibold text-white">24/7 Support</h4>
                            </div>
                            <p className="text-sm text-gray-400">Dukungan teknis tersedia kapan saja untuk emergency</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-4 sm:py-6 bg-charcoal-dark">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
                        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                            © {currentYear} PT. Karya Rizky Andrian. All rights reserved.
                        </p>
                        <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-right">
                            <span className="hidden sm:inline">Est. 13 Juli 2021 | </span>
                            <span className="text-amber font-medium">Professional Industrial Services</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}