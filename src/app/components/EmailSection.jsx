"use client";
import React, { useState, useCallback, useMemo } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import FacebookIcon from "../../../public/facebook-icon.svg";
import GmailIcon from "../../../public/gmail-icon.svg";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const defaultData = useMemo(
    () => ({
      name: "",
      email: "",
      message: "",
    }),
    []
  );

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [data, setData] = useState(defaultData);
  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    const fieldData = { [name]: value };
    setData((prevData) => ({ ...prevData, ...fieldData }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      setSending(true);

      const { name, email, message } = data;
      const templateParams = {
        to_name: name,
        from_name: email,
        message: message,
      };

      emailjs
        .send(
          "service_eymyszh",
          "template_09aru2q",
          templateParams,
          "4qkFZ_T6-7x1U9iiV"
        )
        .then(
          (result) => {
            console.log("result", result);
            setSendEmailSuccess(true);
            setSending(false);
          },
          (error) => {
            console.error("Error sending email:", error);
            setSending(false);
          }
        );
    },
    [data]
  );

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          please contact me for any information
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="mailto:davidetrovato87@gmail.com">
            <Image src={GmailIcon} alt="Google Icon" />
          </Link>
          <Link target="_blank" href="https://github.com/DaveCode87">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/trovatodavide/"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          {/* <Link href="facebook.com">
            <Image src={FacebookIcon} alt="Facebook Icon" />
          </Link>
          <Link href="instagram.com">
            <Image src={InstagramIcon} alt="Instagram Icon" />
          </Link> */}
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block text-sm mb-2 font-medium"
              >
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            {sendEmailSuccess ? (
              <div className="text-white">Your message has been successfully sent!</div>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
