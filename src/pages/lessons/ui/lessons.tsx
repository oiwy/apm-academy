import { useState } from "preact/hooks";
import { useLocation } from "wouter-preact";

const mockLessons = [
  {
    title: "Введение в HTML",
    videos: [
      { title: "Что такое HTML", id: "html-intro" },
      { title: "Базовая структура страницы", id: "html-structure" },
    ],
  },
  {
    title: "Основы CSS",
    videos: [
      { title: "Селекторы и свойства", id: "css-selectors" },
      { title: "Flexbox и Grid", id: "css-layout" },
    ],
  },
  {
    title: "JavaScript для начинающих",
    videos: [
      { title: "Переменные и типы данных", id: "js-variables" },
      { title: "Функции и события", id: "js-functions" },
    ],
  },
];

export const Lessons = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [, setLocation] = useLocation();

  const handleOpenLesson = (id: string) => {
    setLocation(`/lessons`);
  };

  return (
    <section className="py-20">
      <div className="container flex min-h-[calc(100vh-160px)] flex-col items-center justify-center space-y-6">
        <h1 className="text-center text-3xl font-bold">Курс: HTML, CSS + JS</h1>

        {mockLessons.map((lesson, index) => (
          <div
            className="bg-base-200 rounded-box w-full shadow"
            key={index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <div className="flex cursor-pointer items-center justify-between p-4">
              <h2 className="text-xl font-semibold">{lesson.title}</h2>
            </div>

            {openIndex === index && (
              <div className="grid grid-cols-2 gap-4 overflow-y-auto p-4 lg:grid-cols-3 xl:grid-cols-4">
                {lesson.videos.map((video, idx) => (
                  <div
                    key={idx}
                    className="bg-base-100 hover:bg-base-300 cursor-pointer rounded p-3 shadow"
                    onClick={() => handleOpenLesson(video.id)}
                  >
                    <div className="text-md font-semibold">{video.title}</div>
                    <div className="mt-2 flex h-48 w-full items-center justify-center rounded bg-gray-300 text-center text-sm text-gray-600">
                      Превью видео (мок)
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
