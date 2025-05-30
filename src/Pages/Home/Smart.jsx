import th from "../../assets/Banner/smart.svg";

const Smart = () => {
  return (
    <section className="bg-[#F7F9FD]">
      <div className="max-w-[1270px] lg:mx-auto px-4 md:mx-6 flex flex-col py-16 md:flex-row gap-28">
        <div className="md:w-1/2">
          <img src={th} alt="" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">
            Smarter than the average spreadsheet
          </h1>
          <p className="mt-4">
            Don’t waste time sifting through cluttered spreadsheets to track
            your items. With our asset tracking software, you’ll be able to see
            full action histories, warranty information, user manuals, and
            photos all in one consolidated place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Smart;
