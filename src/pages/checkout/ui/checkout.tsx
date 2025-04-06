import { useState } from "preact/hooks";

const courses = [
  {
    id: "html-css-js",
    name: "HTML, CSS + JS",
    price: 2990,
  },
  {
    id: "frontend-developer",
    name: "Frontend разработчик",
    price: 5990,
  },
  {
    id: "frontend-pro",
    name: "Frontend от Нуля до PRO",
    price: 9990,
  },
];

export const Checkout = ({ params }: { params: any }) => {
  const course = courses.find((course) => course.id === params.id);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);
    return hasMinLength && hasLetter && hasNumber && hasSpecial;
  };

  const handleConfirm = () => {
    if (!validateEmail(email)) {
      setError("Введите корректный email");
      return;
    }
    if (!validatePassword(password)) {
      setError("Пароль должен содержать буквы, цифры и спецсимвол");
      return;
    }

    setError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 1000);
  };

  const handlePayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <section className="py-20">
      <div className="container flex h-[calc(100vh-180px)] flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {step === 1 && "Регистрация"}
            {step === 2 && "Подтверждение оплаты"}
            {step === 3 && "Доступ открыт! 🎉"}
          </h1>
        </div>

        {step === 1 && (
          <fieldset className="fieldset bg-base-200 rounded-box w-xl space-y-3 p-4 shadow-xl">
            <div className="space-y-1">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="example@mail.ru"
                required
                onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
              />
            </div>

            <div className="space-y-1">
              <label className="fieldset-label">Пароль</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Придумайте пароль"
                required
                onInput={(e) =>
                  setPassword((e.target as HTMLInputElement).value)
                }
              />
            </div>

            {error && <p className="text-error text-sm">{error}</p>}

            <button
              className="btn btn-primary w-full"
              onClick={handleConfirm}
              disabled={isLoading}
            >
              {isLoading
                ? "Загрузка..."
                : `Перейти к оплате — ${course?.price}₽`}
            </button>
          </fieldset>
        )}

        {step === 2 && (
          <div className="card bg-base-200 space-y-4 p-6 text-center shadow-xl">
            <p>
              Подтвердите оплату курса <strong>{course?.name}</strong> на сумму{" "}
              <strong>{course?.price}₽</strong>.
            </p>
            <button
              className="btn btn-success w-full"
              onClick={handlePayment}
              disabled={isLoading}
            >
              {isLoading ? "Оплата..." : "Оплатить через T-Pay"}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="card bg-base-200 space-y-4 p-6 text-center shadow-xl">
            <h2 className="text-2xl font-semibold">Спасибо за покупку!</h2>
            <p>
              Вы получили доступ к курсу <strong>{course?.name}</strong>.
            </p>
            <a href={`/lessons`} className="btn btn-primary">
              Перейти к обучению
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
