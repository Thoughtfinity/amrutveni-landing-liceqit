"use client";

import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";
import CertificateOne from "@/../public/images/common/certificates/certificate-1.svg";
import CertificateTwo from "@/../public/images/common/certificates/certificate-2.svg";
import CertificateThree from "@/../public/images/common/certificates/certificate-3.svg";
import CertificateFour from "@/../public/images/common/certificates/certificate-4.svg";
import CertificateFive from "@/../public/images/common/certificates/certificate-5.svg";
import Image from "next/image";
import { useDataContext } from "@/lib/utils/context/useDataContext";

export const Footer = () => {
  const { footerRef } = useDataContext();

  return (
    <div
      className="w-full max-w-[1620px] px-4 desktop:px-16 pt-10 pb-4 bg-liceqit-primary mt-24 rounded-t-[32px] desktop:rounded-t-[56px] flex flex-col gap-8 md:gap-16"
      ref={footerRef}
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-col gap-2.5">
            <p className="text-xl text-white font-medium md:text-2xl desktop:!text-3xl">
              SAHYADRI BIO LABS PVT.LTD
            </p>
            <p className="text-xs text-white/75 md:max-w-[500px] md:text-sm">
              We specialize in hair care. Our research based on advanced
              biotechnology is the basis for the genesis of Amrutveni range of
              hair care products.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-white md:text-lg">
              Stay updated with our newsletter
            </p>
            <div className="w-full bg-white h-[40px] flex items-center justify-between rounded-full px-4 md:max-w-[295px]">
              <input
                type="email"
                className="w-full h-full outline-none text-sm"
                placeholder="Your email"
              />
              <button
                aria-label="Send the email for newsletter subscription"
                className="h-full flex items-center justify-end cursor-pointer group"
              >
                <ArrowRight className="w-4 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col">
              <p className="font-medium text-sm text-white md:text-base desktop:!text-lg">
                Head Office
              </p>
              <p className="text-[10px] text-white/75 md:text-xs desktop:!text-sm">
                3/44 Shiv Shakti Estate Marol Naka,
                <br />
                Andheri Kurla Road, Andheri (E),
                <br />
                Mumbai, Maharashtra
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-medium text-sm text-white md:text-base desktop:!text-lg">
                Regional Office
              </p>
              <p className="text-[10px] text-white/75 md:text-xs desktop:!text-sm">
                SAHYADRI BIO LABS PVT. LTD,
                <br />
                No.V/277, Pannissery, Koonamoochi P O,
                <br />
                Thrissur, Kerala
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1.5">
              <Link
                href={"https://amrutveni.com/"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <Link
                href={"https://amrutveni.com/our-story"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Go to about page"
              >
                About
              </Link>
              <Link
                href={"https://amrutveni.com/contact"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Go to contact page"
              >
                Contact
              </Link>
              <Link
                href={"https://amrutveni.com/products"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Go to products page"
              >
                Product
              </Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <Link
                href={"https://amrutveni.com/policy/privacy-policy"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Open privacy policy"
              >
                Privacy Policy
              </Link>
              <Link
                href={"https://amrutveni.com/policy/refund-policy"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Open refund policy"
              >
                Refund Policy
              </Link>
              <Link
                href={"https://amrutveni.com/policy/terms-and-conditions"}
                className="text-sm text-white/75 w-fit md:text-[15px] desktop:!text-base relative after:absolute after:w-full after:h-px after:bg-white after:left-0 after:right-0 after:bottom-0 after:rounded-full after:origin-[100%_100%] after:scale-x-0 hover:after:origin-[0%_0%] hover:after:scale-x-100 after:transition-transform after:duration-300"
                aria-label="Open terms and conditions"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 md:flex-row md:gap-4 md:justify-between">
        <div className="flex items-center justify-center gap-2">
          <Image
            src={CertificateOne}
            alt="Cerificate one"
            className="w-12 desktop:w-16"
          />
          <Image
            src={CertificateTwo}
            alt="Cerificate one"
            className="w-12 desktop:w-16"
          />
          <Image
            src={CertificateThree}
            alt="Cerificate one"
            className="w-12 desktop:w-16"
          />
          <Image
            src={CertificateFour}
            alt="Cerificate one"
            className="w-12 desktop:w-16"
          />
          <Image
            src={CertificateFive}
            alt="Cerificate one"
            className="w-12 desktop:w-16"
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <Link
            href={"https://www.facebook.com/amrutveni/"}
            target="_blank"
            className="hover:scale-125 transition-transform duration-300"
            aria-label="Go to Amrutveni's facebook page"
          >
            <Facebook className="text-white w-6" />
          </Link>
          <Link
            href={"https://www.instagram.com/amrutveni/"}
            target="_blank"
            className="hover:scale-125 transition-transform duration-300"
            aria-label="Go to Amrutveni's instagram page"
          >
            <Instagram className="text-white w-6" />
          </Link>
          <Link
            href={"https://www.youtube.com/c/Amrutveni"}
            target="_blank"
            className="hover:scale-125 transition-transform duration-300"
            aria-label="Go to Amrutveni's youtube channel"
          >
            <Youtube className="text-white w-6" />
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p className="text-white/75 text-xs md:text-sm">
          © 2025 Sahyadri Bio Labs. All Rights Reserved
        </p>
      </div>
    </div>
  );
};
