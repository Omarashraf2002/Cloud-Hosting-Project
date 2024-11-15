import Link from "next/link";
import styles from "./Header.module.css"
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className={styles.header}>
        <NavBar />
        <div className={styles.right}>
        <Link className={styles.btn} href="/login">Login</Link>
        <Link className={styles.btn} href="/register">Register</Link>

        </div>
    </header>
  )
}
