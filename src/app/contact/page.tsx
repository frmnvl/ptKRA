// src/app/contact/page.tsx - Contact Detail Page
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Mail, Phone, MapPin, Clock, Send, Building2,
    CheckCircle2, Star, Shield, Award, Users, Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('Pesan Anda telah dikirim! Tim kami akan menghubungi Anda dalam 24 jam.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: ''
        })
        setIsSubmitting(false)
    }

    const services = [
        "General Trading",
        "Engineering Construction",
        "Maintenance Services",
        "Labor Supply",
        "Electrical Services",
        "Mechanical Services",
        "Cleaning Services",
        "Civil & Services"
    ]

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Alamat Kantor",
            content: "Jakarta, Indonesia",
            subContent: "Lokasi strategis untuk pelayanan nasional",
            color: "text-navy",
            bgColor: "bg-navy/10"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Nomor Telepon",
            content: "+62 XXX-XXXX-XXXX",
            subContent: "Tersedia untuk panggilan emergency 24/7",
            color: "text-teal",
            bgColor: "bg-teal/10"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Address",
            content: "info@karyarizkyandrian.com",
            subContent: "Respon cepat dalam 24 jam",
            color: "text-amber",
            bgColor: "bg-amber/10"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Jam Operasional",
            content: "Sen - Jum: 08:00 - 17:00",
            subContent: "Sabtu: 08:00 - 12:00",
            color: "text-maroon",
            bgColor: "bg-maroon/10"
        }
    ]

    const whyChooseUs = [
        {
            icon: <Star className="w-8 h-8" />,
            title: "Respon Cepat",
            description: "Tim kami merespon dalam 24 jam dengan solusi terbaik",
            color: "from-navy to-navy-dark"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Konsultasi Gratis",
            description: "Konsultasi awal gratis untuk memahami kebutuhan Anda",
            color: "from-amber to-amber-dark"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Terpercaya",
            description: "Pengalaman 3+ tahun dengan track record yang solid",
            color: "from-teal to-teal-dark"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Tim Profesional",
            description: "Didukung tim ahli bersertifikat dan berpengalaman",
            color: "from-maroon to-maroon-dark"
        }
    ]

    return (
        <div className="min-h-screen pt-16 bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-navy/5 via-background to-teal/5 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-navy/10 rounded-full filter blur-xl"></div>
                    <div className="absolute bottom-20 right-10 w-64 h-64 bg-teal/10 rounded-full filter blur-xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Badge variant="outline" className="mb-6 border-navy text-navy bg-navy/10 px-4 py-2">
                            Hubungi Kami
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-charcoal">
                            Mari Diskusikan{" "}
                            <span className="gradient-text">Proyek Anda</span>
                        </h1>
                        <p className="text-lg md:text-xl text-charcoal-light leading-relaxed">
                            Tim ahli kami siap membantu mewujudkan visi industri Anda dengan
                            solusi yang tepat dan berkualitas tinggi
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                                Informasi Kontak
                            </h2>
                            <p className="text-lg text-charcoal-light">
                                Berbagai cara untuk menghubungi tim profesional kami
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="card-hover bg-white/95 border-border/50 group h-full text-center">
                                        <CardContent className="p-8">
                                            <div className={`w-16 h-16 rounded-2xl ${info.bgColor} flex items-center justify-center mx-auto mb-6 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                                                {info.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-navy transition-colors">
                                                {info.title}
                                            </h3>
                                            <p className="text-charcoal font-medium mb-2">
                                                {info.content}
                                            </p>
                                            <p className="text-sm text-charcoal-light">
                                                {info.subContent}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-gradient-to-br from-muted via-background to-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <Card className="card-hover bg-white/95 border-border/50 shadow-xl">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                                            <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                                                <Send className="w-5 h-5 text-navy" />
                                            </div>
                                            Kirim Pesan
                                        </CardTitle>
                                        <CardDescription className="text-base text-charcoal-light">
                                            Isi form di bawah untuk mendapatkan konsultasi gratis
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        Nama Lengkap *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                                                        placeholder="Masukkan nama lengkap"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                                                        placeholder="email@example.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        Nomor Telepon *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                                                        placeholder="+62 XXX-XXXX-XXXX"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-charcoal mb-2">
                                                        Nama Perusahaan
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                                                        placeholder="PT. Nama Perusahaan"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-charcoal mb-2">
                                                    Layanan yang Dibutuhkan *
                                                </label>
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors"
                                                >
                                                    <option value="">Pilih layanan</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                    <option value="Other">Lainnya</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-charcoal mb-2">
                                                    Pesan / Detail Proyek *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    rows={5}
                                                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy/50 focus:border-navy transition-colors resize-vertical"
                                                    placeholder="Ceritakan detail proyek atau kebutuhan Anda..."
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full btn-navy py-4 text-lg font-semibold"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                                        Mengirim...
                                                    </>
                                                ) : (
                                                    <>
                                                        <Send className="mr-2 h-5 w-5" />
                                                        Kirim Pesan
                                                    </>
                                                )}
                                            </Button>

                                            <p className="text-xs text-charcoal-light text-center">
                                                Dengan mengirim form ini, Anda menyetujui untuk dihubungi oleh tim kami
                                            </p>
                                        </form>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Why Choose Us */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold text-charcoal mb-6">
                                        Mengapa Memilih Kami?
                                    </h3>
                                    <div className="space-y-6">
                                        {whyChooseUs.map((item, index) => (
                                            <motion.div
                                                key={item.title}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="glass rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                        {item.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-charcoal mb-2 group-hover:text-navy transition-colors">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-charcoal-light leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="glass rounded-xl p-8">
                                    <h4 className="text-xl font-bold text-charcoal mb-6 text-center">
                                        Statistik Kepercayaan
                                    </h4>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-navy mb-2">100%</div>
                                            <div className="text-sm text-charcoal-light">Kepuasan Klien</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-amber mb-2">24h</div>
                                            <div className="text-sm text-charcoal-light">Respon Time</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-teal mb-2">3+</div>
                                            <div className="text-sm text-charcoal-light">Tahun Pengalaman</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-maroon mb-2">50+</div>
                                            <div className="text-sm text-charcoal-light">Tim Profesional</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Emergency Contact */}
                                <Card className="bg-gradient-to-br from-amber/10 to-amber-dark/10 border-amber/20">
                                    <CardContent className="p-6">
                                        <h4 className="text-lg font-bold text-amber mb-3 flex items-center gap-2">
                                            <Phone className="w-5 h-5" />
                                            Emergency Contact
                                        </h4>
                                        <p className="text-charcoal-light mb-4">
                                            Untuk kebutuhan emergency atau urgent, hubungi hotline kami:
                                        </p>
                                        <div className="bg-white/80 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-charcoal">+62 XXX-XXXX-XXXX</div>
                                            <div className="text-sm text-charcoal-light">24/7 Emergency Hotline</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
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
                                Konsultasi Gratis Sekarang
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Jangan ragu untuk berkonsultasi dengan tim ahli kami.
                                Kami siap memberikan solusi terbaik untuk kebutuhan industri Anda.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-6 glass rounded-xl border border-white/10">
                                    <Target className="w-8 h-8 text-navy-light mx-auto mb-3" />
                                    <h4 className="font-semibold mb-2">Analisis Kebutuhan</h4>
                                    <p className="text-sm text-gray-400">Assessment mendalam untuk solusi optimal</p>
                                </div>
                                <div className="text-center p-6 glass rounded-xl border border-white/10">
                                    <Building2 className="w-8 h-8 text-amber mx-auto mb-3" />
                                    <h4 className="font-semibold mb-2">Proposal Detail</h4>
                                    <p className="text-sm text-gray-400">Proposal lengkap dengan timeline dan budget</p>
                                </div>
                                <div className="text-center p-6 glass rounded-xl border border-white/10">
                                    <CheckCircle2 className="w-8 h-8 text-teal mx-auto mb-3" />
                                    <h4 className="font-semibold mb-2">Eksekusi Profesional</h4>
                                    <p className="text-sm text-gray-400">Implementasi dengan standar kualitas tinggi</p>
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