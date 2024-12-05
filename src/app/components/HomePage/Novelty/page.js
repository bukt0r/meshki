const Novelty = () => {
  return (
    <div className={"h-[100vh] flex flex-col items-center px-[78px] pt-[98px] pb-[67px]"}>
      <div className={"text-[36px] font-[500] mb-[32px]"}>НОВИНКИ</div>
      <div className={"flex gap-[18px] mb-[70px]"}>
        <div className={"flex flex-col gap-[22px]"}>
          <div className={"relative"}>
            <img src="/novelty1.svg" alt="pic1"/>
            <img className="absolute top-[18px] right-[18px]" src="/heart.svg" alt="heart"/>
          </div>
          <div className={"flex justify-between"}>
            <div className={"text-[24px] font-[400] underline"}>Брюки pipes</div>
            <div className={"text-[24px] font-[500]"}>5250р</div>
          </div>
        </div>
        <div className={"flex flex-col gap-[22px]"}>
          <div className={"relative"}>
            <img src="/novelty2.svg" alt="pic2"/>
            <img className="absolute top-[18px] right-[18px]" src="/heart.svg" alt="heart"/>
          </div>
          <div className={"flex justify-between"}>
            <div className={"text-[24px] font-[400] underline"}>Long UNISEX</div>
            <div className={"text-[24px] font-[500]"}>5250р</div>
          </div>
        </div>
        <div className={"flex flex-col gap-[22px]"}>
          <div className={"relative"}>
            <img src="/novelty3.svg" alt="pic3"/>
            <img className="absolute top-[18px] right-[18px]" src="/heart.svg" alt="heart"/>
          </div>
          <div className={"flex justify-between"}>
            <div className={"text-[24px] font-[400] underline"}>Long SHORT</div>
            <div className={"text-[24px] font-[500]"}>5250р</div>
          </div>
        </div>
      </div>
      <div>
        <button className={"text-[24px] bg-[#222222] text-[#ffffff] py-[16px] px-[24px]"}>СМОТРЕТЬ ВСЕ</button>
      </div>
    </div>
  );
};

export default Novelty;