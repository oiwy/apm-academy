import { motion } from "framer-motion";
import { Link } from "wouter-preact";

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
    content: [
      "Знакомство с HTML5: структура, семантика, теги",
      "Работа с текстом, изображениями, ссылками и формами",
      "Основы CSS: селекторы, свойства, каскад, наследование",
      "Адаптивная и кроссбраузерная вёрстка (media queries, mobile-first)",
      "Flexbox и CSS Grid на практике",
      "БЭМ и организация CSS-структуры",
      "Введение в JavaScript: переменные, типы данных, операторы",
      "Функции, условия, циклы, массивы и объекты",
      "Работа с DOM: селекторы, события, динамическое обновление элементов",
      "Мини-проект: одностраничный сайт с формой и интерактивом",
    ],
  },
  {
    id: "frontend-developer",
    name: "Frontend разработчик",
    description:
      "Полный путь от новичка до уверенного разработчика. React, TypeScript, API, сборка, тестирование — всё в одном курсе.",
    link: "/course/frontend-developer",
    duration: "4 месяца",
    price: 5990,
    content: [
      "Современный JavaScript (ES6+): модули, стрелочные функции, промисы, async/await",
      "React: компоненты, состояние, props, хуки",
      "React Router, состояние между страницами, простое API-приложение",
      "Vue: реактивность, шаблоны, компоненты, сравнение с React",
      "TailwindCSS и SCSS: стилизация проектов, utility-first подход",
      "Vite/Webpack: настройка сборки, подключение CSS/SCSS, оптимизация",
      "TypeScript для фронтенда: типы, интерфейсы, типизация компонентов",
      "Проектирование компонентной архитектуры",
      "Итоговый проект: интернет-магазин с API и фильтрацией",
    ],
  },
  {
    id: "frontend-pro",
    name: "Frontend от Нуля до PRO",
    description:
      "Профессиональный курс для тех, кто хочет углубиться в архитектуру приложений, дизайн-системы, продвинутый React и производительность.",
    link: "/course/frontend-pro",
    bagde: "BESTSELLER",
    duration: "6 месяцев",
    price: 9990,
    content: [
      "HTML5, семантика, современная вёрстка",
      "CSS Grid, Flexbox, адаптивность, препроцессоры (SCSS)",
      "JavaScript (ES6+): углублённо — замыкания, this, классы",
      "Работа с DOM, событиями, рендеринг интерфейсов",
      "React: глубокое понимание хуков, контекста, оптимизации, мемоизации",
      "Vue: состояние, компоненты, экосистема",
      "TailwindCSS: кастомизация, работа с темами",
      "TypeScript: строгая типизация, дженерики, продвинутые шаблоны",
      "Сборка проектов: Vite, Webpack, настройка продакшен-сборки",
      "Тестирование: unit, e2e, тестирование компонентов и API",
      "Работа с CI/CD: автосборка, деплой через GitHub Actions или Vercel",
      "Разработка дизайн-систем: UI-кит, токены, документация",
      "Оптимизация производительности: lazy loading, code splitting, SSR/SSG",
      "Архитектура и best practices: feature-sliced design, SOLID, REST",
      "Ревью кода, паттерны и антипаттерны",
      "Помощь в трудоустройстве: резюме, GitHub, собеседования, стратегия",
    ],
  },
];

export const Course = ({ params }: { params: { id: string } }) => {
  const course = courses.find((course: any) => course.id === params.id);

  if (!course) {
    return (
      <section className="h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-tr from-sky-500 via-blue-500 to-emerald-500 bg-clip-text text-6xl font-extrabold text-transparent"
          >
            Курс не найден
          </motion.h1>
          <p className="text-lg text-gray-600">
            Извините, мы не нашли курс с таким идентификатором.
          </p>
          <Link
            className="rounded-xl bg-blue-500 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-600"
            href="/"
          >
            Вернуться на главную
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-base-100 relative">
        <div className="container mx-auto flex h-screen flex-col items-center justify-center gap-y-2 px-4 text-center lg:max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary text-6xl font-extrabold"
          >
            {course.name}
          </motion.h1>
          <p className="text-neutral-content text-lg">{course.description}</p>
          <div className="text-neutral-content flex flex-col items-center gap-1">
            <p>
              <strong>Длительность:</strong> {course.duration}
            </p>
            {course.bagde && (
              <p className="mt-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                🎯 {course.bagde}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Что будет на курсе */}
      <section className="py-12">
        <div className="container mx-auto space-y-4">
          <h2 className="text-base-content text-4xl font-semibold">
            Программа курса
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {course.content.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="rounded-xl border p-4 shadow transition duration-300"
              >
                <span className="text-base-content">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Почему мы? */}
      {/* <section>
        <div className="container p-12"></div>
      </section> */}

      {/* CTA Купить */}
      <section className="bg-base-100">
        <div className="text-base-content container flex h-screen flex-col items-center justify-center space-y-5 py-12 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Присоединяйтесь к курсу</h2>
            <p className="">
              Начните обучение уже сегодня. Доступ откроется сразу после оплаты.
            </p>
          </div>
          <div className="text-primary text-5xl font-extrabold">
            {course.price} ₽
          </div>
          <Link
            className="bg-base-content hover:bg-base-content/80 text-primary rounded-xl px-8 py-3 font-semibold transition duration-300"
            href={`/checkout/${course.id}`}
          >
            Купить курс
          </Link>
          <p className="text-sm text-gray-200">
            Возврат возможен в течение 14 дней
          </p>
        </div>
      </section>
    </>
  );
};
