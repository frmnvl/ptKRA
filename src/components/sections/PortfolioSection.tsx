// src/components/sections/PortfolioSection.tsx
"use client"

import { motion } from "framer-motion"
import {
    PaintBucket, Factory, Package, Wrench, Truck, Settings,
    CheckCircle2, Car, AirVent, Eye, Building2, Star, Award,
    Sparkles, Calendar, Shield, Target,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const portfolioItems = [
    {
        icon: <AirVent className="w-8 h-8" />,
        title: "Perawatan AC",
        description: "Maintenance AC untuk berbagai fasilitas industri dan komersial dengan standar profesional",
        projects: ["Preventive Maintenance", "Repair & Service", "System Optimization", "Filter Replacement"],
        gradient: "from-navy to-navy-dark",
        bgGradient: "from-navy/10 to-navy-dark/10",
        iconBg: "bg-gradient-to-br from-navy to-navy-dark",
        textColor: "text-navy",
        borderGlow: "hover:shadow-navy/25"
    },
    {
        icon: <Car className="w-8 h-8" />,
        title: "Perawatan Kendaraan Roda Dua",
        description: "Perawatan kendaraan roda dua & penjualan suku cadang berkualitas tinggi",
        projects: ["Fleet Maintenance", "Spare Parts Supply", "Regular Service", "Emergency Repair"],
        gradient: "from-amber to-amber-dark",
        bgGradient: "from-amber/10 to-amber-dark/10",
        iconBg: "bg-gradient-to-br from-amber to-amber-dark",
        textColor: "text-amber",
        borderGlow: "hover:shadow-amber/25"
    },
    {
        icon: <Truck className="w-8 h-8" />,
        title: "Transportation & Trucking",
        description: "Layanan transportasi dan logistik profesional dengan coverage nasional",
        projects: ["Material Transport", "Equipment Delivery", "Logistics Support", "Fleet Management"],
        gradient: "from-teal to-teal-dark",
        bgGradient: "from-teal/10 to-teal-dark/10",
        iconBg: "bg-gradient-to-br from-teal to-teal-dark",
        textColor: "text-teal",
        borderGlow: "hover:shadow-teal/25"
    },
    {
        icon: <Package className="w-8 h-8" />,
        title: "Pengadaan Material Steel Grating",
        description: "Supply material konstruksi steel grating berkualitas dengan standar internasional",
        projects: ["Steel Grating Supply", "Quality Control", "Custom Specifications", "Delivery Services"],
        gradient: "from-steel to-steel-light",
        bgGradient: "from-steel/10 to-steel-light/10",
        iconBg: "bg-gradient-to-br from-steel to-steel-light",
        textColor: "text-steel",
        borderGlow: "hover:shadow-steel/25"
    },
    {
        icon: <Factory className="w-8 h-8" />,
        title: "Workshop Fabrikasi",
        description: "Layanan fabrikasi dan welding profesional dengan teknologi modern",
        projects: ["Steel Structure Fabrication", "Custom Welding", "Assembly Services", "Quality Inspection"],
        gradient: "from-maroon to-maroon-dark",
        bgGradient: "from-maroon/10 to-maroon-dark/10",
        iconBg: "bg-gradient-to-br from-maroon to-maroon-dark",
        textColor: "text-maroon",
        borderGlow: "hover:shadow-maroon/25"
    },
    {
        icon: <Eye className="w-8 h-8" />,
        title: "Repair Visual Dimensi",
        description: "Perbaikan dan pengukuran dimensi dengan presisi tinggi dan teknologi canggih",
        projects: ["Dimensional Repair", "Precision Measurement", "Visual Inspection", "Calibration Services"],
        gradient: "from-gold to-gold-dark",
        bgGradient: "from-gold/10 to-gold-dark/10",
        iconBg: "bg-gradient-to-br from-gold to-gold-dark",
        textColor: "text-gold",
        borderGlow: "hover:shadow-gold/25"
    },
    {
        icon: <PaintBucket className="w-8 h-8" />,
        title: "Painting Handrail dan Structure",
        description: "Pengecatan handrail dan struktur dengan finishing berkualitas premium",
        projects: ["Handrail Painting", "Structure Coating", "Anti-rust Treatment", "Protective Finishing"],
        gradient: "from-teal-light to-teal-accent",
        bgGradient: "from-teal-light/10 to-teal-accent/10",
        iconBg: "bg-gradient-to-br from-teal-light to-teal-accent",
        textColor: "text-teal",
        borderGlow: "hover:shadow-teal/25"
    },
    {
        icon: <Wrench className="w-8 h-8" />,
        title: "Repair Fabrication & Welding",
        description: "Repair fabrication, assembling dan welding steel structure dengan standar tinggi",
        projects: ["Structure Repair", "Steel Welding", "Assembly Work", "Reinforcement Services"],
        gradient: "from-navy-light to-navy-accent",
        bgGradient: "from-navy-light/10 to-navy-accent/10",
        iconBg: "bg-gradient-to-br from-navy-light to-navy-accent",
        textColor: "text-navy",
        borderGlow: "hover:shadow-navy/25"
    }
]

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                        rotate: [0, 270, 360]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-navy/20 to-amber/20 rounded-full filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        rotate: [360, 90, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 8 }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-teal/20 to-maroon/20 rounded-full filter blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="mb-8 px-8 py-4 text-lg bg-gradient-to-r from-navy to-amber text-white border-0 shadow-xl hover:shadow-navy/25 transition-all duration-300 hover:scale-105">
                                <Building2 className="w-6 h-6 mr-3" />
                                Portfolio
                                <Sparkles className="w-6 h-6 ml-3" />
                            </Badge>
                        </motion.div>

                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-black mb-8"
                        >
                            <span className="text-charcoal">
                                Keahlian Profesional
                            </span>
                            <br />
                            <span className="gradient-text">
                                Layanan Kami
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl text-charcoal-light max-w-4xl mx-auto leading-relaxed"
                        >
                            Menampilkan keahlian kami di berbagai bidang industri dengan standar kualitas tinggi dan pengalaman profesional yang terpercaya
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "8rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-navy to-amber mx-auto mt-8 rounded-full"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                            >
                                <Card className={`h-full bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm border-white/60 shadow-xl overflow-hidden group transition-all duration-500 hover:scale-105 ${item.borderGlow} hover:shadow-2xl relative card-hover`}>
                                    {/* Top accent bar */}
                                    <div className={`h-2 bg-gradient-to-r ${item.gradient} group-hover:h-3 transition-all duration-300`}></div>

                                    {/* Background decoration */}
                                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

                                    <CardHeader className="relative z-10 pt-6">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className={`w-18 h-18 rounded-2xl ${item.iconBg} p-4 mb-4 mx-auto transition-all duration-300 text-white shadow-xl group-hover:shadow-2xl`}
                                        >
                                            {item.icon}
                                        </motion.div>
                                        <CardTitle className={`text-center text-lg ${item.textColor} group-hover:scale-105 transition-transform duration-300 font-bold line-clamp-2`}>
                                            {item.title}
                                        </CardTitle>
                                        <p className="text-center text-sm text-charcoal-light line-clamp-3 leading-relaxed px-2">
                                            {item.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="relative z-10">
                                        <ul className="space-y-2">
                                            {item.projects.map((project) => (
                                                <li key={project} className="flex items-start gap-2 text-sm text-charcoal-light">
                                                    <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                                    <span className="line-clamp-1 font-medium">{project}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Featured Client - PT. CIGADING HABEAM CENTRE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <Card className="bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white border-0 shadow-2xl overflow-hidden">
                            {/* Animated background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-amber/20 to-teal/20 animate-pulse" />
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-amber to-teal" />

                            <CardContent className="py-16 relative z-10">
                                <div className="text-center">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center justify-center gap-4 mb-8"
                                    >
                                        <Star className="w-10 h-10 text-amber" />
                                        <h3 className="text-4xl font-black gradient-text">
                                            Proyek Unggulan Klien
                                        </h3>
                                        <Star className="w-10 h-10 text-amber" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                                    >
                                        Proyek unggulan yang menunjukkan kualitas dan profesionalisme tim kami
                                        dalam menangani proyek-proyek besar dengan standar internasional
                                    </motion.p>

                                    <motion.div
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="glass-navy rounded-3xl p-10 max-w-4xl mx-auto mb-12 relative overflow-hidden border border-white/20"
                                    >
                                        <motion.div
                                            animate={{ x: [-200, 200] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        />

                                        <div className="relative z-10">
                                            <div className="flex items-center justify-center gap-4 mb-6">
                                                <Building2 className="w-8 h-8 text-amber-light" />
                                                <div className="text-3xl font-black text-white">
                                                    PT. CIGADING HABEAM CENTRE (CHC)
                                                </div>
                                            </div>
                                            <p className="text-xl text-gray-300 mb-8 font-semibold">
                                                Repair Fabrication, Assembling dan Welding Steel Structure
                                            </p>

                                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                                <Badge className="bg-navy/20 text-navy-light border-navy/30 hover:bg-navy/30 px-4 py-2">
                                                    <Wrench className="w-4 h-4 mr-2" />
                                                    Steel Fabrication
                                                </Badge>
                                                <Badge className="bg-amber/20 text-amber-light border-amber/30 hover:bg-amber/30 px-4 py-2">
                                                    <Factory className="w-4 h-4 mr-2" />
                                                    Welding Services
                                                </Badge>
                                                <Badge className="bg-teal/20 text-teal-light border-teal/30 hover:bg-teal/30 px-4 py-2">
                                                    <Settings className="w-4 h-4 mr-2" />
                                                    Assembly Work
                                                </Badge>
                                            </div>

                                            {/* Project highlights */}
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="text-center p-6 glass rounded-2xl border border-white/10"
                                                >
                                                    <CheckCircle2 className="w-8 h-8 text-teal mx-auto mb-3" />
                                                    <div className="text-lg font-bold text-white mb-2">Quality Assurance</div>
                                                    <div className="text-sm text-gray-400">ISO Standard Compliance</div>
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="text-center p-6 glass rounded-2xl border border-white/10"
                                                >
                                                    <Award className="w-8 h-8 text-amber mx-auto mb-3" />
                                                    <div className="text-lg font-bold text-white mb-2">Professional Excellence</div>
                                                    <div className="text-sm text-gray-400">Expert Team Work</div>
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05, y: -5 }}
                                                    className="text-center p-6 glass rounded-2xl border border-white/10"
                                                >
                                                    <Star className="w-8 h-8 text-navy-light mx-auto mb-3" />
                                                    <div className="text-lg font-bold text-white mb-2">Client Satisfaction</div>
                                                    <div className="text-sm text-gray-400">Outstanding Results</div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                                        {[
                                            { value: "500+", label: "Hours Completed", icon: <Calendar className="w-6 h-6" /> },
                                            { value: "100%", label: "Client Satisfaction", icon: <CheckCircle2 className="w-6 h-6" /> },
                                            { value: "On Time", label: "Project Delivery", icon: <Star className="w-6 h-6" /> }
                                        ].map((stat, index) => (
                                            <motion.div
                                                key={stat.label}
                                                initial={{ scale: 0.8, opacity: 0 }}
                                                whileInView={{ scale: 1, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="text-center"
                                            >
                                                <div className="mb-3 text-amber-light">
                                                    {stat.icon}
                                                </div>
                                                <div className="text-4xl font-black text-white mb-2">
                                                    {stat.value}
                                                </div>
                                                <div className="text-sm text-gray-400 font-medium">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Service Quality Standards */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <Card className="card-hover bg-gradient-to-br from-teal/10 to-teal-dark/10 border-teal/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal to-teal-dark group-hover:h-3 transition-all duration-300"></div>
                            <CardHeader className="pt-8">
                                <CardTitle className="text-2xl text-center text-teal flex items-center justify-center gap-3 font-bold">
                                    <Target className="w-7 h-7" />
                                    Keunggulan Layanan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Standar kualitas tinggi konsisten</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Harga kompetitif dengan value terbaik</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-teal shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Tenaga kerja berpengalaman</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="card-hover bg-gradient-to-br from-navy/10 to-navy-dark/10 border-navy/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy to-navy-dark group-hover:h-3 transition-all duration-300"></div>
                            <CardHeader className="pt-8">
                                <CardTitle className="text-2xl text-center text-navy flex items-center justify-center gap-3 font-bold">
                                    <Shield className="w-7 h-7" />
                                    Standar Kepatuhan
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-navy shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Mematuhi hukum dan peraturan</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-navy shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Keselamatan kerja terjamin</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-navy shrink-0" />
                                        <span className="text-charcoal-light font-medium text-lg">Professional certification</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}