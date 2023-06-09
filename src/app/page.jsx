import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/d2.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Demon Slayer: Kimetsu no Yaiba</h1>
        <p className={styles.desc}>
          A family is attacked by demons and only two members survive - Tanjiro
          and his sister Nezuko, who is turning into a demon slowly. Tanjiro
          sets out to become a demon slayer to avenge his family and cure his
          sister.
        </p>
        <Button url="portfolio" text="Click To View More"/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img}>
        </Image>
      </div>
    </div>
  );
}
