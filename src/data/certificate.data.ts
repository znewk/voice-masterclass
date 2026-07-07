import type { Lang } from "@/data/event.data";

export const certificateDictionary = {
    ru: {
        navTitle: "Voice Masterclass",
        navSubtitle: "Astana Opera · 9 июля",

        badge: "Персональный сертификат",
        title: "Ваш сертификат участника",
        subtitle:
            "Спасибо за участие в мастер-классе по нарушениям голоса и глотания с профессором Dr. Kayhan Ozturk. Скачайте сертификат участника мероприятия.",

        certificateAlt: "Сертификат участника мастер-класса",

        download: "Скачать сертификат",
        openInNewTab: "Открыть в новой вкладке",

        footerNote:
            "Эта страница доступна только по прямой ссылке или QR-коду, выданному участникам мастер-класса.",
    },
    kz: {
        navTitle: "Voice Masterclass",
        navSubtitle: "Astana Opera · 9 шілде",

        badge: "Жеке сертификат",
        title: "Сіздің қатысушы сертификатыңыз",
        subtitle:
            "Профессор Dr. Kayhan Ozturk қатысуымен өткен дауыс және жұтыну бұзылыстары бойынша мастер-класқа қатысқаныңыз үшін рақмет. Қатысушы сертификатын жүктеп алыңыз.",

        certificateAlt: "Мастер-класс қатысушысының сертификаты",

        download: "Сертификатты жүктеу",
        openInNewTab: "Жаңа қойындыда ашу",

        footerNote:
            "Бұл бет тек мастер-класс қатысушыларына берілген тікелей сілтеме немесе QR-код арқылы қолжетімді.",
    },
    en: {
        navTitle: "Voice Masterclass",
        navSubtitle: "Astana Opera · July 9",

        badge: "Personal certificate",
        title: "Your participation certificate",
        subtitle:
            "Thank you for attending the Voice and Swallowing Disorders Masterclass with Professor Dr. Kayhan Ozturk. Download your certificate of participation below.",

        certificateAlt: "Masterclass participation certificate",

        download: "Download certificate",
        openInNewTab: "Open in a new tab",

        footerNote:
            "This page is only accessible via the direct link or QR code given to masterclass participants.",
    },
} as const satisfies Record<Lang, Record<string, string>>;
