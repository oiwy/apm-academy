import { useEffect, useState } from "preact/hooks";
import { motion } from "framer-motion";
import { Link } from "wouter-preact";

const glitchChars = ["@", "#", "$", "%", "&", "*", "!", "?", "+", "=", "~"];

export const useGlitchTypewriterLoop = (
  text: string,
  typingSpeed = 100,
  glitchChance = 0.2,
  glitchDuration = 1000,
  pauseAfterTyping = 2000,
  pauseAfterDeleting = 500,
) => {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "glitch" | "deleting">(
    "typing",
  );

  useEffect(() => {
    let i = 0;
    let intervalId: NodeJS.Timeout;

    const typeStep = () => {
      const slice = text.slice(0, i);
      const nextChar =
        Math.random() < glitchChance
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : text[i] || "";

      setDisplayed(slice + nextChar);
      i++;

      if (i > text.length) {
        clearInterval(intervalId);
        setTimeout(() => setPhase("glitch"), pauseAfterTyping);
      }
    };

    const glitchStep = () => {
      const glitched = text
        .split("")
        .map((char) =>
          Math.random() < 0.4
            ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
            : char,
        )
        .join("");
      setDisplayed(glitched);
    };

    const deleteStep = () => {
      if (i < 0) {
        clearInterval(intervalId);
        setTimeout(() => setPhase("typing"), pauseAfterDeleting);
        return;
      }

      setDisplayed(text.slice(0, i));
      i--;
    };

    if (phase === "typing") {
      i = 0;
      intervalId = setInterval(typeStep, typingSpeed);
    }

    if (phase === "glitch") {
      const glitchInterval = setInterval(glitchStep, 100);
      setTimeout(() => {
        clearInterval(glitchInterval);
        setPhase("deleting");
        i = text.length;
      }, glitchDuration);
    }

    if (phase === "deleting") {
      i = text.length;
      intervalId = setInterval(deleteStep, typingSpeed / 1.5);
    }

    return () => clearInterval(intervalId);
  }, [phase, text, typingSpeed, glitchChance, glitchDuration]);

  return displayed;
};

export const Home = () => {
  const animatedText = useGlitchTypewriterLoop("APM Academy");

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container flex h-screen flex-col justify-center gap-y-3"
        >
          <h1 className="h-[60px] w-max bg-gradient-to-tl from-sky-500 via-blue-500 to-emerald-500 bg-clip-text text-6xl leading-none font-bold text-transparent md:h-[75px] md:text-7xl">
            {animatedText}
          </h1>
          <div className="flex flex-col gap-y-1">
            <div>
              <p className="text-base text-gray-800 lg:text-lg">
                <b>Перестань</b> тратить время на&nbsp;бесконечные туториалы.
                Начни писать боевой код уже сегодня.
              </p>
              <p className="text-base text-gray-800 lg:text-lg">
                Мы&nbsp;покажем тебе, как стать <b>веб-разработчиком</b>,
                который ценится на&nbsp;рынке.
              </p>
            </div>
          </div>
          <div className="mt-1 flex gap-2">
            <Link
              className="cursor-pointer rounded-xl border border-gray-800 bg-gray-800 px-4 py-2 text-white transition duration-300 hover:bg-transparent hover:text-gray-800"
              href="/courses"
            >
              Начать обучение
            </Link>
            <Link
              className="cursor-pointer rounded-xl border border-gray-800 bg-gray-800 px-4 py-2 text-white transition duration-300 hover:bg-transparent hover:text-gray-800"
              href="/courses"
            >
              Посмотреть программы
            </Link>
          </div>
        </motion.div>
        <div className="absolute -top-16 -right-16 size-32 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% blur-2xl md:-top-32 md:-right-32 md:size-64"></div>
        <div className="absolute -bottom-16 -left-16 size-32 animate-spin rounded-full bg-linear-to-t bg-radial-[at_50%_75%] from-sky-500 via-blue-500 to-emerald-500 to-90% blur-2xl md:-bottom-32 md:-left-32 md:size-64 xl:-bottom-64 xl:-left-64 xl:size-128"></div>
      </section>

      <section className="bg-gray-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container space-y-5"
        >
          <h2 className="text-3xl font-bold text-gray-800 md:text-center">
            Как мы обучаем
          </h2>
          <div className="grid grid-cols-1 gap-5 text-center md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Практика на первом месте",
                desc: "У нас минимально теории и максимум реального кода. Учишься — как будто уже работаешь.",
              },
              {
                title: "Современные подходы",
                desc: "Мы постоянно обновляем курсы, следим за стеком и даём только то, что действительно актуально.",
              },
              {
                title: "Честность и уважение",
                desc: "Никаких ложных обещаний. Всё по делу. Мы ценим твоё время и помогаем расти без буллшита.",
              },
            ].map((item) => {
              return (
                <div
                  key={item.title}
                  className="flex flex-col gap-y-1 rounded-xl bg-white p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="bg-gray-50 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container space-y-5 md:text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Отзывы наших студентов
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Алексей К.",
                avatar: "https://i.pravatar.cc/150?img=11",
                text: "После курса HTML+CSS+JS я с нуля устроился на стажировку! Спасибо за понятную подачу!",
                course: "HTML, CSS + JS",
                rating: 5,
              },
              {
                name: "Мария П.",
                avatar: "https://i.pravatar.cc/150?img=5",
                text: "Очень структурированный и сильный курс. Отдельное спасибо за поддержку в чате.",
                course: "Frontend разработчик",
                rating: 5,
              },
              {
                name: "Иван Т.",
                avatar: "https://i.pravatar.cc/150?img=8",
                text: "После PRO-курса я прошёл собеседование и получил оффер. Спасибо за продвинутые темы!",
                course: "Frontend от Нуля до PRO",
                rating: 5,
              },
            ].map((review) => (
              <div
                key={review.name}
                className="flex flex-col justify-between rounded-xl bg-white p-6 text-left shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-500">{review.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">"{review.text}"</p>
                </div>
                <div className="flex gap-1 text-3xl text-yellow-300">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="leading-none">
                        ★
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden">
        <div className="container flex h-screen flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            Готов начать путь в IT? 👀
          </h2>
          <p className="text-md mb-6 text-gray-600">
            Запишись на курс и сделай первый шаг уже сегодня.
          </p>
          <Link
            className="cursor-pointer rounded-lg border border-gray-800 bg-gray-800 px-6 py-3 text-white transition duration-300 hover:bg-transparent hover:text-gray-800"
            href="/courses"
          >
            Записаться на курс
          </Link>
        </div>
        <div className="absolute -top-64 -left-64 size-128 animate-spin rounded-full bg-linear-to-t bg-radial-[at_50%_75%] from-violet-500 to-indigo-500 to-90% blur-2xl"></div>
        <div className="absolute -right-64 -bottom-64 size-128 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% blur-2xl"></div>
      </section>
    </>
  );
};
