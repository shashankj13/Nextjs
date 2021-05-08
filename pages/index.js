import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | list </title>
        <meta name="keyword" content="HELLO"></meta>
      </Head>
        <div>
          <h1 className={styles.title}> HOMEPAGE </h1>
          <p className={styles.text}>
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. Why do we use it? It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout.
          </p>
          <p className={styles.text}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old
          </p>
          <Link href="/list">
            <a className={styles.btn}>See List </a>
          </Link>
          <Footer />
        </div>
    </>
  );
}
