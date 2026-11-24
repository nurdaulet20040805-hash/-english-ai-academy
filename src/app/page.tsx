"use client";

import { useState } from "react";

const text = {
  kk: {
    title: "Ағылшын тілін ойнап үйрен!",
    subtitle: "8–12 жас аралығындағы балаларға арналған тегін платформа. Әр баланың деңгейіне сай сабақтар.",
    start: "Бастау",
    levelsTitle: "Деңгейлер",
    levels: [
      { name: "Pre-A1", desc: "Бастаушы: әріптер мен алғашқы сөздер", color: "" },
      { name: "A1", desc: "Қарапайым сөйлемдер мен грамматика", color: "green" },
      { name: "A2", desc: "Қысқа мәтіндер жазу мен сөйлесу", color: "orange" },
    ],
    topicsTitle: "Тақырыптар",
    topics: ["Әріптер мен дыбыстар", "Сандар мен түстер", "Менің отбасым", "Жануарлар", "Менің мектебім", "Тағам мен сусын", "Менің денем", "Күн тәртібім", "Менің үйім", "Хобби мен спорт"],
    footer: "English AI Academy — Қазақстандағы балаларға арналған тегін ағылшын тілі платформасы.",
  },
  ru: {
    title: "Учи английский играя!",
    subtitle: "Бесплатная платформа для детей 8–12 лет. Уроки под уровень каждого ребёнка.",
    start: "Начать",
    levelsTitle: "Уровни",
    levels: [
      { name: "Pre-A1", desc: "Начинающий: буквы и первые слова", color: "" },
      { name: "A1", desc: "Простые предложения и грамматика", color: "green" },
      { name: "A2", desc: "Короткие тексты и разговор", color: "orange" },
    ],
    topicsTitle: "Темы",
    topics: ["Алфавит и звуки", "Числа и цвета", "Моя семья", "Животные", "Моя школа", "Еда и напитки", "Моё тело", "Мой распорядок дня", "Мой дом", "Хобби и спорт"],
    footer: "English AI Academy — бесплатная платформа английского языка для детей Казахстана.",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"kk" | "ru">("kk");
  const t = text[lang];

  return (
    <main>
      <header className="header">
        <div className="container header-row">
          <div className="logo">English AI Academy</div>
          <div className="lang">
            <button className={lang === "kk" ? "active" : ""} onClick={() => setLang("kk")}>ҚАЗ</button>
            <button className={lang === "ru" ? "active" : ""} onClick={() => setLang("ru")}>РУС</button>
          </div>
        </div>
      </header>

      <section className="hero container">
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
        <button className="btn">{t.start}</button>
      </section>

      <section className="container">
        <h2 className="section-title">{t.levelsTitle}</h2>
        <div className="grid">
          {t.levels.map((l) => (
            <div key={l.name} className={"card " + l.color}>
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">{t.topicsTitle}</h2>
        <div className="grid">
          {t.topics.map((topic) => (
            <div key={topic} className="card topic">{topic}</div>
          ))}
        </div>
      </section>

      <footer className="footer container">{t.footer}</footer>
    </main>
  );
}
