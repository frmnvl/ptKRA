// src/components/sections/ServicesSection.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import {
    Package, Building2, Wrench, Users, Zap, Cog,
    Sparkles, Building, CheckCircle2, ArrowRight, Star,
    Shield, Globe, Target
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = [
    {
        icon: <Package className="w-8 h-8" />,
        title: "General Trading",
        description: "Perdagangan umum untuk berbagai kebutuhan industri dengan standar kualitas internasional dan supply chain management yang handal",
        features: [
            "Import & Export Services",
            "Supply Chain Management",
            "Material Distribution",
            "Quality Control & Inspection"
        ],
        gradient: "from-blue-600 to-blue-800",
        cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
        iconBg: "bg-gradient-to-br from-blue-600 to-blue-800",
        textColor: "text-blue-700",
        borderGlow: "hover:shadow-blue-500/25",
        accentBar: "bg-gradient-to-r from-blue-600 to-blue-800"
    },
    {
        icon: <Building2 className="w-8 h-8" />,
        title: "Engineering Construction",
        description: "Konstruksi dan engineering berkualitas tinggi dengan teknologi terdepan dan standar keselamatan internasional",
        features: [
            "Design & Build Services",
            "Project Management",
            "Structural Engineering",
            "Safety Implementation"
        ],
        gradient: "from-amber-500 to-orange-600",
        cardBg: "bg-gradient-to-br from-amber-50 to-orange-100",
        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
        textColor: "text-amber-700",
        borderGlow: "hover:shadow-amber-500/25",
        accentBar: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Maintenance",
        description: "Layanan maintenance komprehensif untuk menjaga performa optimal equipment dengan dukungan teknisi berpengalaman",
        features: [
            "Preventive Maintenance",
            "Corrective Maintenance",
            "Equipment Optimization",
            "24/7 Technical Support"
        ],
        gradient: "from-teal-500 to-teal-700",
        cardBg: "bg-gradient-to-br from-teal-50 to-teal-100",
        iconBg: "bg-gradient-to-br from-teal-500 to-teal-700",
        textColor: "text-teal-700",
        borderGlow: "hover:shadow-teal-500/25",
        accentBar: "bg-gradient-to-r from-teal-500 to-teal-700"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Labor Supply",
        description: "Penyediaan tenaga kerja profesional dan terampil sesuai kebutuhan proyek dengan sertifikasi keselamatan",
        features: [
            "Skilled Workers Supply",
            "Professional Training",
            "Safety Certified Staff",
            "Flexible Staffing Solutions"
        ],
        gradient: "from-red-600 to-red-800",
        cardBg: "bg-gradient-to-br from-red-50 to-red-100",
        iconBg: "bg-gradient-to-br from-red-600 to-red-800",
        textColor: "text-red-700",
        borderGlow: "hover:shadow-red-500/25",
        accentBar: "bg-gradient-to-r from-red-600 to-red-800"
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Electrical",
        description: "Solusi kelistrikan lengkap dari instalasi hingga maintenance sistem elektrik dengan standar keselamatan tinggi",
        features: [
            "Electrical Installation",
            "Power System Design",
            "Maintenance & Repair",
            "Safety Compliance"
        ],
        gradient: "from-yellow-500 to-yellow-700",
        cardBg: "bg-gradient-to-br from-yellow-50 to-yellow-100",
        iconBg: "bg-gradient-to-br from-yellow-500 to-yellow-700",
        textColor: "text-yellow-700",
        borderGlow: "hover:shadow-yellow-500/25",
        accentBar: "bg-gradient-to-r from-yellow-500 to-yellow-700"
    },
    {
        icon: <Cog className="w-8 h-8" />,
        title: "Mechanical",
        description: "Layanan mechanical engineering untuk berbagai kebutuhan industri modern dengan teknologi terdepan",
        features: [
            "Mechanical Installation",
            "Equipment Maintenance",
            "System Troubleshooting",
            "Performance Optimization"
        ],
        gradient: "from-gray-600 to-gray-800",
        cardBg: "bg-gradient-to-br from-gray-50 to-gray-100",
        iconBg: "bg-gradient-to-br from-gray-600 to-gray-800",
        textColor: "text-gray-700",
        borderGlow: "hover:shadow-gray-500/25",
        accentBar: "bg-gradient-to-r from-gray-600 to-gray-800"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Cleaning Service",
        description: "Layanan cleaning profesional untuk berbagai jenis fasilitas dan industri dengan standar kebersihan tinggi",
        features: [
            "Industrial Cleaning",
            "Facility Management",
            "Specialized Cleaning",
            "Regular Maintenance"
        ],
        gradient: "from-emerald-500 to-emerald-700",
        cardBg: "bg-gradient-to-br from-emerald-50 to-emerald-100",
        iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-700",
        textColor: "text-emerald-700",
        borderGlow: "hover:shadow-emerald-500/25",
        accentBar: "bg-gradient-to-r from-emerald-500 to-emerald-700"
    },
    {
        icon: <Building className="w-8 h-8" />,
        title: "Civil & Services",
        description: "Layanan sipil dan konstruksi dengan standar profesional tertinggi untuk berbagai jenis proyek infrastruktur",
        features: [
            "Civil Construction",
            "Infrastructure Development",
            "Site Preparation",
            "Project Consulting"
        ],
        gradient: "from-indigo-600 to-indigo-800",
        cardBg: "bg-gradient-to-br from-indigo-50 to-indigo-100",
        iconBg: "bg-gradient-to-br from-indigo-600 to-indigo-800",
        textColor: "text-indigo-700",
        borderGlow: "hover:shadow-indigo-500/25",
        accentBar: "bg-gradient-to-r from-indigo-600 to-indigo-800"
    }
]

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0)

    return (
        <section id="services" className="py-20 relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-amber-500/20 rounded-full filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-red-500/20 rounded-full filter blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="mb-8 px-8 py-4 text-lg bg-gradient-to-r from-blue-600 to-amber-600 text-white border-0 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                                <Star className="w-6 h-6 mr-3 text-amber-300" />
                                Layanan Profesional Kami
                                <Star className="w-6 h-6 ml-3 text-amber-300" />
                            </Badge>
                        </motion.div>

                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8"
                        >
                            <span className="text-gray-800">
                                Solusi Komprehensif
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                                Industri Modern
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                        >
                            Solusi end-to-end untuk semua kebutuhan industri dan engineering Anda dengan standar kualitas internasional
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "8rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto mt-8 rounded-full"
                        />
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                onHoverStart={() => setActiveService(index)}
                                className={`group ${activeService === index ? 'scale-105' : ''} transition-transform duration-300`}
                            >
                                <Card className={`h-full ${service.cardBg} border-white/60 shadow-xl hover:shadow-2xl backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 ${service.borderGlow} relative`}>
                                    {/* Top accent bar */}
                                    <div className={`h-2 ${service.accentBar} group-hover:h-3 transition-all duration-300`} />

                                    {/* Floating background elements */}
                                    <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                                    <CardHeader className="relative z-10 pb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-20 h-20 rounded-2xl ${service.iconBg} p-4 mb-6 mx-auto shadow-xl text-white group-hover:shadow-2xl transition-shadow duration-300`}
                                        >
                                            {service.icon}
                                        </motion.div>
                                        <CardTitle className={`text-xl font-bold ${service.textColor} group-hover:scale-105 transition-transform duration-300 text-center`}>
                                            {service.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 text-sm leading-relaxed text-center px-2">
                                            {service.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="relative z-10 pt-0">
                                        <ul className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <motion.li
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                                                    className="flex items-center gap-3 text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                                                >
                                                    <div className={`w-6 h-6 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="font-medium">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <Link href="/services">
                                            <Button
                                                variant="ghost"
                                                className={`w-full ${service.textColor} hover:bg-white/80 group-hover:bg-white/90 transition-all duration-300 font-semibold hover:scale-105 border border-white/40 group-hover:border-white/60`}
                                            >
                                                Pelajari Lebih Lanjut
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Company Excellence Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <Card className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-white border-0 shadow-2xl overflow-hidden">
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-amber-500/20 to-teal-500/20 animate-pulse" />
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-amber-600 to-teal-600" />

                            <CardContent className="py-20 relative z-10">
                                <div className="text-center max-w-6xl mx-auto">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center justify-center gap-6 mb-12"
                                    >
                                        <Star className="w-12 h-12 text-amber-400" />
                                        <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                            Keunggulan di Setiap Proyek
                                        </h3>
                                        <Star className="w-12 h-12 text-amber-400" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-2xl text-gray-300 mb-16 leading-relaxed"
                                    >
                                        Dengan standar tinggi yang konsisten dan kualitas pekerjaan terbaik, kami berkomitmen
                                        mematuhi hukum dan peraturan keselamatan untuk menjaga kesehatan, keselamatan pekerja,
                                        dan kelancaran pekerjaan dengan didukung oleh sumber daya manusia yang andal, terampil,
                                        profesional, dan berpengalaman di bidangnya.
                                    </motion.p>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                        {[
                                            { value: "100%", label: "Quality Assurance", icon: <Shield className="w-8 h-8" />, color: "from-teal-500 to-teal-700" },
                                            { value: "24/7", label: "Support Available", icon: <Globe className="w-8 h-8" />, color: "from-blue-500 to-blue-700" },
                                            { value: "3+", label: "Years Excellence", icon: <Star className="w-8 h-8" />, color: "from-amber-500 to-amber-700" }
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="relative group"
                                            >
                                                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:shadow-2xl">
                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                                        {stat.icon}
                                                    </div>
                                                    <div className="text-5xl font-black mb-3 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-lg text-gray-400 font-semibold">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Process Steps */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                        {[
                                            { step: "1", title: "Konsultasi", desc: "Diskusi mendalam kebutuhan dan tujuan proyek", icon: <Target className="w-8 h-8" /> },
                                            { step: "2", title: "Perencanaan", desc: "Design detail dan strategi eksekusi optimal", icon: <Building2 className="w-8 h-8" /> },
                                            { step: "3", title: "Implementasi", desc: "Eksekusi dengan kualitas terbaik dan tepat waktu", icon: <CheckCircle2 className="w-8 h-8" /> }
                                        ].map((process, index) => (
                                            <motion.div
                                                key={process.step}
                                                initial={{ y: 30, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                                                whileHover={{ scale: 1.05, y: -10 }}
                                                className="text-center group"
                                            >
                                                <div className="relative mb-8">
                                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110">
                                                        <span className="text-3xl font-black text-white">{process.step}</span>
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        {process.icon}
                                                    </div>
                                                </div>
                                                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">
                                                    {process.title}
                                                </h4>
                                                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                                    {process.desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    >
                                        <Link href="/contact">
                                            <Button className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl hover:scale-105 border-0 transition-all duration-300">
                                                Konsultasi Proyek Anda
                                                <ArrowRight className="ml-4 h-8 w-8" />
                                            </Button>
                                        </Link>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}