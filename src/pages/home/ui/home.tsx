import { motion } from "framer-motion";
import { Link } from "wouter-preact";

export const Home = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container flex h-screen flex-col justify-center gap-y-3"
        >
          <h1 className="text-primary text-6xl leading-none font-bold lg:text-7xl">
            APM Academy
          </h1>
          <div className="flex flex-col gap-y-1">
            <div>
              <p className="text-base-content text-base lg:text-lg">
                <b>Перестань</b> тратить время на&nbsp;бесконечные туториалы.
                Начни писать боевой код уже сегодня.
              </p>
              <p className="text-base-content text-base lg:text-lg">
                Мы&nbsp;покажем тебе, как стать <b>веб-разработчиком</b>,
                который ценится на&nbsp;рынке.
              </p>
            </div>
          </div>
          <div className="mt-1 flex gap-3">
            <Link
              className="hover:text-neutral-content bg-primary border-primary hover:border-neutral-content text-base-content cursor-pointer rounded-xl border px-4 py-2 font-medium transition duration-300 hover:bg-transparent"
              href="/courses"
            >
              Начать обучение
            </Link>
            <Link
              className="hover:text-neutral-content text-base-content cursor-pointer rounded-xl border px-4 py-2 font-medium transition duration-300 hover:bg-transparent"
              href="/courses"
            >
              Посмотреть программы
            </Link>
          </div>
        </motion.div>
        <div className="from-primary to-secondary absolute -top-32 -right-32 z-0 size-64 rounded-full bg-radial-[at_50%_75%] to-90% blur-2xl"></div>
      </section>

      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container flex h-screen flex-col items-center justify-center text-center"
        >
          <h2 className="text-base-content mb-4 text-2xl font-bold">
            Готов начать путь в IT? 👀
          </h2>
          <p className="text-md text-neutral-content mb-6">
            Запишись на курс и сделай первый шаг уже сегодня.
          </p>
          <Link
            className="bg-primary border-primary text-base-content hover:bg-primary/80 cursor-pointer rounded-lg border px-6 py-3 font-semibold transition duration-300"
            href="/courses"
          >
            Записаться на курс
          </Link>
        </motion.div>
        <div className="bg-primary absolute -bottom-16 -left-16 z-0 size-32 animate-spin rounded-full blur-2xl"></div>
      </section>
    </>
  );
};
