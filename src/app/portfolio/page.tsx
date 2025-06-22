// src/app/portfolio/page.tsx - Portfolio Gallery Page
"use client"

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Factory, Building2, Wrench, Package, Truck, PaintBucket,
    Settings, X, Calendar, MapPin, CheckCircle2, Star, Award, ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"

const portfolioCategories = [
    { id: "all", label: "Semua Proyek", icon: <Settings className="w-4 h-4" /> },
    { id: "construction", label: "Engineering Construction", icon: <Building2 className="w-4 h-4" /> },
    { id: "fabrication", label: "Steel Fabrication", icon: <Factory className="w-4 h-4" /> },
    { id: "maintenance", label: "Maintenance", icon: <Wrench className="w-4 h-4" /> },
    { id: "trading", label: "General Trading", icon: <Package className="w-4 h-4" /> },
    { id: "transportation", label: "Transportation", icon: <Truck className="w-4 h-4" /> },
    { id: "painting", label: "Painting Services", icon: <PaintBucket className="w-4 h-4" /> }
]

const portfolioProjects = [
    {
        id: 1,
        title: "Steel Structure Fabrication - PT. CHC",
        category: "fabrication",
        client: "PT. Cigading Habeam Centre",
        location: "Cilegon, Banten",
        date: "2024",
        description: "Repair fabrication, assembling dan welding steel structure dengan standar tinggi untuk fasilitas industri. Proyek ini meliputi pembuatan struktur baja berkualitas dengan presisi tinggi dan sistem quality control yang ketat.",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
        tags: ["Steel Welding", "Assembly Work", "Quality Control"],
        featured: true
    },
    {
        id: 2,
        title: "Industrial Equipment Maintenance",
        category: "maintenance",
        client: "PT. Industrial Solutions",
        location: "Jakarta",
        date: "2024",
        description: "Preventive maintenance untuk berbagai equipment industri dengan standar profesional. Layanan mencakup inspeksi berkala, perbaikan preventif, dan optimalisasi performa mesin industri.",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
        tags: ["Preventive Maintenance", "Equipment Repair", "24/7 Support"]
    },
    {
        id: 3,
        title: "Steel Grating Supply Project",
        category: "trading",
        client: "PT. Construction Pro",
        location: "Surabaya",
        date: "2024",
        description: "Pengadaan material steel grating berkualitas tinggi untuk proyek konstruksi besar. Termasuk konsultasi teknis dan jaminan kualitas material sesuai standar internasional.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
        tags: ["Steel Grating", "Quality Material", "Timely Delivery"]
    },
    {
        id: 4,
        title: "Warehouse Construction",
        category: "construction",
        client: "PT. Logistics Center",
        location: "Tangerang",
        date: "2023",
        description: "Pembangunan warehouse dengan teknologi modern dan standar keselamatan tinggi. Proyek meliputi desain struktural, konstruksi civil work, dan instalasi sistem utilitas.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
        tags: ["Civil Construction", "Modern Design", "Safety Standards"]
    },
    {
        id: 5,
        title: "Heavy Equipment Transportation",
        category: "transportation",
        client: "PT. Mining Corp",
        location: "Kalimantan",
        date: "2023",
        description: "Layanan transportasi equipment berat dengan coverage nasional dan handling profesional. Menggunakan armada modern dengan sistem tracking dan asuransi komprehensif.",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        tags: ["Heavy Transport", "Nationwide Coverage", "Professional Handling"]
    },
    {
        id: 6,
        title: "Industrial Painting Services",
        category: "painting",
        client: "PT. Chemical Plant",
        location: "Cikarang",
        date: "2023",
        description: "Pengecatan structure dan handrail dengan finishing berkualitas premium dan anti-rust treatment. Menggunakan cat industrial grade dengan sistem proteksi korosi terdepan.",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
        tags: ["Anti-rust Treatment", "Premium Finishing", "Structure Coating"]
    },
    {
        id: 7,
        title: "Welding Workshop Services",
        category: "fabrication",
        client: "PT. Manufacturing Hub",
        location: "Bekasi",
        date: "2023",
        description: "Layanan workshop fabrikasi dan welding dengan teknologi modern dan quality control ketat. Dilengkapi dengan certified welder dan peralatan welding canggih.",
        image: "https://images.unsplash.com/photo-1574974885113-d3f9ba8ac93a?w=800&h=600&fit=crop",
        tags: ["Custom Welding", "Modern Technology", "Quality Inspection"]
    },
    {
        id: 8,
        title: "Precision Measurement Services",
        category: "maintenance",
        client: "PT. Precision Tech",
        location: "Jakarta",
        date: "2022",
        description: "Repair visual dimensi dan pengukuran presisi tinggi dengan teknologi canggih. Layanan meliputi kalibrasi instrument dan validasi dimensi dengan akurasi tinggi.",
        image: "https://images.unsplash.com/photo-1581093458791-9d42e72b0fb8?w=800&h=600&fit=crop",
        tags: ["Precision Measurement", "Visual Inspection", "Advanced Technology"]
    },
    {
        id: 9,
        title: "AC Maintenance Program",
        category: "maintenance",
        client: "PT. Office Complex",
        location: "Jakarta",
        date: "2022",
        description: "Program maintenance AC untuk fasilitas komersial dan industri dengan standar profesional. Termasuk cleaning, servicing, dan optimalisasi efisiensi energi sistem HVAC.",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
        tags: ["AC Maintenance", "System Optimization", "Regular Service"]
    }
]

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState("all")
    const [selectedProject, setSelectedProject] = useState<typeof portfolioProjects[0] | null>(null)

    const filteredProjects = activeCategory === "all"
        ? portfolioProjects
        : portfolioProjects.filter(project => project.category === activeCategory)

    return (
        <div className="min-h-screen">
            <Header />

            <div className="pt-24">
                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-xl animate-pulse"></div>
                        <div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/10 rounded-full filter blur-xl animate-pulse"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-amber-400/5 rounded-full filter blur-2xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-blue-600 to-amber-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Award className="w-5 h-5 mr-2" />
                                Portfolio Proyek
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-800 leading-tight">
                                Hasil Karya{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-amber-600 bg-clip-text text-transparent">
                                    Berkualitas
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                                Kumpulan proyek-proyek yang telah kami selesaikan dengan standar kualitas tinggi
                                dan kepuasan klien yang maksimal sejak 2021
                            </p>

                            {/* Enhanced Stats */}
                            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2">100+</div>
                                    <div className="text-sm text-gray-600 font-medium">Proyek Selesai</div>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, duration: 0.5 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-amber-600 mb-2">50+</div>
                                    <div className="text-sm text-gray-600 font-medium">Klien Puas</div>
                                </motion.div>
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                >
                                    <div className="text-3xl md:text-4xl font-black text-emerald-600 mb-2">100%</div>
                                    <div className="text-sm text-gray-600 font-medium">Kualitas Terjamin</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Filter Categories */}
                <section className="py-16 bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter Berdasarkan Kategori</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {portfolioCategories.map((category, index) => (
                                    <motion.div
                                        key={category.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Button
                                            onClick={() => setActiveCategory(category.id)}
                                            variant={activeCategory === category.id ? "default" : "outline"}
                                            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${activeCategory === category.id
                                                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border-0"
                                                    : "border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50"
                                                }`}
                                        >
                                            {category.icon}
                                            <span className="font-medium">{category.label}</span>
                                        </Button>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced Portfolio Grid with Consistent Card Sizes */}
                <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="wait">
                                {filteredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ delay: index * 0.1, duration: 0.6 }}
                                        className="h-full" // Ensure full height
                                    >
                                        <Card
                                            className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] bg-white border-gray-200/50 overflow-hidden h-full flex flex-col"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <div className="relative overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    width={800}
                                                    height={600}
                                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tags.slice(0, 2).map((tag) => (
                                                            <Badge key={tag} className="bg-white/20 backdrop-blur-sm text-white border-white/30 text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                                {project.featured && (
                                                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-md">
                                                        <Star className="w-3 h-3 mr-1" />
                                                        Featured
                                                    </Badge>
                                                )}
                                            </div>

                                            <div className="flex flex-col flex-grow">
                                                <CardHeader className="pb-3 flex-shrink-0">
                                                    <CardTitle className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2 min-h-[3.5rem]">
                                                        {project.title}
                                                    </CardTitle>
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="w-4 h-4" />
                                                            {project.date}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="w-4 h-4" />
                                                            {project.location}
                                                        </div>
                                                    </div>
                                                </CardHeader>

                                                <CardContent className="flex flex-col flex-grow">
                                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                                                        {project.description}
                                                    </p>

                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.tags.map((tag) => (
                                                            <Badge key={tag} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>

                                                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                                                        <div className="text-sm font-semibold text-blue-600 truncate pr-2">
                                                            {project.client}
                                                        </div>
                                                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                                                    </div>
                                                </CardContent>
                                            </div>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* No Results Message */}
                        {filteredProjects.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-16"
                            >
                                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">Tidak ada proyek ditemukan</h3>
                                <p className="text-gray-500">Coba pilih kategori lain atau lihat semua proyek</p>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Enhanced Client Testimonial Section */}
                <section className="py-20 bg-gradient-to-br from-gray-800 via-blue-900 to-gray-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-xl"></div>
                        <div className="absolute bottom-20 right-20 w-64 h-64 bg-amber-500/10 rounded-full filter blur-xl"></div>
                    </div>

                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-black mb-12">
                                Testimonial Klien
                            </h2>

                            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="flex justify-center mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            <Star className="w-6 h-6 text-amber-400 fill-current mx-1" />
                                        </motion.div>
                                    ))}
                                </div>
                                <blockquote className="text-xl italic mb-8 leading-relaxed text-gray-100">
                                    &ldquo;PT. Karya Rizky Andrian memberikan layanan yang sangat profesional dan berkualitas tinggi.
                                    Tim mereka sangat berpengalaman dan selalu menyelesaikan proyek tepat waktu dengan hasil yang memuaskan.
                                    Kami sangat merekomendasikan mereka untuk proyek-proyek industrial.&rdquo;
                                </blockquote>
                                <cite className="text-amber-300 font-semibold text-lg">
                                    - Project Manager, PT. Cigading Habeam Centre
                                </cite>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Enhanced CTA Section */}
                <section className="py-20 bg-gradient-to-br from-white to-blue-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Siap Memulai Proyek Anda?
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                                Hubungi tim ahli kami untuk konsultasi gratis dan penawaran terbaik.
                                Kami siap membantu mewujudkan proyek impian Anda dengan kualitas terbaik.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    Konsultasi Gratis
                                </Button>
                                <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                                    Lihat Layanan
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Enhanced Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    width={800}
                                    height={600}
                                    className="w-full h-80 object-cover rounded-t-3xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-t-3xl"></div>
                                <Button
                                    onClick={() => setSelectedProject(null)}
                                    variant="ghost"
                                    size="icon"
                                    className="absolute top-6 right-6 bg-black/50 text-white hover:bg-black/70 rounded-full backdrop-blur-sm"
                                >
                                    <X className="w-5 h-5" />
                                </Button>
                                {selectedProject.featured && (
                                    <Badge className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                                        <Star className="w-4 h-4 mr-1" />
                                        Featured Project
                                    </Badge>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                        {selectedProject.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center gap-6 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-5 h-5 text-blue-600" />
                                            <span className="font-semibold text-blue-600">{selectedProject.client}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-5 h-5 text-gray-500" />
                                            <span>{selectedProject.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-5 h-5 text-gray-500" />
                                            <span>{selectedProject.date}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="prose prose-lg max-w-none mb-8">
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Teknologi & Layanan</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tags.map((tag) => (
                                            <Badge key={tag} className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                                    <span className="font-semibold text-emerald-800">Proyek Selesai dengan Sukses</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    )
}