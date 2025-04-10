export const Oferta = () => {
  return (
    <section>
      <div className="container space-y-6 pt-20 pb-3">
        <h1 className="text-3xl font-bold">
          Публичная оферта на заключение договора оказания информационных услуг
        </h1>
        <p>
          Индивидуальный предприниматель Попов Алексей Максимович, ИНН
          540443672201, в дальнейшем именуемый «Исполнитель», публикует
          настоящую публичную оферту (далее — Оферта) о заключении договора на
          оказание информационных услуг с любым физическим лицом (далее —
          «Заказчик»), принявшим условия данной Оферты.
        </p>

        <h2 className="text-2xl font-semibold">1. Общие положения</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            1.1. Настоящий документ является официальным публичным предложением
            (в соответствии со статьей 437 Гражданского кодекса РФ) заключить
            договор на условиях, изложенных ниже.
          </li>
          <li>
            1.2. Принятие условий (акцепт) настоящей Оферты осуществляется путем
            оплаты услуг Исполнителя через доступные способы оплаты.
          </li>
          <li>
            1.3. Акцепт Оферты означает полное и безоговорочное согласие
            Заказчика с условиями настоящей Оферты.
          </li>
          <li>
            1.4. Настоящий договор не является образовательной лицензией в
            смысле ФЗ «Об образовании». Услуги носят информационный характер.
          </li>
          <li>
            1.5. По завершении обучения Заказчику выдается именной сертификат
            (бумажный или электронный) об окончании соответствующего курса.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">2. Предмет оферты</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            2.1. Исполнитель оказывает информационные услуги, а именно
            предоставляет доступ к онлайн-курсам по веб-разработке, включая
            проверку финального проекта.
          </li>
          <li>
            2.2. Курсы размещены на сайте:{" "}
            <a
              href="https://www.apm-academy.ru"
              className="text-primary underline"
            >
              https://www.apm-academy.ru
            </a>
            .
          </li>
          <li>
            2.3. Заказчик самостоятельно выбирает курс и оплачивает его
            стоимость.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          3. Стоимость и порядок оплаты
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>3.1. Стоимость каждого курса указана в его карточке на сайте.</li>
          <li>
            3.2. Оплата осуществляется через платёжный сервис T-Pay (банковской
            картой).
          </li>
          <li>
            3.3. Услуга считается оплаченной с момента подтверждения успешного
            платежа.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">4. Порядок оказания услуг</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            4.1. Доступ к курсу предоставляется в течение 24 часов после
            подтверждения оплаты.
          </li>
          <li>4.2. Материалы доступны в личном кабинете Заказчика на сайте.</li>
          <li>
            4.3. Срок действия доступа: пока работает платформа APM Academy.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          5. Права и обязанности сторон
        </h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>5.1. Обязанности Исполнителя:</strong>
          </li>
          <li className="ml-4">Предоставить доступ к материалам курса;</li>
          <li className="ml-4">Обеспечить проверку финального проекта;</li>
          <li className="ml-4">
            Соблюдать конфиденциальность персональных данных.
          </li>
          <li>
            <strong>5.2. Обязанности Заказчика:</strong>
          </li>
          <li className="ml-4">
            Не распространять, не копировать и не передавать материалы курса
            третьим лицам;
          </li>
          <li className="ml-4">
            Не передавать свои учетные данные третьим лицам;
          </li>
          <li className="ml-4">Соблюдать авторские права Исполнителя.</li>
        </ul>

        <h2 className="text-2xl font-semibold">6. Отказ от ответственности</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            6.1. Исполнитель не несет ответственности за то, как Заказчик
            применяет полученные знания.
          </li>
          <li>
            6.2. Исполнитель не гарантирует трудоустройство, повышение дохода
            или достижение других конкретных результатов.
          </li>
          <li>
            6.3. Все услуги предоставляются исключительно в информационных
            целях.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">7. Возвраты</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            7.1. Заказчик вправе запросить возврат денежных средств в течение 14
            календарных дней с момента оплаты.
          </li>
          <li>
            7.2. Запрос необходимо направить на адрес:{" "}
            <a
              href="mailto:refunds@apm-academy.ru"
              className="text-primary underline"
            >
              refunds@apm-academy.ru
            </a>
            .
          </li>
          <li>
            7.3. Возврат возможен, если Заказчик не завершил более 30% курса и
            не отправил финальный проект на проверку.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">8. Персональные данные</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            8.1. Заказчик, принимая условия Оферты, дает согласие на обработку
            своих персональных данных в соответствии с ФЗ-152 «О персональных
            данных».
          </li>
          <li>
            8.2. Обработка данных осуществляется исключительно в целях
            исполнения настоящего договора.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">9. Заключительные положения</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            9.1. Исполнитель оставляет за собой право вносить изменения в Оферту
            без предварительного уведомления.
          </li>
          <li>
            9.2. Все изменения вступают в силу с момента публикации новой
            редакции Оферты на сайте.
          </li>
          <li>
            9.3. Все споры и разногласия разрешаются в порядке, установленном
            законодательством РФ.
          </li>
          <li>9.4. Подсудность споров: г. Новосибирск.</li>
          <li>
            9.5. Настоящая Оферта действует бессрочно до момента её отзыва
            Исполнителем.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">10. Реквизиты Исполнителя</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Индивидуальный предприниматель:</strong> Попов Алексей
            Максимович
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
            <strong>E-mail:</strong>{" "}
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
