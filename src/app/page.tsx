import bg from "../../public/background.webp";

const page = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="grid text-center text-Button bg-cover left-0 right-0 bottom-0 -z-50 top-0 items-center justify-center fixed">
      <div className="font-bold">
        <div className="md:text-9xl text-8xl">Report</div>
        <div className="flex md:space-x-10 space-x-5 justify-center md:text-2xl text-xl mt-5">
          <div>Financial</div>
          <div>Expenditure</div>
          <div>Income</div>
        </div>
      </div>
    </div>
  );
};

export default page;
