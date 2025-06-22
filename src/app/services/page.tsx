// src/app/services/page.tsx - Services Detail Page
"use client"

import { motion } from "framer-motion"
import {
    Package, Building2, Wrench, Users, Zap, Cog,
    Sparkles, Building, CheckCircle2, ArrowRight, Star,
    Shield, Phone, Mail, Target, Award, Globe
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import Link from "next/link"

const detailedServices = [
    {
        icon: <Package className="w-12 h-12" />,
        title: "General Trading",
        shortDesc: "Perdagangan umum untuk berbagai kebutuhan industri",
        description: "Layanan perdagangan umum yang komprehensif untuk memenuhi kebutuhan industri dengan standar kualitas internasional. Kami menyediakan berbagai produk dan material dengan jaminan kualitas terbaik serta dukungan supply chain management yang handal.",
        features: [
            "Import & Export Services dengan dokumentasi lengkap",
            "Supply Chain Management yang terintegrasi",
            "Material Distribution ke seluruh Indonesia",
            "Quality Control & Inspection sesuai standar",
            "Procurement Management untuk proyek besar",
            "Vendor Management dan evaluasi supplier"
        ],
        benefits: [
            "Akses ke supplier global terpercaya",
            "Harga kompetitif dengan kualitas terjamin",
            "Dokumentasi lengkap dan legal compliance",
            "Delivery tepat waktu dengan tracking system"
        ],
        gradient: "from-navy to-navy-dark",
        cardBg: "bg-gradient-to-br from-navy/10 to-navy-dark/10",
        iconBg: "bg-gradient-to-br from-navy to-navy-dark",
        textColor: "text-navy"
    },
    {
        icon: <Building2 className="w-12 h-12" />,
        title: "Engineering Construction",
        shortDesc: "Konstruksi dan engineering berkualitas tinggi",
        description: "Layanan konstruksi dan engineering yang menggunakan teknologi terdepan dengan standar keselamatan internasional. Tim ahli kami siap menangani proyek konstruksi dari skala kecil hingga besar dengan kualitas dan keandalan yang terjamin.",
        features: [
            "Design & Build Services dengan CAD/CAM terbaru",
            "Project Management dengan metodologi PMI",
            "Structural Engineering sesuai SNI dan internasional",
            "Safety Implementation dengan zero accident target",
            "Quality Assurance dengan inspeksi bertahap",
            "Environmental compliance dan sustainability"
        ],
        benefits: [
            "Desain optimal dengan analisis struktural lengkap",
            "Pelaksanaan sesuai timeline dengan milestone clear",
            "Sertifikasi keselamatan dan kualitas",
            "Garansi konstruksi dan after-sales service"
        ],
        gradient: "from-amber to-amber-dark",
        cardBg: "bg-gradient-to-br from-amber/10 to-amber-dark/10",
        iconBg: "bg-gradient-to-br from-amber to-amber-dark",
        textColor: "text-amber"
    },
    {
        icon: <Wrench className="w-12 h-12" />,
        title: "Maintenance Services",
        shortDesc: "Layanan maintenance komprehensif",
        description: "Layanan maintenance komprehensif untuk menjaga performa optimal equipment dan fasilitas. Dengan dukungan teknisi berpengalaman dan sistem monitoring canggih, kami memastikan operasional yang efisien dan downtime minimal.",
        features: [
            "Preventive Maintenance dengan jadwal terstruktur",
            "Corrective Maintenance dengan response time cepat",
            "Equipment Optimization untuk efisiensi maksimal",
            "24/7 Technical Support dan emergency service",
            "Condition Monitoring dengan IoT technology",
            "Spare Parts Management dan inventory control"
        ],
        benefits: [
            "Mengurangi downtime operasional hingga 80%",
            "Memperpanjang umur equipment significantly",
            "Cost saving melalui maintenance terencana",
            "Real-time monitoring dan reporting"
        ],
        gradient: "from-teal to-teal-dark",
        cardBg: "bg-gradient-to-br from-teal/10 to-teal-dark/10",
        iconBg: "bg-gradient-to-br from-teal to-teal-dark",
        textColor: "text-teal"
    },
    {
        icon: <Users className="w-12 h-12" />,
        title: "Labor Supply",
        shortDesc: "Penyediaan tenaga kerja profesional",
        description: "Penyediaan tenaga kerja profesional dan terampil sesuai kebutuhan proyek dengan sertifikasi keselamatan dan kompetensi yang teruji. Kami menyediakan solusi staffing yang fleksibel untuk berbagai jenis industri.",
        features: [
            "Skilled Workers Supply dengan sertifikasi",
            "Professional Training dan skill development",
            "Safety Certified Staff dengan track record",
            "Flexible Staffing Solutions sesuai kebutuhan",
            "Performance Management dan evaluasi berkala",
            "Administrative Support dan payroll management"
        ],
        benefits: [
            "Tenaga kerja terlatih dan bersertifikat",
            "Fleksibilitas dalam durasi kontrak",
            "Compliance dengan regulasi ketenagakerjaan",
            "Support administratif lengkap"
        ],
        gradient: "from-maroon to-maroon-dark",
        cardBg: "bg-gradient-to-br from-maroon/10 to-maroon-dark/10",
        iconBg: "bg-gradient-to-br from-maroon to-maroon-dark",
        textColor: "text-maroon"
    },
    {
        icon: <Zap className="w-12 h-12" />,
        title: "Electrical Services",
        shortDesc: "Solusi kelistrikan lengkap",
        description: "Solusi kelistrikan lengkap dari instalasi hingga maintenance sistem elektrik dengan standar keselamatan tinggi. Tim electrical engineer kami berpengalaman dalam menangani sistem kelistrikan industri dan komersial.",
        features: [
            "Electrical Installation sesuai PUIL dan internasional",
            "Power System Design dengan load analysis",
            "Maintenance & Repair dengan spare parts original",
            "Safety Compliance dan electrical safety audit",
            "Energy Efficiency consulting dan optimization",
            "Emergency Electrical Service 24/7"
        ],
        benefits: [
            "Sistem kelistrikan yang aman dan reliable",
            "Efisiensi energi dan cost saving",
            "Compliance dengan standar keselamatan",
            "Maintenance berkala dan monitoring"
        ],
        gradient: "from-gold to-gold-dark",
        cardBg: "bg-gradient-to-br from-gold/10 to-gold-dark/10",
        iconBg: "bg-gradient-to-br from-gold to-gold-dark",
        textColor: "text-gold"
    },
    {
        icon: <Cog className="w-12 h-12" />,
        title: "Mechanical Services",
        shortDesc: "Layanan mechanical engineering",
        description: "Layanan mechanical engineering untuk berbagai kebutuhan industri modern dengan teknologi terdepan. Kami menangani instalasi, maintenance, dan optimization sistem mechanical dengan precision engineering.",
        features: [
            "Mechanical Installation dengan precision tools",
            "Equipment Maintenance sesuai OEM recommendations",
            "System Troubleshooting dengan diagnostic tools",
            "Performance Optimization dan efficiency improvement",
            "Vibration Analysis dan condition monitoring",
            "Mechanical Design dan fabrication services"
        ],
        benefits: [
            "Performa mechanical system optimal",
            "Reliability dan availability tinggi",
            "Predictive maintenance capabilities",
            "Cost effective operations"
        ],
        gradient: "from-steel to-steel-light",
        cardBg: "bg-gradient-to-br from-steel/10 to-steel-light/10",
        iconBg: "bg-gradient-to-br from-steel to-steel-light",
        textColor: "text-steel"
    },
    {
        icon: <Sparkles className="w-12 h-12" />,
        title: "Cleaning Services",
        shortDesc: "Layanan cleaning profesional",
        description: "Layanan cleaning profesional untuk berbagai jenis fasilitas dan industri dengan standar kebersihan tinggi. Menggunakan equipment modern dan chemical grade yang aman untuk lingkungan.",
        features: [
            "Industrial Cleaning dengan specialized equipment",
            "Facility Management services yang komprehensif",
            "Specialized Cleaning untuk area sensitif",
            "Regular Maintenance cleaning schedule",
            "Deep Cleaning dan sanitization services",
            "Waste Management dan recycling program"
        ],
        benefits: [
            "Lingkungan kerja yang bersih dan sehat",
            "Compliance dengan standar kesehatan",
            "Professional team dengan training",
            "Eco-friendly cleaning solutions"
        ],
        gradient: "from-teal-light to-teal-accent",
        cardBg: "bg-gradient-to-br from-teal-light/10 to-teal-accent/10",
        iconBg: "bg-gradient-to-br from-teal-light to-teal-accent",
        textColor: "text-teal"
    },
    {
        icon: <Building className="w-12 h-12" />,
        title: "Civil & Services",
        shortDesc: "Layanan sipil dan konstruksi",
        description: "Layanan sipil dan konstruksi dengan standar profesional tertinggi untuk berbagai jenis proyek infrastruktur. Dari persiapan site hingga finishing, kami menangani dengan expertise dan attention to detail.",
        features: [
            "Civil Construction dengan quality control ketat",
            "Infrastructure Development planning dan execution",
            "Site Preparation dan ground improvement",
            "Project Consulting dari feasibility study",
            "Surveying dan mapping dengan technology terbaru",
            "Environmental impact assessment"
        ],
        benefits: [
            "Infrastruktur berkualitas dan tahan lama",
            "Compliance dengan regulasi pemerintah",
            "Timeline execution yang akurat",
            "Environmental friendly approach"
        ],
        gradient: "from-navy-light to-navy-accent",
        cardBg: "bg-gradient-to-br from-navy-light/10 to-navy-accent/10",
        iconBg: "bg-gradient-to-br from-navy-light to-navy-accent",
        textColor: "text-navy"
    }
]

const whyChooseUs = [
    {
        icon: <Star className="w-8 h-8" />,
        title: "Pengalaman Terpercaya",
        description: "Lebih dari 3 tahun pengalaman dalam industri dengan track record yang solid",
        color: "from-navy to-navy-dark"
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Sertifikasi Lengkap",
        description: "Tim bersertifikat dengan standar internasional dan compliance regulasi",
        color: "from-amber to-amber-dark"
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Keselamatan Utama",
        description: "Zero accident policy dengan implementasi safety management system",
        color: "from-teal to-teal-dark"
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Coverage Nasional",
        description: "Jangkauan layanan ke seluruh Indonesia dengan support lokal",
        color: "from-maroon to-maroon-dark"
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen pt-16 bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-navy/5 via-background to-amber/5 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-navy/10 rounded-full filter blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber/10 rounded-full filter blur-xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Badge variant="outline" className="mb-6 border-navy text-navy bg-navy/10 px-4 py-2">
                            Layanan Profesional Kami
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                            Solusi Lengkap untuk{" "}
                            <span className="gradient-text">Kebutuhan Industri</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            Melayani berbagai kebutuhan industri dengan standar kualitas tinggi,
                            teknologi terdepan, dan tim profesional berpengalaman
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {detailedServices.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                >
                                    <Card className={`h-full ${service.cardBg} border-white/60 shadow-xl card-hover backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-105 relative`}>
                                        {/* Top accent bar */}
                                        <div className={`h-2 bg-gradient-to-r ${service.gradient} group-hover:h-3 transition-all duration-300`} />

                                        <CardHeader className="relative z-10 pb-4">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-20 h-20 rounded-2xl ${service.iconBg} p-4 shrink-0 shadow-xl text-white`}>
                                                    {service.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className={`text-2xl font-bold ${service.textColor} mb-2`}>
                                                        {service.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-charcoal-light text-base leading-relaxed">
                                                        {service.shortDesc}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="relative z-10 space-y-6">
                                            <p className="text-charcoal-light leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Features */}
                                            <div>
                                                <h4 className={`font-semibold mb-3 ${service.textColor} flex items-center gap-2`}>
                                                    <Target className="w-5 h-5" />
                                                    Layanan Utama
                                                </h4>
                                                <ul className="space-y-2">
                                                    {service.features.slice(0, 4).map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 text-sm text-charcoal-light">
                                                            <div className={`w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0`}>
                                                                <CheckCircle2 className="w-3 h-3 text-white" />
                                                            </div>
                                                            <span className="font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Benefits */}
                                            <div>
                                                <h4 className={`font-semibold mb-3 ${service.textColor} flex items-center gap-2`}>
                                                    <Star className="w-5 h-5" />
                                                    Keunggulan
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {service.benefits.map((benefit, idx) => (
                                                        <div key={idx} className="flex items-center gap-2 text-sm text-charcoal-light">
                                                            <div className="w-2 h-2 bg-amber rounded-full shrink-0"></div>
                                                            <span>{benefit}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <Link href="/contact">
                                                <Button className={`w-full ${service.textColor} hover:bg-white/80 group-hover:bg-white/90 transition-all duration-300 font-semibold border border-white/40`} variant="ghost">
                                                    Konsultasi Layanan
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-gradient-to-br from-muted via-background to-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Mengapa Memilih Kami?
                            </h2>
                            <p className="text-lg text-charcoal-light">
                                Keunggulan yang membuat kami menjadi partner terpercaya untuk proyek Anda
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyChooseUs.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <Card className="card-hover bg-white/95 border-border/50 group h-full text-center">
                                        <CardContent className="p-8">
                                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-navy transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-charcoal-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="glass-navy rounded-2xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                                Siap Memulai Proyek Anda?
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Konsultasikan kebutuhan proyek Anda dengan tim ahli kami.
                                Dapatkan solusi terbaik dengan standar kualitas internasional.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Link href="/contact">
                                    <Button className="btn-navy px-8 py-4 text-lg font-bold group">
                                        <Mail className="mr-2 h-5 w-5" />
                                        Konsultasi Gratis
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Button className="btn-ghost-navy px-8 py-4 text-lg font-bold group">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Hubungi Sekarang
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </div>

                            <div className="mt-12 grid grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal mb-2">24/7</div>
                                    <div className="text-sm text-gray-400">Support Available</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber mb-2">100%</div>
                                    <div className="text-sm text-gray-400">Quality Guaranteed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-navy-light mb-2">3+</div>
                                    <div className="text-sm text-gray-400">Years Experience</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}