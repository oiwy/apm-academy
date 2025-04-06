export const Privacy = () => {
  return (
    <section>
      <div className="container space-y-6 pt-20 pb-3">
        <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>

        <p>
          Настоящая Политика конфиденциальности определяет порядок обработки и
          защиты персональных данных пользователей сайта{" "}
          <a
            href="https://www.apm-academy.ru"
            className="text-primary underline"
          >
            https://www.apm-academy.ru
          </a>{" "}
          (далее — <strong>Сайт</strong>), принадлежащего
          <strong> ИП Попов Алексей Максимович</strong>, ИНН 540443672201 (далее
          — <strong>Оператор</strong>, <strong>мы</strong>).
        </p>

        <h2 className="text-2xl font-semibold">1. Общие положения</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            1.1. Настоящая Политика разработана в соответствии с требованиями
            Федерального закона РФ от 27.07.2006 № 152-ФЗ «О персональных
            данных» и иными нормативными актами.
          </li>
          <li>
            1.2. Посетитель сайта, оставляя данные через формы (регистрация,
            оплата, подписка и др.), выражает свое согласие на обработку
            персональных данных в соответствии с настоящей Политикой.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          2. Персональные данные, которые мы собираем
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>ФИО;</li>
          <li>Адрес электронной почты;</li>
          <li>Номер телефона;</li>
          <li>
            Платежную информацию (обрабатывается платёжной системой T-Pay);
          </li>
          <li>
            Информацию о посещениях сайта (IP-адрес, cookies, данные браузера и
            т.д.).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          3. Цели сбора персональных данных
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Предоставление доступа к обучающим материалам;</li>
          <li>Связь с пользователем (поддержка, уведомления);</li>
          <li>Обработка платежей;</li>
          <li>Улучшение качества наших услуг;</li>
          <li>Выполнение требований законодательства РФ.</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          4. Обработка и хранение данных
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            4.1. Обработка данных включает в себя сбор, хранение, уточнение,
            использование, обезличивание, блокирование и удаление.
          </li>
          <li>
            4.2. Мы принимаем необходимые организационные и технические меры для
            защиты персональных данных от утраты, неправомерного доступа и иных
            незаконных действий.
          </li>
          <li>
            4.3. Данные хранятся не дольше, чем это необходимо для целей их
            обработки.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          5. Передача данных третьим лицам
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            5.1. Мы не передаём ваши персональные данные третьим лицам, за
            исключением:
          </li>
          <li className="ml-4">Платёжных агрегаторов (например, T-Pay);</li>
          <li className="ml-4">
            По требованию закона (например, по запросу суда или госорганов).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Права пользователя</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>Запросить копию ваших персональных данных;</li>
          <li>Отозвать согласие на обработку данных;</li>
          <li>Потребовать исправления, блокировки или удаления данных.</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          7. Использование файлов cookie
        </h2>
        <p>
          Мы используем cookie для корректной работы сайта и анализа
          посещаемости. Вы можете отключить cookie в настройках браузера, но это
          может повлиять на работу некоторых функций сайта.
        </p>

        <h2 className="text-2xl font-semibold">8. Изменения политики</h2>
        <p>
          Мы можем вносить изменения в настоящую Политику без предварительного
          уведомления. Актуальная версия всегда доступна на сайте.
        </p>

        <h2 className="text-2xl font-semibold">9. Контактная информация</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>ИП Попов Алексей Максимович</strong>
          </li>
          <li>
            <strong>ИНН:</strong> 540443672201
          </li>
          <li>
            <strong>Сайт:</strong>{" "}
            <a
              href="https://www.apm-academy.ru"
              className="text-primary underline"
            >
              https://www.apm-academy.ru
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:school@apm-academy.ru"
              className="text-primary underline"
            >
              school@apm-academy.ru
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
