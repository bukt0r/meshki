const Collections = () => {
  return(
    <div className={"flex justify-center items-center h-[100vh] bg-[url('/collections.svg')] bg-cover bg-center"}>
      <div className={"flex flex-col justify-center items-center"}>
        <div className={"flex items-end text-[36px] font-[500] underline"}>
          КОЛЛЕКЦИЯ ЛЕТО
        </div>
        <div className={"text-[24px] font-[500] "}>2024</div>
      </div>
    </div>
  );
};

export default Collections;