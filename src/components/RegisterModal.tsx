"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Mail, Phone, Send, UserRound } from "lucide-react";

import type { Lang } from "@/data/event.data";
import { eventDictionary } from "@/data/event.data";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
    open: boolean;
    lang: Lang;
    onOpenChange: (open: boolean) => void;
};

type FormState = {
    fullName: string;
    phone: string;
    email: string;
    organization: string;
    position: string;
    comment: string;
};

const initialForm: FormState = {
    fullName: "",
    phone: "",
    email: "",
    organization: "",
    position: "",
    comment: "",
};

export const RegisterModal = ({ open, lang, onOpenChange }: Props) => {
    const t = eventDictionary[lang];

    const [form, setForm] = useState<FormState>(initialForm);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
        setError("");
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError("");
        if (form.fullName.trim().length < 3) {
            setError(t.validationFullName);
            setLoading(false);
            return;
        }

        if (form.comment.trim().length < 3) {
            setError(t.validationComment);
            setLoading(false);
            return;
        }

        if (form.organization.trim().length < 3) {
            setError(t.validationOrganization);
            setLoading(false);
            return;
        }

        if (form.position.trim().length < 3) {
            setError(t.validationPosition);
            setLoading(false);
            return;
        }

        const phoneDigits = form.phone.replace(/\D/g, "");
        if (phoneDigits.length < 10) {
            setError(t.validationPhone);
            setLoading(false);
            return;
        }

        if (Date.now() - openedAt < 3000) {
            setError(t.validationTooFast);
            setLoading(false);
            return;
        }

        if (!isHuman) {
            setError(t.validationCaptcha);
            setLoading(false);
            return;
        }
        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbyQBQ4Z-_8JLr8dhTptYbD22t4crGvVSUJNMlufJyQGMLQ-v_IvC1Cx0R1ClabFONDdaQ/exec",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8",
                    },
                    body: JSON.stringify({
                        ...form,
                        lang,
                        event: "Masterclass Astana Opera 09.07.2026",
                    }),
                }
            );

            const data = await response.json();

            if (!data.ok) {
                throw new Error(data.message || t.errorText);
            }

            if (data.registrationClosed) {
                setError(data.message || t.registrationClosedText);
                setForm(initialForm);
                return;
            }

            setSuccess(true);
            setForm(initialForm);

            // 🔥 можно сохранить количество
            console.log("Зарегистрировано:", data.count);

        } catch (err) {
            setError(err instanceof Error ? err.message : t.errorText);
        } finally {
            setLoading(false);
        }
    };

    const [isHuman, setIsHuman] = useState(false);
    const [openedAt, setOpenedAt] = useState(Date.now());

    return (
        <Dialog
            open={open}
            onOpenChange={(value) => {
                onOpenChange(value);

                if (value) {
                    setOpenedAt(Date.now()); // фиксируем время открытия
                }

                if (!value) {
                    setTimeout(() => {
                        setSuccess(false);
                        setError("");
                        setIsHuman(false);
                    }, 250);
                }
            }}
        >
            <DialogContent className="overflow-hidden border-0 bg-transparent p-0 shadow-none sm:max-w-[620px]">
                <div className="relative overflow-hidden rounded-[36px] border border-white/70 bg-white shadow-2xl">
                    <div className="absolute inset-x-0 top-0 h-36 bg-[radial-gradient(circle_at_20%_10%,rgba(109,58,178,0.22),transparent_38%),radial-gradient(circle_at_90%_0%,rgba(236,72,153,0.16),transparent_34%)]" />

                    <div className="relative p-6 md:p-8">
                        <DialogHeader>
                            <div className="mb-4 inline-flex w-fit rounded-full border border-[#6D3AB2]/15 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6D3AB2] shadow-sm">
                                {t.formBadge}
                            </div>

                            <DialogTitle className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                                {success ? t.successTitle : t.formTitle}
                            </DialogTitle>

                            <DialogDescription className="pt-2 text-base leading-7 text-slate-500">
                                {success ? t.successText : t.formDescription}
                            </DialogDescription>
                        </DialogHeader>

                        {success ? (
                            <div className="mt-8 rounded-[28px] bg-[#FAF8FF] p-6">
                                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#6D3AB2] text-white">
                                    <CheckCircle2 size={30} />
                                </div>

                                <p className="mt-5 text-lg font-semibold leading-8 text-slate-700">
                                    {t.successText}
                                </p>

                                <Button
                                    type="button"
                                    onClick={() => onOpenChange(false)}
                                    className="mt-6 h-12 rounded-2xl bg-[#6D3AB2] px-6 text-white hover:bg-[#54288F]"
                                >
                                    OK
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="relative">
                                        <UserRound
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        />
                                        <Input
                                            required
                                            value={form.fullName}
                                            onChange={(e) => handleChange("fullName", e.target.value)}
                                            className="h-13 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-base"
                                            placeholder={t.fullName}
                                        />
                                    </div>

                                    <div className="relative">
                                        <Phone
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        />
                                        <Input
                                            required
                                            value={form.phone}
                                            onChange={(e) => handleChange("phone", e.target.value)}
                                            className="h-13 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-base"
                                            placeholder={t.phone}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                    />
                                    <Input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => handleChange("email", e.target.value)}
                                        className="h-13 rounded-2xl border-slate-200 bg-slate-50 pl-11 text-base"
                                        placeholder={t.email}
                                    />
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <Input
                                        value={form.organization}
                                        onChange={(e) => handleChange("organization", e.target.value)}
                                        className="h-13 rounded-2xl border-slate-200 bg-slate-50 text-base"
                                        placeholder={t.organization}
                                    />

                                    <Input
                                        value={form.position}
                                        onChange={(e) => handleChange("position", e.target.value)}
                                        className="h-13 rounded-2xl border-slate-200 bg-slate-50 text-base"
                                        placeholder={t.position}
                                    />
                                </div>
                                <input
                                    type="text"
                                    style={{ display: "none" }}
                                    value={form.position}
                                    onChange={() => { }}
                                />
                                <Textarea
                                    value={form.comment}
                                    onChange={(e) => handleChange("comment", e.target.value)}
                                    className="min-h-28 resize-none rounded-2xl border-slate-200 bg-slate-50 text-base"
                                    placeholder={t.comment}
                                />
                                <label className="mt-2 flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                                    <input
                                        type="checkbox"
                                        checked={isHuman}
                                        onChange={(e) => setIsHuman(e.target.checked)}
                                        className="h-4 w-4 accent-[#6D3AB2]"
                                    />
                                    {t.captchaLabel}
                                </label>

                                {error && (
                                    <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                                        {error}
                                    </div>
                                )}

                                <Button
                                    disabled={loading}
                                    type="submit"
                                    className="mt-2 h-13 rounded-2xl bg-[#6D3AB2] text-base font-bold text-white shadow-xl shadow-[#6D3AB2]/20 hover:bg-[#54288F]"
                                >
                                    <Send size={18} className="mr-2" />
                                    {loading ? t.submitLoading : t.submit}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};