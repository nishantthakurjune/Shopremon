
const Footer = () => {
  return (
    <>
    <div className="bg-gray-900 text-slate-500 flex flex-row justify-between p-2 hover:cursor-pointer">
      <div className="ml-10">
        <div className="font-bold text-white underlined">For bussiness</div>
        <div className="">Explore</div>
        <div className="">Healthcare</div>
        <div className="">Individual</div>
      </div>
      <div className="">
        <div className="font-bold text-white">Resources</div>
        <div className="">Resources Center</div>
        <div className="">Testimonials</div>
      </div>
      <div className="">
        <div className="font-bold text-white">Aurther</div>
        <div className="">Nishant Thakur</div>
      </div>
      <div className="">
        <div className="font-bold text-white">Partners</div>
      </div>
      <div className="">
        <div className="font-bold text-white">Coming Soon on</div>
        <div className="">LinkedIn</div>
        <div className="">Github</div>
      </div>
    </div>
    <div className="last data flex bg-gray-900  pt-1 text-white pr-5 hover:cursor-pointer border-gray-400 " >
        <div className="w-1/4 justify-between ml-10">
        <div>@2024, All rights are reserved</div>
        </div>
        <div className="flex bg-gray-900 w-3/4 gap-4 justify-end">
        <div>Terms and conditions</div>
        <div>Privacy</div>
        <div>Security</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
