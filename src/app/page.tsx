"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    Languages,
    MapPin,
    MicVocal,
    Scissors,
    ShieldCheck,
    Stethoscope,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { RegisterModal } from "@/components/RegisterModal";
import { eventDictionary, languages, type Lang } from "@/data/event.data";

export default function Page() {
    const [lang, setLang] = useState<Lang>("ru");
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const t = eventDictionary[lang];

    const stats = [
        { icon: CalendarDays, label: t.dateLabel, value: t.dateValue },
        {
            icon: MapPin,
            label: t.venueLabel,
            value: t.venueValue,
            link: t.venueLink,
        },
        { icon: Languages, label: t.langLabel, value: t.langValue },
        { icon: Users, label: t.limitLabel, value: t.limitValue },
    ];

    const topics = [
        { icon: MicVocal, title: t.topic1, text: t.topic1Text },
        { icon: Stethoscope, title: t.topic2, text: t.topic2Text },
        { icon: GraduationCap, title: t.topic3, text: t.topic3Text },
        { icon: ShieldCheck, title: t.topic4, text: t.topic4Text },
    ];

    const professorPoints = [
        t.professorPoint1,
        t.professorPoint2,
        t.professorPoint3,
    ];

    const directions = [
        t.direction1,
        t.direction2,
        t.direction3,
        t.direction4,
        t.direction5,
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#FAF8FF] text-slate-950">
            <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur-2xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
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

                <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:px-8 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                    >
                        <div className="mb-6 inline-flex rounded-full border border-[#6D3AB2]/15 bg-white px-4 py-2 text-sm font-semibold text-[#6D3AB2] shadow-sm">
                            {t.badge}
                        </div>

                        <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl md:leading-[1.03]">
                            {t.title}
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                            {t.subtitle}
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <Button
                                size="lg"
                                onClick={() => setIsRegisterOpen(true)}
                                className="h-13 rounded-full bg-[#6D3AB2] px-8 text-base font-bold text-white shadow-xl shadow-[#6D3AB2]/25 hover:bg-[#54288F]"
                            >
                                {t.register}
                            </Button>

                            <a
                                href="#masterclass"
                                className="inline-flex h-13 items-center rounded-full border border-slate-200 bg-white px-8 text-base font-bold text-slate-950 shadow-sm transition hover:bg-slate-50"
                            >
                                {t.more}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.75 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-[44px] bg-[#6D3AB2]/20 blur-3xl" />
                        <div className="relative overflow-hidden rounded-[40px] border border-white bg-white p-3 shadow-2xl">
                            <div className="relative h-[520px] overflow-hidden rounded-[32px] bg-[#7A3FC0]">
                                <Image
                                    src="/doctor-main.jpg"
                                    alt="Dr. Kayhan Ozturk"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>

                        <div className="absolute -left-3 top-12 rounded-2xl bg-[#6D3AB2] px-5 py-4 text-white shadow-2xl md:-left-8">
                            <p className="text-xl font-black leading-tight">Dr. Kayhan</p>
                            <p className="text-xl font-black leading-tight">OZTURK</p>
                        </div>

                        <div className="absolute -right-3 bottom-16 max-w-[250px] rounded-2xl bg-[#6D3AB2] px-5 py-4 text-white shadow-2xl md:-right-8">
                            <p className="text-sm font-bold leading-5">{t.professorRole}</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 pb-12 md:grid-cols-4 md:px-8">
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.label}
                            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl shadow-purple-100/60 transition hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E8FF] text-[#6D3AB2]">
                                <Icon size={22} />
                            </div>
                            <p className="text-sm font-semibold text-slate-500">
                                {item.label}
                            </p>
                            {item.link ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-1 block text-xl font-black text-[#6D3AB2] underline underline-offset-4 hover:text-purple-800"
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p className="mt-1 text-xl font-black text-slate-950">
                                    {item.value}
                                </p>
                            )}
                        </div>
                    );
                })}
            </section>

            <section id="masterclass" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.95fr_1.05fr]">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6D3AB2]">
                            {t.mainLabel}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                            <span className="font-semibold text-slate-600">
                                {t.organizerLabel}:
                            </span>
                            <span className="font-medium text-slate-800">
                                {t.organizerName}
                            </span>
                        </div>
                        <p className="mt-6 text-lg leading-9 text-slate-600">
                            {t.mainText}
                        </p>

                        <Button
                            size="lg"
                            onClick={() => setIsRegisterOpen(true)}
                            className="mt-8 h-13 rounded-full bg-[#6D3AB2] px-8 text-base font-bold text-white hover:bg-[#54288F]"
                        >
                            {t.register}
                        </Button>
                    </div>

                    <div className="grid gap-4">
                        {topics.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#F1E8FF] text-[#6D3AB2] transition group-hover:bg-[#6D3AB2] group-hover:text-white">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-black text-slate-950">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-[0.92fr_1.08fr] md:px-8">
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[40px] bg-[#6D3AB2]/10 blur-2xl" />
                        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-100 p-3 shadow-2xl">
                            <div className="relative h-[480px] overflow-hidden rounded-[28px]">
                                <Image
                                    src="/doctor-portrait.jpg"
                                    alt="Dr. Kayhan Ozturk"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6D3AB2]">
                            {t.professorLabel}
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                            {t.professorName}
                        </h2>

                        <p className="mt-4 text-xl font-semibold text-[#6D3AB2]">
                            {t.professorRole}
                        </p>

                        <p className="mt-7 text-lg leading-8 text-slate-600">
                            {t.professorText}
                        </p>

                        <div className="mt-7 grid gap-3">
                            {professorPoints.map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-[#6D3AB2]" size={20} />
                                    <p className="font-semibold text-slate-800">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
                <div className="rounded-[36px] bg-[#20102F] p-6 text-white shadow-2xl md:p-10">
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-purple-200">
                        {t.extraLabel}
                    </p>

                    <div className="mt-4 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
                        <div>
                            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                                {t.extraTitle}
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-white/70">
                                {t.extraText}
                            </p>

                            <div className="mt-6 rounded-[26px] border border-white/10 bg-white/10 p-5 backdrop-blur">
                                <p className="text-sm font-black uppercase tracking-[0.22em] text-purple-200">
                                    {t.patientBoxLabel}
                                </p>

                                <p className="mt-3 text-lg font-semibold leading-7 text-white">
                                    {t.patientBoxTitle}
                                </p>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    {t.patientBoxText}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-3">
                                    <a
                                        href="https://wa.me/77075442552"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-[#6D3AB2] transition hover:bg-purple-50"
                                    >
                                        {t.whatsappButton}
                                    </a>

                                    <a
                                        href="tel:+77075442552"
                                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold text-white transition hover:bg-white/10"
                                    >
                                        {t.callButton}
                                    </a>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-white/60">
                                    {t.patientTimeNote}
                                </p>
                            </div>

                            <p className="mt-6 text-white/80">
                                <MapPin className="mr-2 inline" size={18} />
                                {t.clinicAddress}
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6D3AB2]">
                                    <Stethoscope size={22} />
                                </div>

                                <h3 className="text-3xl font-black">{t.day1Title}</h3>
                                <p className="mt-3 text-white/70">{t.day1Text}</p>

                                <p className="mt-5 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/80">
                                    {t.day1Note}
                                </p>
                            </div>

                            <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 backdrop-blur">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#6D3AB2]">
                                    <Scissors size={22} />
                                </div>

                                <h3 className="text-3xl font-black">{t.day2Title}</h3>
                                <p className="mt-3 text-white/70">{t.day2Text}</p>

                                <p className="mt-5 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/80">
                                    {t.day2Note}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-[28px] bg-white p-6 text-slate-950 md:p-8">
                        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#6D3AB2]">
                            {t.directionsLabel}
                        </p>

                        <div className="mt-6 grid gap-3 md:grid-cols-2">
                            {directions.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-start gap-3 rounded-2xl bg-[#FAF8FF] p-4"
                                >
                                    <CheckCircle2 className="mt-0.5 text-[#6D3AB2]" size={20} />
                                    <p className="font-semibold text-slate-800">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
                <div className="grid gap-6 rounded-[36px] bg-[#6D3AB2] p-8 text-white shadow-2xl md:grid-cols-[1fr_auto] md:items-center md:p-12">
                    <div>
                        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                            {t.ctaTitle}
                        </h2>
                        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
                            {t.ctaText}
                        </p>
                    </div>

                    <Button
                        size="lg"
                        onClick={() => setIsRegisterOpen(true)}
                        className="h-13 rounded-full bg-white px-8 text-base font-bold text-[#6D3AB2] hover:bg-purple-50"
                    >
                        {t.register}
                    </Button>
                </div>
            </section>

            <footer className="bg-[#20102F] px-5 py-10 text-center text-sm text-white/60">
                © 2026 Voice Masterclass · Astana Opera · {t.clinicTitle}
            </footer>

            <RegisterModal
                open={isRegisterOpen}
                lang={lang}
                onOpenChange={setIsRegisterOpen}
            />
        </main>
    );
}