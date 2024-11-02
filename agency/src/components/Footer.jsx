import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
  {
    aosDelay: "0",
  },
];

const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
  {
    aosDelay: "700",
  },
];

const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ?sub_confirmation=1",
  },
  {
    aosDelay: "700",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/*footer details  */}

          <div className="px-4 py-8">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Digital Agency
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vero provident praesentium aliquam ipsam tempora
              molestiae inventore odio error, dolorum cumque porro consequatur
              blanditiis saepe autem nemo minus maiores. Eaque!
            </p>
            <br />
            {/* social media */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* links section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            {/* first col */}
            <div>
              <div className="px-4 py-8">
                <h1 className="text-xl font-bold mb-3"> Company</h1>
                <ul className="space-y-3">
                  {FooterLinks.map(({ title, link, aosDelay }) => (
                    <li data-aos="fade" data-aos-delay={aosDelay}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400"
                      key={link}
                    >
                      <span key={link}> {title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* second col */}
            <div>
              <div className="px-4 py-8">
                <h1 className="text-xl font-bold mb-3"> Help</h1>
                <ul className="space-y-3">
                  {HelpLinks.map(({ title, link, aosDelay }) => (
                    <li data-aos="fade" data-aos-delay={aosDelay}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400"
                      key={link}
                    >
                      <span key={link}> {title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* 3rd col */}
            <div>
              <div className="px-4 py-8">
                <h1 className="text-xl font-bold mb-3"> Resources</h1>
                <ul className="space-y-3">
                  {ResourcesLinks.map(({ title, link, aosDelay }) => (
                    <li data-aos="fade" data-aos-delay={aosDelay}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-400"
                      key={link}
                    >
                      <span key={link}> {title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
