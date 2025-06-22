// src/components/sections/ContactSection.tsx
"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
    Mail, Phone, MapPin, Clock,
    ArrowRight, CheckCircle2, Star, Shield, Award,
    Users, Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function ContactSection() {
    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 relative bg-gradient-to-br from-background via-muted/30 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="mb-4 border-navy text-navy bg-navy/10 hover:bg-navy/15 transition-colors">
                            Hubungi Kami
                        </Badge>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-charcoal">
                            Mari Membangun Bersama
                        </h2>
                        <p className="text-lg text-charcoal-light max-w-2xl mx-auto">
                            Siap memulai proyek Anda? Hubungi tim ahli kami untuk konsultasi dan penawaran terbaik
                        </p>
                        <Separator className="w-24 mx-auto mt-4 bg-navy/60" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-warm border-border/50 shadow-lg card-hover">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                                        <div className="w-8 h-8 bg-navy/10 rounded-lg flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-navy" />
                                        </div>
                                        Kontak Informasi
                                    </CardTitle>
                                    <CardDescription className="text-base text-charcoal-light">
                                        Kami siap membantu dengan kebutuhan industri Anda
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Office Location */}
                                    <div className="flex items-start gap-4 p-6 glass rounded-xl hover:shadow-md transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center shrink-0 group-hover:bg-navy/15 transition-colors">
                                            <MapPin className="w-6 h-6 text-navy" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-base text-charcoal">Lokasi Kantor</h4>
                                            <p className="text-sm text-charcoal-light">
                                                Jakarta, Indonesia<br />
                                                <span className="text-xs">Lokasi strategis untuk layanan nasional</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="flex items-start gap-4 p-6 glass rounded-xl hover:shadow-md transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/15 transition-colors">
                                            <Phone className="w-6 h-6 text-teal" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-base text-charcoal">Nomor Telepon</h4>
                                            <p className="text-sm text-charcoal-light">
                                                +62 XXX-XXXX-XXXX<br />
                                                <span className="text-xs">Tersedia untuk panggilan emergency</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email Address */}
                                    <div className="flex items-start gap-4 p-6 glass rounded-xl hover:shadow-md transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/15 transition-colors">
                                            <Mail className="w-6 h-6 text-amber" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-base text-charcoal">Alamat Email</h4>
                                            <p className="text-sm text-charcoal-light">
                                                info@karyarizkyandrian.com<br />
                                                <span className="text-xs">Respon cepat dalam 24 jam</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start gap-4 p-6 glass rounded-xl hover:shadow-md transition-all duration-300 group">
                                        <div className="w-12 h-12 rounded-xl bg-maroon/10 flex items-center justify-center shrink-0 group-hover:bg-maroon/15 transition-colors">
                                            <Clock className="w-6 h-6 text-maroon" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-1 text-base text-charcoal">Jam Operasional</h4>
                                            <p className="text-sm text-charcoal-light">
                                                <strong>Sen - Jum:</strong> 08:00 - 17:00<br />
                                                <strong>Sabtu:</strong> 08:00 - 12:00<br />
                                                <span className="text-xs text-teal">24/7 Emergency Support Tersedia</span>
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Project CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full bg-gradient-to-br from-navy/5 to-teal/5 border-border/50 shadow-lg card-hover">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-charcoal flex items-center gap-3">
                                        <div className="w-8 h-8 bg-teal/10 rounded-lg flex items-center justify-center">
                                            <ArrowRight className="w-5 h-5 text-teal" />
                                        </div>
                                        Mulai Proyek Anda
                                    </CardTitle>
                                    <CardDescription className="text-base text-charcoal-light">
                                        Mari wujudkan tujuan industri Anda bersama kami
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {/* Why Choose Us */}
                                        <div className="glass rounded-xl p-6 bg-white/80">
                                            <h4 className="font-semibold mb-4 text-base text-charcoal flex items-center gap-2">
                                                <Star className="w-5 h-5 text-amber" />
                                                Mengapa Memilih Kami?
                                            </h4>
                                            <ul className="space-y-3 text-sm text-charcoal-light">
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-teal rounded-full shrink-0"></div>
                                                    <span>Tim profesional & berpengalaman lebih dari 3 tahun</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-amber rounded-full shrink-0"></div>
                                                    <span>Standar kualitas tinggi dengan sertifikasi</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-navy rounded-full shrink-0"></div>
                                                    <span>Harga kompetitif dengan value terbaik</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-maroon rounded-full shrink-0"></div>
                                                    <span>Penyelesaian tepat waktu dengan garansi kualitas</span>
                                                </li>
                                                <li className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-teal rounded-full shrink-0"></div>
                                                    <span>Mematuhi regulasi keselamatan kerja terkini</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* CTA Buttons */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/contact" className="flex-1">
                                                <Button className="w-full btn-navy group text-base">
                                                    Minta Penawaran
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>
                                            <Button variant="outline" className="flex-1 btn-ghost-navy text-base">
                                                <Phone className="mr-2 h-4 w-4" />
                                                Hubungi Sekarang
                                            </Button>
                                        </div>

                                        {/* Company Commitment */}
                                        <div className="glass-navy rounded-xl p-6">
                                            <h4 className="font-semibold mb-3 text-center text-base text-navy flex items-center justify-center gap-2">
                                                <CheckCircle2 className="w-5 h-5" />
                                                Komitmen Kami
                                            </h4>
                                            <p className="text-sm text-charcoal-light text-center leading-relaxed">
                                                Didukung oleh <span className="text-amber font-semibold">sufficient financial</span> dan
                                                tenaga kerja berpengalaman untuk memberikan layanan terbaik dengan
                                                standar konsisten dan kualitas tinggi. Setiap proyek dikerjakan dengan
                                                dedikasi penuh untuk mencapai kepuasan maksimal klien.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Trust Badges */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                <div className="text-center glass rounded-xl p-4">
                                    <div className="text-2xl font-bold text-navy">100%</div>
                                    <div className="text-xs text-charcoal-light">Kepuasan Klien</div>
                                </div>
                                <div className="text-center glass rounded-xl p-4">
                                    <div className="text-2xl font-bold text-amber">24/7</div>
                                    <div className="text-xs text-charcoal-light">Emergency Support</div>
                                </div>
                                <div className="text-center glass rounded-xl p-4">
                                    <div className="text-2xl font-bold text-teal">3+</div>
                                    <div className="text-xs text-charcoal-light">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Additional Company Excellence */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        <Card className="bg-gradient-to-br from-charcoal via-charcoal-dark to-charcoal text-white border-0 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-navy/20 via-amber/20 to-teal/20 animate-pulse" />
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy via-amber to-teal" />

                            <CardContent className="py-12 relative z-10">
                                <div className="text-center max-w-4xl mx-auto">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className="flex items-center justify-center gap-4 mb-8"
                                    >
                                        <Award className="w-10 h-10 text-amber" />
                                        <h3 className="text-3xl font-black gradient-text">
                                            Kepercayaan & Kualitas
                                        </h3>
                                        <Award className="w-10 h-10 text-amber" />
                                    </motion.div>

                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="text-xl text-gray-300 mb-12 leading-relaxed"
                                    >
                                        PT. Karya Rizky Andrian memiliki portofolio klien yang luar biasa dengan standar tinggi
                                        yang konsisten dan kualitas pekerjaan terbaik.
                                    </motion.p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {[
                                            { icon: <Shield className="w-8 h-8" />, title: "Keamanan Terjamin", desc: "Mematuhi semua regulasi keselamatan kerja", color: "from-teal to-teal-dark" },
                                            { icon: <Users className="w-8 h-8" />, title: "Tim Berpengalaman", desc: "SDM yang andal, terampil, dan profesional", color: "from-amber to-amber-dark" },
                                            { icon: <Target className="w-8 h-8" />, title: "Hasil Maksimal", desc: "Fokus pada kepuasan dan hasil terbaik", color: "from-navy to-navy-dark" }
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