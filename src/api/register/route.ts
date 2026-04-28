import { NextResponse } from "next/server";
import { z } from "zod";

const RegisterSchema = z.object({
    fullName: z.string().trim().min(2, "Введите ФИО"),
    phone: z
        .string()
        .trim()
        .min(10, "Введите корректный телефон")
        .regex(/^[+\d\s()-]+$/, "Телефон должен содержать только цифры и символы + - ( )"),
    email: z
        .string()
        .trim()
        .optional()
        .transform((value) => value || "")
        .refine((value) => !value || z.string().email().safeParse(value).success, {
            message: "Введите корректный Email",
        }),
    organization: z.string().trim().optional().default(""),
    position: z.string().trim().optional().default(""),
    comment: z.string().trim().optional().default(""),
    lang: z.enum(["ru", "kz", "en"]).default("ru"),
    event: z.string().trim().optional().default("Masterclass Astana Opera 09.07.2026"),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const parsed = RegisterSchema.safeParse(body);

        if (!parsed.success) {
            return NextResponse.json(
                {
                    ok: false,
                    message: parsed.error.issues[0]?.message || "Некорректные данные формы",
                    errors: parsed.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

        if (!scriptUrl) {
            return NextResponse.json(
                {
                    ok: false,
                    message: "GOOGLE_SCRIPT_URL is not configured",
                },
                { status: 500 }
            );
        }

        const response = await fetch(scriptUrl, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(parsed.data),
        });

        const data = await response.json();

        if (!response.ok || !data.ok) {
            return NextResponse.json(
                {
                    ok: false,
                    message: data.message || "Google Script error",
                },
                { status: 400 }
            );
        }

        return NextResponse.json({
            ok: true,
            message: "Application saved",
        });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                message: error instanceof Error ? error.message : "Server error",
            },
            { status: 500 }
        );
    }
}