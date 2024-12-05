const Footer = () => {
  return (
    <div className={"bg-[#E9EAED]"}>
      <div className={"flex px-[75px] py-[92px] "}>
        <div className={"flex w-1/2 gap-[55px]"}>
          <div>
            <div className={"mb-[40px]"}>
              <div className={"font-semibold"}>
                <span>МАГАЗИН</span>
              </div>
              <div className={"flex flex-col"}>
                <a href="#">Каталог</a>
                <a href="#">О бренде</a>
                <a href="#">Контакты</a>
                <a href="#">Магазины</a>
              </div>
            </div>
            <div>
              <div className={"font-semibold"}>
                <span>ПОКУПАТЕЛЯМ</span>
              </div>
              <div className={"flex flex-col"}>
                <a href="#">Подарочная карта</a>
                <a href="#">Доставка и оплата</a>
                <a href="#">Обмен и возврат</a>
                <a href="#">Состав и уход</a>
              </div>
            </div>
          </div>

          <div>
            <div className={"mb-[66px]"}>
              <div className={"font-semibold"}>
                <span>МЫ В СОЦ.СЕТЯХ</span>
              </div>
              <div className={"flex flex-col"}>
                <a href="#">Telegram</a>
                <a href="#">Instagram</a>
                <a href="#">Vkontakte</a>
              </div>
            </div>
            <div>
              <div className={"font-semibold"}>
                <span>БЫСТРАЯ СВЯЗЬ</span>
              </div>
              <div className={"flex flex-col"}>
                <div className={"flex"}>
                  <img src="/telegram.svg" alt="tele"/>
                  <a href="#">Telegram</a>
                </div>
                <div className={"flex"}>
                  <img src="./whatsapp.svg" alt="ws"/>
                  <a href="#">WhatsApp</a>
                </div>
                <div className={"flex"}>
                  <img src="./mail.svg" alt="mail"/>
                  <a href="#">infomeshki@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={"w-1/2"}>
          <div>
            <div className={"font-bold"}>
              <h3>
                MESHKI
              </h3>
            </div>
            <div>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </span>
            </div>
          </div>

          <div>
            <span>
              Подпишись на рассылку, узнавай первым о новинках и акциях
            </span>
          </div>
          <div className={"flex items-end"}>
            <input className={"bg-[#E9EAED] border-b-[1px] border-[#26262680] focus:outline-none  "} type="email" placeholder="Введите свой E-mail"/>
            <button className={"bg-[#222222] text-[#ffffff] py-[11px] px-[14px]"}>
              ПОДПИСАТЬСЯ
            </button>
          </div>

        </div>
      </div>

      <div className={"h-[60px] flex items-center justify-center text-[#26262680] text-[14px] bg-[#ffffff]"}>
        <span>MESHKI 2024</span>
      </div>
    </div>
  );
};

export default Footer;