import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  ArrowBigRight,
  ArrowBigLeft,
  ArrowRight,
  Globe,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div>
            <h4 className="font-medium mb-4">CATEGORIES</h4>
            <ul
              className="space-y-2 text-sm font-thin "
              style={{
                fontWeight: "100",
                fontSize: "14px",
                color: "#504c4cff",
              }}
            >
              <li className="font-w">
                <a
                  href="#funiture"
                  className="hover:opacity-80  hover:text-primary font-extralight font-sm"
                >
                  Funiture
                </a>
              </li>
              <li>
                <a
                  href="#jewelry"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Fine Art
                </a>
              </li>
              <li>
                <a
                  href="#fashion"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Fashion
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Creators
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#contact"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Questions & Answers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">TRADE</h4>
            <ul
              className="space-y-2 text-sm"
              style={{
                fontWeight: "100",
                fontSize: "14px",
                color: "#504c4cff",
              }}
            >
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Trade Program
                </a>
              </li>
              <h4 className="font-medium mb-4 mt-4 text-black">SELLERS</h4>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Seller Application
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Seller Login
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Seller Directory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">OUR COMPANY</h4>
            <ul
              className="space-y-2 text-sm font-extralight font-sm"
              style={{
                fontWeight: "100",
                fontSize: "14px",
                color: "#504c4cff",
              }}
            >
              <li>
                <a
                  href="#about-us"
                  className="hover:opacity-80  hover:text-primary font-extralight font-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#press"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#investors"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Investors
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#contact"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">CUSTOMER SUPPORT</h4>
            <ul
              className="space-y-2 text-sm font-extralight font-sm"
              style={{
                fontWeight: "100",
                fontSize: "14px",
                color: "#504c4cff",
              }}
            >
              <li>
                <a
                  href="#"
                  className="hover:opacity-80  hover:text-primary font-extralight font-sm"
                >
                  Get Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  Visit Support Center
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="#"
                  className="hover:opacity-80 text-muted-foreground hover:text-primary"
                >
                  1stDibs Promise
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4">CONNECT WITH US</h4>
            <p className="text-xs mb-1">
              Sign up for weekly emails with new listings, sales and more!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Yes,here's email"
                className="text-sm px-3 py-2 border border-border rounded-md w-full focus:outline-none focus:ring focus:ring-primary placeholder:text-xm"
              />
              <button
                type="submit"
                className="mx-2 px-3 py-2 bg- text-black border rounded-md hover:bg-black/90 transition-colors flex items-center justify-center hover:text-white"
                aria-label="Subscribe"
              >
                <ArrowRight className=" h-4 w-4" />
              </button>
            </form>
            <p className="text-xs mt-4">
              By entering your email, you agree to our User Agreement and
              Privacy Policy
            </p>
          </div>
        </div>

        <p
          className="font-light mt-2 mb-6   flex justify-end  gap-2 text-sm"
          style={{ fontSize: "14px", fontWeight: "300", color: "#454545ff" }}
        >
          <span className="uppercase text-sm tracking-wide">introspective</span>
          Magazine <br />{" "}
          <span className="flex justify-start"> THE STUDY </span>
        </p>

        {/* Footer Bottom */}
        <div className="border-t pt-6 pb-12 px-4 text-xs">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
    {/* Left side: legal & links */}
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <p>© 1stDibs.com, Inc. 2025</p>
        <a href="#" className="hover:underline">
          User Agreement
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Do Not Sell My Info
        </a>
        <a href="#" className="hover:underline">
          Cookie Preferences
        </a>
        <a href="#" className="hover:underline">
          Site Map
        </a>
      </div>

      <div className="flex flex-wrap gap-4">
        <span>Shop 1stDibs:</span>
        <a href="#" className="hover:underline">
          France
        </a>
        <a href="#" className="hover:underline">
          Germany
        </a>
        <a href="#" className="hover:underline">
          Italy
        </a>
        <a href="#" className="hover:underline">
          Spain
        </a>
        <a href="#" className="hover:underline">
          United States
        </a>
      </div>

      <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="#" className="underline">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline">
          Terms of Service
        </a>{" "}
        apply.
      </p>
    </div>

    {/* Right side: location/language/currency */}
    <div className="flex flex-col items-center lg:items-end gap-4" style={{marginTop: "-10px"}}>
      <div className="flex items-center gap-2">
        <Globe className="w-4 h-4" />
        <span>EGYPT</span>
        <span className="mx-1">|</span>
        <span>ENGLISH (US)</span>
        <span className="mx-1">|</span>
        <span>$ USD</span>
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <svg
      width={50}
      height="auto"
      role="img"
      aria-label="1stDibs"
      viewBox="0 0 39.93302 48.5297"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.183 29.464h2.496v8.528c0 2.565 1.248 4.02 3.397 4.02a5.64 5.64 0 005.06-3.396l-.138-.208a5.224 5.224 0 01-3.258 1.456c-1.733 0-2.357-.832-2.357-3.05l-.07-7.35h4.853l.486-2.149h-5.339v-3.189l-5.13 4.992zm4.645-21.491c1.387 0 2.842 1.109 4.229 2.565V7.557a8.766 8.766 0 00-3.952-1.04c-2.496 0-4.506 1.525-4.506 4.02 0 1.803 1.178 2.982 2.496 3.883l2.565 1.734c1.248.831 1.664 1.386 1.664 2.357a1.833 1.833 0 01-2.08 1.802c-1.525 0-2.773-1.109-4.576-3.05v3.258a7.194 7.194 0 004.16 1.387c2.496 0 4.853-1.872 4.853-4.299 0-1.871-1.11-2.98-2.773-4.09l-2.288-1.525c-1.04-.693-1.664-1.317-1.664-2.288a1.751 1.751 0 011.872-1.733m-14.004 6.1v21.978c0 3.743-1.595 4.783-4.853 5.893h13.865c-3.258-1.11-4.853-2.15-4.853-5.893V10.538a38.81 38.81 0 01.278-5.13A22.692 22.692 0 010 9.15v.624c4.992 0 5.824 1.318 5.824 4.299M14.35 0H.416v1.733H13.45c14.559 0 20.59 9.152 20.59 22.185 0 15.044-6.447 22.879-19.273 22.879H.624v1.733h14.282c18.372 0 25.027-12.48 25.027-24.612C39.933 12.202 32.862 0 14.351 0" />
    </svg>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
