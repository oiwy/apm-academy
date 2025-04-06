import { Link } from "wouter-preact";

export const Footer = () => {
  return (
    <footer className="bg-base-100 text-sm">
      <div className="container flex flex-col items-center justify-between gap-2 px-4 py-4 lg:flex-row">
        <p className="text-neutral-content">
          © {new Date().getFullYear()} ИП Попов Алексей Максимович, ИНН
          540443672201
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/oferta"
            className="hover:text-base-content text-neutral-content transition-colors duration-300"
          >
            Публичная оферта
          </Link>
          <Link
            href="/privacy"
            className="hover:text-base-content text-neutral-content transition-colors duration-300"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};
