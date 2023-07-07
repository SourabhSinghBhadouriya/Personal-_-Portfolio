import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"avtar.png"}
          alt="Founder"
        />

        <h2>Abhishek Singh</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCh-8-p8YhqkOYSxCXZ6B2yQ" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/sourabh__singh__bhadouriya/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/SourabhSinghBhadouriya" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;