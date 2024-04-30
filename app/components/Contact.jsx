"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg"
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    return (
      <section
        id="contact"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10 text-center p-6 bg-white bg-opacity-0 rounded-lg shadow">
          <h5 className="text-xl font-bold text-white my-2">
            Let's Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will
            try my best to get back to you!
          </p>
          <div className="socials flex justify-center gap-2">
            <Link href="https://github.com/LigarArnata">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/ligararnata/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
      </section>
    )
  }
  

export default Contact