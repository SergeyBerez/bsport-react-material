import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <nav className="breadcrumb-nav">
        <div className="col s12">
          <NavLink to="/" className="breadcrumb flow-text-current">
            Главная
          </NavLink>

          <span className="breadcrumb flow-text-current">Контакты</span>
        </div>
      </nav>
      <h1>Контакты</h1>
      {/* <phone>+063-248-32-00</phone>
      <email>bvsportswear@gmail.com</email> */}
      <address>
        Адрес Украина, Хмельницкий, ул. Геологов Украина, Хмельницкая область,
        г. Хмельницкий, ул. Геологов
      </address>{" "}
      Розница: 063-248-32-00 (Viber / WhatsApp / Telegram) Дропшиппинг:
      063-248-32-00 (Viber / WhatsApp / Telegram) ОПТ: 063-248-32-00 Instgram:
      www.instagram.com/bsportswear Facebook: www.facebook.com/bsportswear
    </>
  );
};

export default About;
