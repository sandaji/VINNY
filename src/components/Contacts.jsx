import React,{ useRef } from "react";
import { send } from "../assets";
import styles from "../style";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        // service id
        "service_zzg2p1n",
        // YOUR_TEMPLATE_ID
        "template_xw6p40b",
        form.current,
        // YOUR_PUBLIC_KEY
        "HZG0CTXvixIIzRxgv"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contacts"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className={`${styles.flexCenter} flex-col`}>
        <h2 className={[styles.heading2, styles.flexCenter]}>CONTACT ME</h2>
        <div className="heading__line"></div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Get in touch</p>
      </div>

      <div className=" md:w-[60%] w-[100%] flex gap-[12%] rounded-[2%] border-[1px]  border-[#C]">
        <div className="contact__options w-[35%] flex gap-[1.2rem]  flex-col justify-evenly ml-4 rounded-[2%] ">
          <article
            className={`  p-[1.2rem] text-center transition rounded-[5%] border-b-[1px] border-[#9926f0] text-white  hover:bg-[#9926f0] ${styles.flexCenter} `}
          >
            <MdOutlineEmail className=" text-[1.5rem]  text-[#db4437] mr-5 bg-white" />
            {/* <h4>Email</h4> */}
            <a
              href="mailto:sandajivincent@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Email Me
            </a>
          </article>
          <article
            className={` bg-transparent p-[1.2rem] text-center transition rounded-[5%] border-b-[1px] border-[#9926f0] text-white  hover:bg-[#9926f0] ${styles.flexCenter} `}
          >
            <RiMessengerLine className=" text-[1.5rem]  text-white mr-5 bg-[#006aff]" />
            {/* <h4>Messenger</h4> */}
            <a
              href="https://m.me/ijamy.vincent"
              rel="noreferrer"
              target="_blank"
            >
              Messsager
            </a>
          </article>
          <article
            className={` border-b-[1px] border-[#9926f0] p-[1.2rem] text-center transition rounded-[5%]  text-white hover:bg-[#9926f0] ${styles.flexCenter} `}
          >
            <BsWhatsapp className=" text-[1.5rem] text-white mr-5 bg-[#25d366]" />
            {/* <h4>Whatsapp</h4> */}
            <a href="https://api.whatsapp.com/send?phone+254729887508">
              Lets Chat
            </a>
          </article>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className={`w-[58%] ${styles.flexCenter} gap-5 
          mx-2 rounded-[2%] flex-col`}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className={`w-[100%] p-[.5rem] resize-none font-[500] text-[0.8rem] mt-5 text-white bg-transparent rounded-[0.5rem] bg-slate-900`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`w-[100%] p-[.5rem] resize-none font-[500] text-[0.8rem]  text-white bg-transparent rounded-[0.5rem] bg-slate-900`}
          />
          <input
            type="text"
            name="subject"
            placeholder="SUBJECT"
            required
            className={`w-[100%] p-[.5rem] resize-none font-[500] text-[0.8rem] text-white bg-transparent rounded-[0.5rem] bg-slate-900`}
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="start typing your message here..."
            required
            className={`w-[100%] p-[.5rem] resize-none font-[500] text-[0.8rem] text-white bg-transparent rounded-[0.5rem] bg-slate-900`}
          ></textarea>
          <button
            className={`btn btn-primary ${styles.flexCenter} mb-1 rounded-[0.5rem] w-[10rem] h-10`}
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
