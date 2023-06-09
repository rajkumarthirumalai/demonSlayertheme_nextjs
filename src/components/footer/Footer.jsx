import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023RajUzumaki.All Rights Reserved.</div>
      <div className={styles.social}>
        <Image className={styles.icon} src="/1.png" alt="Raj Facebook" width={15} height={15}></Image>
        <Image className={styles.icon} src="/2.png" alt="Raj Instagram" width={15} height={15}></Image>
        <Image className={styles.icon} src="/3.png" alt="Raj Twitter" width={15} height={15}></Image>
        <Image className={styles.icon} src="/4.png" alt="Raj Youtube" width={15} height={15}></Image>
      </div>
    </div>
  );
};

export default Footer;
