"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ExternalLink, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { languages, type Lang } from "@/data/event.data";
import { certificateDictionary } from "@/data/certificate.data";

export default function CertificatePage() {
    const [lang, setLang] = useState<Lang>("ru");

    const t = certificateDictionary[lang];

    return (
        <main className="min-h-screen overflow-hidden bg-[#FAF8FF] text-slate-950">
            <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6D3AB2] text-lg font-black text-white">
                            V
                        </div>
                        <div>
                            <p className="text-sm font-bold leading-none text-slate-950">
                                {t.navTitle}
                            </p>
                            <p className="mt-1 text-xs text-slate-500">{t.navSubtitle}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                        {languages.map((item) => (
                            <button
                                key={item}
                                onClick={() => setLang(item)}
                                className={`rounded-full px-3.5 py-2 text-xs font-bold transition ${lang === item
                                    ? "bg-[#6D3AB2] text-white shadow-lg"
                                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-950"
                                    }`}
                            >
                                {item.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <section className="relative pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(109,58,178,0.18),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(236,72,153,0.14),transparent_36%)]" />

                <div className="relative mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        className="text-center"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#6D3AB2]/15 bg-white px-4 py-2 text-sm font-semibold text-[#6D3AB2] shadow-sm">
                            <ShieldCheck size={16} />
                            {t.badge}
                        </div>

                        <h1 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-slate-950 md:text-5xl md:leading-[1.05]">
                            {t.title}
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                            {t.subtitle}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="relative mx-auto mt-12 max-w-3xl"
                    >
                        <div className="absolute -inset-4 rounded-[44px] bg-[#6D3AB2]/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[40px] border border-white bg-white p-3 shadow-2xl">
                            <div className="relative aspect-[1280/904] w-full overflow-hidden rounded-[28px] bg-[#7A3FC0]">
                                <Image
                                    src="/certificate.jpg"
                                    alt={t.certificateAlt}
                                    fill
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="h-13 gap-2 rounded-full bg-[#6D3AB2] px-8 text-base font-bold text-white shadow-xl shadow-[#6D3AB2]/25 hover:bg-[#54288F]"
                        >
                            <a href="/certificate.jpg" download="voice-masterclass-certificate.jpg">
                                <Download size={20} />
                                {t.download}
                            </a>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-13 gap-2 rounded-full border-slate-200 bg-white px-8 text-base font-bold text-slate-950 shadow-sm hover:bg-slate-50"
                        >
                            <a href="/certificate.jpg" target="_blank" rel="noreferrer">
                                <ExternalLink size={18} />
                                {t.openInNewTab}
                            </a>
                        </Button>
                    </div>

                    <p className="mx-auto mt-10 max-w-xl text-center text-sm leading-6 text-slate-500">
                        {t.footerNote}
                    </p>
                </div>
            </section>

            <footer className="bg-[#20102F] px-5 py-10 text-center text-sm text-white/60">
                © 2026 Voice Masterclass · Astana Opera
            </footer>
        </main>
    );
}
