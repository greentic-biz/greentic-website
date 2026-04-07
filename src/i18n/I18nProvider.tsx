import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import enTranslations from "./en.json";

type Translations = typeof enTranslations;

interface I18nContextType {
  locale: string;
  setLocale: (locale: string) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  setLocale: () => {},
  t: enTranslations,
});

export const useI18n = () => useContext(I18nContext);

const SUPPORTED_LOCALES = [
  "en", "ar", "ay", "bg", "bn", "cs", "da", "de", "el", "es", "et", "fa", "fi", "fr",
  "gn", "gu", "hi", "hr", "ht", "hu", "id", "it", "ja", "km", "kn", "ko", "lo",
  "lt", "lv", "ml", "mr", "ms", "my", "nah", "ne", "nl", "no", "pa", "pl",
  "pt", "qu", "ro", "ru", "si", "sk", "sr", "sv", "ta", "te", "th", "tl",
  "tr", "uk", "ur", "vi", "zh",
];

const LOCALE_NAMES: Record<string, string> = {
  en: "English", ar: "العربية", ay: "Aymar", bg: "Български", bn: "বাংলা",
  cs: "Čeština", da: "Dansk", de: "Deutsch", el: "Ελληνικά", es: "Español",
  et: "Eesti", fa: "فارسی", fi: "Suomi", fr: "Français", gn: "Guaraní",
  gu: "ગુજરાતી", hi: "हिन्दी", hr: "Hrvatski", ht: "Kreyòl", hu: "Magyar",
  id: "Bahasa Indonesia", it: "Italiano", ja: "日本語", km: "ខ្មែរ", kn: "ಕನ್ನಡ",
  ko: "한국어", lo: "ລາວ", lt: "Lietuvių", lv: "Latviešu", ml: "മലയാളം",
  mr: "मराठी", ms: "Bahasa Melayu", my: "မြန်မာ", nah: "Nāhuatl", ne: "नेपाली",
  nl: "Nederlands", no: "Norsk", pa: "ਪੰਜਾਬੀ", pl: "Polski", pt: "Português",
  qu: "Quechua", ro: "Română", ru: "Русский", si: "සිංහල", sk: "Slovenčina",
  sr: "Српски", sv: "Svenska", ta: "தமிழ்", te: "తెలుగు", th: "ไทย",
  tl: "Tagalog", tr: "Türkçe", uk: "Українська", ur: "اردو", vi: "Tiếng Việt",
  zh: "中文",
};

const RTL_LOCALES = ["ar", "fa", "ur"];

export { SUPPORTED_LOCALES, LOCALE_NAMES, RTL_LOCALES };

// Cache loaded translations
const translationCache: Record<string, Translations> = { en: enTranslations };

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState(() => {
    const saved = localStorage.getItem("locale");
    return saved && SUPPORTED_LOCALES.includes(saved) ? saved : "en";
  });
  const [translations, setTranslations] = useState<Translations>(enTranslations);

  const loadTranslations = useCallback(async (loc: string) => {
    if (loc === "en") {
      setTranslations(enTranslations);
      return;
    }
    if (translationCache[loc]) {
      setTranslations(translationCache[loc]);
      return;
    }
    try {
      const module = await import(`./${loc}.json`);
      translationCache[loc] = module.default;
      setTranslations(module.default);
    } catch {
      // Fallback to English
      setTranslations(enTranslations);
    }
  }, []);

  const setLocale = useCallback((loc: string) => {
    setLocaleState(loc);
    localStorage.setItem("locale", loc);
  }, []);

  useEffect(() => {
    loadTranslations(locale);
    // Set dir attribute for RTL languages
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, loadTranslations]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations }}>
      {children}
    </I18nContext.Provider>
  );
};
