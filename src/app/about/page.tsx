// src/app/about/page.tsx - About Page
"use client"

import { motion } from "framer-motion"
import { Target, Zap, Award, CheckCircle2, Users, Building, Calendar, Shield, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"



const achievements = [
    { value: "3+", label: "Tahun Pengalaman", icon: <Calendar className="w-5 h-5" />, color: "text-navy" },
    { value: "100+", label: "Proyek Selesai", icon: <Building className="w-5 h-5" />, color: "text-amber" },
    { value: "50+", label: "Anggota Tim", icon: <Users className="w-5 h-5" />, color: "text-teal" },
    { value: "100%", label: "Kepuasan Klien", icon: <Shield className="w-5 h-5" />, color: "text-maroon" }
]

const timeline = [
    {
        year: "2021",
        title: "Pendirian Perusahaan",
        description: "PT. Karya Rizky Andrian didirikan pada 13 Juli 2021 dengan fokus pada pelayanan industri profesional",
        color: "bg-navy"
    },
    {
        year: "2022",
        title: "Ekspansi Layanan",
        description: "Memperluas layanan ke berbagai sektor industri dan membangun tim profesional yang handal",
        color: "bg-amber"
    },
    {
        year: "2023",
        title: "Sertifikasi Kualitas",
        description: "Meraih sertifikasi kualitas dan standar keselamatan untuk meningkatkan kepercayaan klien",
        color: "bg-teal"
    },
    {
        year: "2024",
        title: "Pertumbuhan Kemitraan",
        description: "Membangun kemitraan strategis dengan berbagai perusahaan terkemuka di Indonesia",
        color: "bg-maroon"
    }
]

const companyValues = [
    {
        title: "Profesionalisme",
        description: "Melaksanakan setiap pekerjaan dengan standar profesional tertinggi",
        icon: <Award className="w-8 h-8" />,
        color: "from-navy to-navy-dark"
    },
    {
        title: "Keandalan",
        description: "Menjadi mitra yang dapat diandalkan dalam setiap situasi dan kondisi",
        icon: <Shield className="w-8 h-8" />,
        color: "from-teal to-teal-dark"
    },
    {
        title: "Inovasi",
        description: "Selalu mengadopsi teknologi dan metode terbaru untuk hasil optimal",
        icon: <Zap className="w-8 h-8" />,
        color: "from-amber to-amber-dark"
    },
    {
        title: "Integritas",
        description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap aspek bisnis",
        icon: <Star className="w-8 h-8" />,
        color: "from-maroon to-maroon-dark"
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-16 bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-warm relative overflow-hidden">
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
                        <Badge variant="outline" className="mb-6 border-amber text-amber bg-amber/10 px-4 py-2">
                            Tentang Perusahaan Kami
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                            Membangun Keunggulan Sejak{" "}
                            <span className="gradient-text">2021</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            PT. Karya Rizky Andrian adalah perusahaan swasta nasional yang berkomitmen
                            memberikan solusi industri terbaik dengan standar kualitas internasional
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Fondasi Kami
                            </h2>
                            <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
                                Nilai-nilai fundamental yang menjadi landasan setiap langkah kami
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Card className="h-full card-hover bg-white/95 border-border/50 group">
                                    <CardHeader className="text-center">
                                        <div className="w-16 h-16 bg-navy/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy/15 transition-colors">
                                            <Target className="w-8 h-8 text-navy" />
                                        </div>
                                        <CardTitle className="text-2xl text-charcoal group-hover:text-navy transition-colors">
                                            Visi Kami
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-charcoal-light leading-relaxed">
                                            Menjadi perusahaan yang profesional dan mampu melaksanakan serta menyelesaikan
                                            pekerjaan sesuai dengan bidang usaha dan sub bidangnya, menjadi aset
                                            yang bermanfaat bagi lingkungan dan masyarakat.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Card className="h-full card-hover bg-white/95 border-border/50 group">
                                    <CardHeader className="text-center">
                                        <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber/15 transition-colors">
                                            <Zap className="w-8 h-8 text-amber" />
                                        </div>
                                        <CardTitle className="text-2xl text-charcoal group-hover:text-amber transition-colors">
                                            Misi Kami
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-center">
                                        <p className="text-charcoal-light leading-relaxed">
                                            Membangun bisnis dan aset produktif secara terpadu untuk memberikan
                                            manfaat dan pelayanan kepada Masyarakat, Bangsa dan Negara, dengan
                                            responsif, cepat tanggap dan penuh tanggung jawab.
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Card className="h-full card-hover bg-white/95 border-border/50 group">
                                    <CardHeader className="text-center">
                                        <div className="w-16 h-16 bg-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal/15 transition-colors">
                                            <Award className="w-8 h-8 text-teal" />
                                        </div>
                                        <CardTitle className="text-2xl text-charcoal group-hover:text-teal transition-colors">
                                            Nilai Kami
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4">
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                                                <span className="text-charcoal-light">Mematuhi peraturan perundang-undangan yang berlaku</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                                                <span className="text-charcoal-light">Menerapkan kode etik berbisnis yang profesional</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                                                <span className="text-charcoal-light">Mengembangkan SDM berkualitas dan profesional</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Profile */}
            <section className="py-20 bg-gradient-cool">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
                                Profil Perusahaan
                            </h2>
                        </div>

                        <div className="glass rounded-2xl p-8 md:p-12 mb-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal mb-6">
                                        Tentang PT. Karya Rizky Andrian
                                    </h3>
                                    <div className="space-y-4 text-charcoal-light leading-relaxed">
                                        <p>
                                            PT. Karya Rizky Andrian didirikan pada{" "}
                                            <span className="text-navy font-semibold bg-navy/10 px-2 py-1 rounded">13 Juli 2021</span>,
                                            sebagai perusahaan swasta nasional yang bergerak di bidang{" "}
                                            <span className="font-semibold text-charcoal">
                                                General Trading, Engineering Construction, Maintenance, Labor Supply,
                                                Electrical, Mechanical, Cleaning Service, Civil & Services
                                            </span>.
                                        </p>
                                        <p>
                                            Kami adalah salah satu perusahaan swasta nasional yang didukung oleh{" "}
                                            <span className="text-amber font-semibold bg-amber/10 px-2 py-1 rounded">sufficient financial</span>{" "}
                                            dan tenaga kerja berpengalaman. Tim kami terdiri dari sumber daya manusia
                                            yang andal, terampil, profesional, dan berpengalaman di bidangnya.
                                        </p>
                                        <p>
                                            Dengan komitmen untuk menjawab tantangan berat yang dihadapi di era
                                            persaingan globalisasi, kami terus mengembangkan kemampuan dan kualitas
                                            layanan untuk memberikan solusi terbaik bagi klien.
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={achievement.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-center glass rounded-xl p-6 hover:scale-105 transition-all duration-300 group"
                                        >
                                            <div className={`flex justify-center mb-3 ${achievement.color}`}>
                                                {achievement.icon}
                                            </div>
                                            <div className={`text-3xl font-bold mb-2 ${achievement.color}`}>
                                                {achievement.value}
                                            </div>
                                            <div className="text-sm text-charcoal-light font-medium">
                                                {achievement.label}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Timeline */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Perjalanan Kami
                            </h2>
                            <p className="text-lg text-charcoal-light">
                                Perjalanan kami dalam membangun kepercayaan dan memberikan pelayanan terbaik
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-navy via-amber via-teal to-maroon"></div>

                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${item.color} rounded-full border-4 border-white shadow-lg z-10`}></div>

                                    {/* Content */}
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <Card className="card-hover bg-white/95 border-border/50">
                                            <CardHeader>
                                                <div className="flex items-center gap-3">
                                                    <Badge className={`${item.color} text-white`}>
                                                        {item.year}
                                                    </Badge>
                                                    <CardTitle className="text-xl text-charcoal">
                                                        {item.title}
                                                    </CardTitle>
                                                </div>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-charcoal-light">
                                                    {item.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Company Values */}
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
                                Nilai-Nilai Perusahaan
                            </h2>
                            <p className="text-lg text-charcoal-light">
                                Prinsip yang memandu setiap tindakan dan keputusan kami
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {companyValues.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="card-hover bg-white/95 border-border/50 group h-full">
                                        <CardContent className="p-8">
                                            <div className="flex items-start gap-4">
                                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                                    {value.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-navy transition-colors">
                                                        {value.title}
                                                    </h3>
                                                    <p className="text-charcoal-light leading-relaxed">
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Commitment Section */}
            <section className="py-20 bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="glass-navy rounded-2xl p-8 md:p-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Komitmen Kami
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                Dengan standar tinggi yang konsisten dan kualitas pekerjaan terbaik,
                                kami berkomitmen mematuhi hukum dan peraturan keselamatan untuk menjaga
                                kesehatan, keselamatan pekerja, dan kelancaran pekerjaan. Setiap proyek
                                dilaksanakan dengan dedikasi penuh untuk mencapai kepuasan klien yang maksimal.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-navy/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Shield className="w-8 h-8 text-navy-light" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Keselamatan Utama</h3>
                                    <p className="text-sm text-gray-400">Keselamatan kerja adalah prioritas utama dalam setiap proyek</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-amber/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-amber" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Jaminan Kualitas</h3>
                                    <p className="text-sm text-gray-400">Standar kualitas tinggi dalam setiap aspek pekerjaan</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8 text-teal" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">Kepuasan Klien</h3>
                                    <p className="text-sm text-gray-400">Kepuasan klien sebagai ukuran keberhasilan kami</p>
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