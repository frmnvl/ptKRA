// src/components/sections/AboutSection.tsx
"use client"

import { motion } from "framer-motion"
import { Target, Zap, Award, CheckCircle2, Building, Users2, Globe, Shield, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
    return (
        <section id="about" className="py-20 relative bg-gradient-to-br from-muted via-background to-muted/30 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-navy/20 to-navy-dark/20 rounded-full filter blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                    className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber/20 to-amber-dark/20 rounded-full filter blur-3xl"
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
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-navy to-navy-dark text-white border-0 shadow-lg hover:shadow-navy/25 transition-all duration-300">
                                <Building className="w-5 h-5 mr-2" />
                                Tentang Perusahaan
                            </Badge>
                        </motion.div>

                        <motion.h2
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                        >
                            <span className="text-charcoal">
                                Keunggulan Profesional
                            </span>
                            <br />
                            <span className="gradient-text">
                                Sejak 2021
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed"
                        >
                            Perusahaan swasta nasional yang didukung oleh sufficient financial dan tenaga kerja berpengalaman untuk menjawab tantangan era globalisasi
                        </motion.p>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "6rem" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="h-1 bg-gradient-to-r from-navy to-amber mx-auto mt-8 rounded-full"
                        />
                    </div>

                    {/* Vision, Mission, Values Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -50, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                        >
                            <Card className="h-full card-hover bg-gradient-to-br from-navy/10 to-navy-dark/10 border-navy/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy to-navy-dark group-hover:h-3 transition-all duration-300"></div>

                                <CardHeader className="text-center pt-8 relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-20 h-20 bg-gradient-to-br from-navy to-navy-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl text-white"
                                    >
                                        <Target className="w-10 h-10" />
                                    </motion.div>
                                    <CardTitle className="text-2xl font-bold text-navy group-hover:text-navy-dark transition-colors">
                                        Visi Kami
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center relative z-10">
                                    <p className="text-charcoal-light leading-relaxed text-lg">
                                        Menjadi perusahaan yang profesional dan mampu melaksanakan serta menyelesaikan
                                        pekerjaan sesuai dengan bidang usaha dan sub bidangnya, menjadi aset
                                        yang bermanfaat bagi lingkungan dan masyarakat.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <Card className="h-full card-hover bg-gradient-to-br from-amber/10 to-amber-dark/10 border-amber/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber to-amber-dark group-hover:h-3 transition-all duration-300"></div>

                                <CardHeader className="text-center pt-8 relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-20 h-20 bg-gradient-to-br from-amber to-amber-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl text-white"
                                    >
                                        <Zap className="w-10 h-10" />
                                    </motion.div>
                                    <CardTitle className="text-2xl font-bold text-amber group-hover:text-amber-dark transition-colors">
                                        Misi Kami
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="text-center relative z-10">
                                    <p className="text-charcoal-light leading-relaxed text-lg">
                                        Membangun bisnis dan aset produktif secara terpadu untuk memberikan
                                        manfaat dan pelayanan kepada Masyarakat, Bangsa dan Negara, dengan
                                        responsif, cepat tanggap dan penuh tanggung jawab.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Values Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <Card className="h-full card-hover bg-gradient-to-br from-teal/10 to-teal-dark/10 border-teal/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group overflow-hidden relative">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal to-teal-dark group-hover:h-3 transition-all duration-300"></div>

                                <CardHeader className="text-center pt-8 relative z-10">
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-20 h-20 bg-gradient-to-br from-teal to-teal-dark rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl text-white"
                                    >
                                        <Award className="w-10 h-10" />
                                    </motion.div>
                                    <CardTitle className="text-2xl font-bold text-teal group-hover:text-teal-dark transition-colors">
                                        Nilai Kami
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-teal mt-0.5 shrink-0" />
                                            <span className="text-charcoal-light leading-relaxed">Mematuhi peraturan perundang-undangan yang berlaku</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-teal mt-0.5 shrink-0" />
                                            <span className="text-charcoal-light leading-relaxed">Menerapkan kode etik berbisnis yang profesional</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-teal mt-0.5 shrink-0" />
                                            <span className="text-charcoal-light leading-relaxed">Mengembangkan SDM berkualitas dan profesional</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    {/* Company Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-6xl mx-auto mb-20"
                    >
                        <div className="glass rounded-3xl p-12 shadow-2xl border border-border/50 relative overflow-hidden">
                            <motion.div
                                animate={{ x: [-200, 200] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-navy/5 to-transparent"
                            />

                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <Building className="w-10 h-10 text-navy" />
                                    <h3 className="text-4xl font-black gradient-text">
                                        Company Profile
                                    </h3>
                                    <Building className="w-10 h-10 text-navy" />
                                </div>

                                <div className="space-y-6 text-charcoal-light leading-relaxed text-lg max-w-5xl mx-auto">
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <span className="text-3xl font-black gradient-text">PT. Karya Rizky Andrian</span> didirikan pada{" "}
                                        <span className="bg-navy/10 text-navy font-bold px-4 py-2 rounded-lg border border-navy/20">13 Juli 2021</span>,
                                        sebagai perusahaan swasta nasional yang bergerak di bidang{" "}
                                        <span className="font-bold text-amber bg-amber/10 px-3 py-1 rounded-lg">
                                            General Trading, Engineering Construction, Maintenance, Labor Supply,
                                            Electrical, Mechanical, Cleaning Service, Civil & Services
                                        </span>.
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        Kami adalah salah satu perusahaan swasta nasional yang didukung oleh{" "}
                                        <span className="bg-amber-accent text-amber-dark font-bold px-4 py-2 rounded-lg">sufficient financial</span>{" "}
                                        dan tenaga kerja berpengalaman. Tim kami terdiri dari sumber daya manusia
                                        yang andal, terampil, profesional, dan berpengalaman di bidangnya.
                                    </motion.p>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        Dengan komitmen untuk menjawab tantangan berat yang dihadapi di era
                                        persaingan globalisasi, kami terus mengembangkan kemampuan dan kualitas
                                        layanan untuk memberikan solusi terbaik bagi klien.
                                    </motion.p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Achievement Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-20"
                    >
                        {[
                            { value: "3+", label: "Years Experience", icon: <Calendar className="w-6 h-6" />, gradient: "from-navy to-navy-dark", bg: "from-navy/10 to-navy-dark/10" },
                            { value: "100+", label: "Projects Done", icon: <Building className="w-6 h-6" />, gradient: "from-amber to-amber-dark", bg: "from-amber/10 to-amber-dark/10" },
                            { value: "50+", label: "Expert Team", icon: <Users2 className="w-6 h-6" />, gradient: "from-teal to-teal-dark", bg: "from-teal/10 to-teal-dark/10" },
                            { value: "24/7", label: "Support", icon: <Shield className="w-6 h-6" />, gradient: "from-maroon to-maroon-dark", bg: "from-maroon/10 to-maroon-dark/10" }
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                                className={`bg-gradient-to-br ${stat.bg} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                            >
                                <div className="relative z-10 text-center">
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                                    >
                                        {stat.icon}
                                    </motion.div>
                                    <div className="text-4xl font-black text-charcoal mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-charcoal-light">
                                        {stat.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Professional Commitment */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Card className="bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white border-0 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-amber/20 to-teal/20 animate-pulse" />
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-amber to-teal" />

                            <CardContent className="py-16 relative z-10">
                                <div className="text-center max-w-5xl mx-auto">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center justify-center gap-4 mb-8"
                                    >
                                        <Shield className="w-10 h-10 text-amber" />
                                        <h3 className="text-4xl font-black gradient-text">
                                            Komitmen Profesional
                                        </h3>
                                        <Shield className="w-10 h-10 text-amber" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-xl text-gray-300 mb-12 leading-relaxed"
                                    >
                                        Dengan standar tinggi yang konsisten dan kualitas pekerjaan terbaik,
                                        kami berkomitmen mematuhi hukum dan peraturan keselamatan untuk menjaga
                                        kesehatan, keselamatan pekerja, dan kelancaran pekerjaan.
                                    </motion.p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { icon: <Globe className="w-8 h-8" />, title: "Standar Global", desc: "Mengikuti standar internasional dalam setiap pekerjaan", color: "from-navy to-navy-dark" },
                                            { icon: <Users2 className="w-8 h-8" />, title: "Tim Ahli", desc: "Tim yang andal, terampil, dan berpengalaman", color: "from-amber to-amber-dark" },
                                            { icon: <Shield className="w-8 h-8" />, title: "Keselamatan Utama", desc: "Mematuhi peraturan keselamatan kerja", color: "from-teal to-teal-dark" }
                                        ].map((item, index) => (
                                            <motion.div
                                                key={item.title}
                                                initial={{ y: 30, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="glass-navy rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                                            >
                                                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                                                    {item.icon}
                                                </div>
                                                <h4 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                                                    {item.title}
                                                </h4>
                                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}