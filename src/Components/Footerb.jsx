
"use client";

import { Footer } from "flowbite-react";
import { BsDiscord, BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footerb() {
  return (
    <Footer container className="bg-gray-800">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex pl-2 sm:pl-36 ">
          <img src="/IMG_4259 2.png" alt="Vinyasa logo" title="Vinyasa" className="h-28 p-1 ml-4" />
          <a href="https://www.vinyasa.tech/" className=" font-Vsoc pl-20  sm:pl-2 text-gray-500  text-xl flex items-center align-middle font-vsoc ">Vinyasa</a>
          </div>
          <div className="grid grid-cols-2 gap-12  sm:pb-0 ml-5 sm:ml-0 sm:mt-4 sm:grid-cols-3  ">
            <div>
              <Footer.Title title="Follow us" className="pb-4" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.instagram.com/vsoc_csd?igsh=MXFlbjdnbmh1bG5sdw==">Instagram</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Contact us" className="pb-4" />
              <Footer.LinkGroup col>
                <Footer.Link href="vinyasacsd@gmail.com">vinyasacsd@gmail.com</Footer.Link>
                <Footer.Link className="pb-2" href="https://www.vinyasa.tech/">Vinyasa</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full p-5 sm:p-0 flex justify-between bg-gray-800 sm:flex sm:items-center  sm:justify-between">
          <Footer.Copyright className="text-lg   sm:pl-48 sm:py-10" href="#" by="VSOC™ 2024"  />
          <div className=" bg-gray-800 sm:pr-72 pt-1 flex space-x-6  sm:mt-0 sm:justify-center">
            <Footer.Icon className="" href="#" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/vsoc_csd?igsh=MXFlbjdnbmh1bG5sdw==" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
            <Footer.Icon href="#" icon={BsDiscord} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footerb

