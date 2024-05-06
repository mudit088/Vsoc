
"use client";

import { Footer } from "flowbite-react";
import { BsDiscord, BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function Footerb() {
  return (
    <Footer container className="bg-gray-800">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="flex pl-2 sm:pl-36 ">
          <img src="/widthlogo.png" alt="Vinyasa logo" title="Vinyasa" className="h-24 p-2 ml-4" />
          <p className=" font-Vsoc pl-20 sm:pl-8 text-2xl flex items-center align-middle text-white">VSOC</p>
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
                <Footer.Link className="pb-2" href="#">Vinyasa</Footer.Link>
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

