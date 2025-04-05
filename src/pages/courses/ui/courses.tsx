import { Link } from "wouter-preact";

import { Accordion } from "@/shared";

const courses = [
  {
    id: "html-css-js",
    name: "HTML, CSS + JS",
    description:
      "Базовый курс для старта в веб-разработке. Научитесь верстать сайты, писать скрипты и понимать, как работает браузер.",
    link: "/course/html-css-js",
    bagde: "Для начинающих",
    duration: "2 месяца",
    price: 2990,
  },
  {
    id: "frontend-developer",
    name: "Frontend разработчик",
    description:
      "Полный путь от новичка до уверенного разработчика. React, TypeScript, API, сборка, тестирование — всё в одном курсе.",
    link: "/course/frontend-developer",
    duration: "4 месяца",
    price: 5990,
  },
  {
    id: "frontend-pro",
    name: "Frontend от Нуля до PRO",
    description:
      "Профессиональный курс для тех, кто хочет углубиться в архитектуру приложений, дизайн-системы, продвинутый React и производительность.",
    link: "/course/frontend-pro",
    bagde: "BESTSELLER",
    duration: "6 месяцев",
    price: 10990,
  },
];

const faq = [
  {
    question: "Как проходит обучение?",
    answer:
      "Вы получаете доступ к видеолекциям, практическим заданиям и интерактивным упражнениям. Поддержка осуществляется через чат и регулярные разборы с преподавателями. Все материалы доступны 24/7 — вы учитесь в удобном для себя ритме.",
  },
  {
    question: "Можно ли учиться без опыта?",
    answer:
      'Да, наши курсы подходят для абсолютных новичков. Курс "HTML, CSS + JS" специально создан как точка входа для тех, кто никогда не программировал. Мы шаг за шагом объясняем основы и помогаем освоиться в новой сфере.',
  },
  {
    question: "Сколько времени занимает обучение?",
    answer:
      "Длительность зависит от курса и вашего темпа. В среднем обучение занимает от 2 до 6 месяцев при занятиях 6–8 часов в неделю. Вы можете проходить курс быстрее или медленнее — график гибкий.",
  },
  {
    question: "Какой курс лучше выбрать?",
    answer:
      "Если вы хотите начать с нуля и дойти до уровня уверенного разработчика, рекомендуем курс «Frontend от Нуля до PRO». Он включает в себя весь материал из курсов «HTML, CSS + JS» и «Frontend разработчик», а также модули по архитектуре, работе с дизайном, построению карьеры и подготовке к собеседованиям.",
  },
  {
    question: "Что входит в стоимость курсов?",
    answer:
      "В стоимость входят доступ ко всем материалам курса, регулярные обновления, техническая поддержка, доступ в закрытое сообщество и сертификат о завершении курса. Никаких скрытых платежей — всё включено.",
  },
  {
    question: "Выдаёте ли вы сертификат?",
    answer:
      "Да, по окончании курса вы получаете именной сертификат, подтверждающий освоение программы. Сертификат можно добавить в портфолио или резюме.",
  },
  {
    question: "Помогаете ли с трудоустройством?",
    answer:
      "Да. В рамках курса «Frontend от Нуля до PRO» предусмотрен модуль по карьерному росту: составление резюме, создание GitHub-портфолио, тренировка собеседований и рекомендации в компании-партнёры.",
  },
];

export const Courses = () => {
  return (
    <>
      <section className="relative overflow-hidden pt-20">
        <div className="container space-y-6 py-6">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl font-bold text-gray-800">Курсы</h1>
            <p className="max-w-xl text-base text-gray-600">
              Мы создали для вас продуманные и практичные курсы по Frontend
              разработке — от основ до уровня профессионала.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((item) => (
              <Link
                key={item.name}
                href={`/course/${item.id}`}
                className="relative flex flex-col justify-between rounded-xl border p-4 font-sans shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {item.bagde && (
                  <span className="absolute -top-3 right-2 rounded-full bg-gray-800 px-2 py-1 text-xs font-semibold text-white">
                    {item.bagde}
                  </span>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl leading-none font-semibold">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{item.duration}</span>
                  <span className="text-lg font-bold text-gray-800">
                    {item.price} ₽
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="absolute -top-32 -right-32 size-64 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% blur-2xl"></div>
      </section>

      <section className="bg-white py-10">
        <div className="container space-y-4">
          <h2 className="text-3xl font-bold">Сравнение курсов</h2>
          <div className="overflow-x-auto rounded-xl border">
            <table className="min-w-full table-auto overflow-hidden rounded-xl border text-left shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-4 font-semibold">Темы</th>
                  <th className="border p-4 font-semibold">HTML, CSS + JS</th>
                  <th className="border p-4 font-semibold">
                    Frontend разработчик
                  </th>
                  <th className="border p-4 font-semibold">
                    Frontend от Нуля до PRO
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["HTML5, семантика, формы", true, false, true],
                  ["CSS (Flexbox, Grid, адаптивность)", true, false, true],
                  ["JavaScript (основы)", true, false, true],
                  [
                    "JavaScript (ES6+, async/await, промисы)",
                    false,
                    true,
                    true,
                  ],
                  ["Работа с DOM, события", true, false, true],
                  ["React (основы)", false, true, true],
                  [
                    "React (продвинутое использование хуков, оптимизация)",
                    false,
                    false,
                    true,
                  ],
                  ["Vue (основы)", false, true, true],
                  ["TailwindCSS", false, true, true],
                  ["TypeScript", false, true, true],
                  ["Тестирование", false, false, true],
                  ["CI/CD, GitHub Actions", false, false, true],
                  ["Архитектура (FSD, best practices)", false, false, true],
                  ["Создание дизайн-систем", false, false, true],
                  ["Проект + ревью", true, true, true],
                  ["Помощь с трудоустройством", false, false, true],
                ].map(([topic, basic, middle, pro], idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border p-4">{topic}</td>
                    <td className="border p-4 text-center">
                      {basic ? "✅" : ""}
                    </td>
                    <td className="border p-4 text-center">
                      {middle ? "✅" : ""}
                    </td>
                    <td className="border p-4 text-center">
                      {pro ? "✅" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden pb-20">
        <div className="z-10 container space-y-4 py-6">
          <h2 className="text-3xl font-bold text-gray-800">F.A.Q.</h2>
          <Accordion items={faq} />
        </div>
        <div className="absolute -bottom-32 -left-32 z-0 size-64 animate-spin rounded-full bg-linear-to-t bg-radial-[at_50%_75%] from-sky-500 via-blue-500 to-emerald-500 to-90% blur-2xl"></div>
      </section>
    </>
  );
};
