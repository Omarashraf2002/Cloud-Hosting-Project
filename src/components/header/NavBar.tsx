"use client"
import Link from "next/link";
import styles from "./Header.module.css"
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function NavBar() {
  const[toggle, setToggle] = useState(false)
  
  return (
    <div>
                <nav className={styles.navBar}>
            <div>
            <Link href="/" className={styles.logo}>Cloud <GrTechnology /> Hosting</Link>
            </div>
            <div className={styles.menu}>
            <CiMenuBurger onClick={() => setToggle(prev => !prev)} />
            </div>
          <div className={styles.navLinksWraper} style={{
            clipPath: toggle && " polygon(0 0, 100% 0, 100% 100%, 0 100%)" || "" }} >
          <ul className={styles.navLinks}>
                <Link className={styles.navLink} href="/">Home</Link>
                <Link className={styles.navLink} href="/articles">Articles</Link>
                <Link className={styles.navLink} href="/about">About</Link>
                <Link className={styles.navLink} href="/admin">Admin Dashboard</Link>
            </ul>
          </div>
        </nav>
    </div>
  )
}
