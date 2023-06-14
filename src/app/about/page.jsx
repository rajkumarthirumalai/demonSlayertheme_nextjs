import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
export const metadata = {
  title: "About | demon slayer",
  description: "This is About Page",
};
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images4.alphacoders.com/131/1310857.jpg"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Manga Story teller</h1>
          <h2 className={styles.imgDesc}>
            free place read your favourite Manga
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit molestiae dolores ex est at autem dolore quia aut
            quod, nesciunt quas corporis nemo a voluptatum excepturi ipsam
            obcaecati impedit quis?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            voluptas odit veniam modi iusto, ipsum optio nihil et rerum
            laboriosam mollitia aut, consectetur amet non similique quas
            exercitationem natus nam!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What do we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit molestiae dolores ex est at autem dolore quia aut
            quod, nesciunt quas corporis nemo a voluptatum excepturi ipsam
            obcaecati impedit quis?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            voluptas odit veniam modi iusto, ipsum optio nihil et rerum
            laboriosam mollitia aut, consectetur amet non similique quas
            exercitationem natus nam!
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
