import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Learn Next js</h1>
        <Link href="/about">About Us</Link>
      </main>
    </div>
  );
}
