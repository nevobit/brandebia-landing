import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h3>Brandebia</h3>
          <nav className={styles.nav}>
            <Link href="/courses">Inicio</Link>
            <Link href="/services">Servicios</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/contact">Contacto</Link>
          </nav>
        </div>

        <button
          className={styles.menu}
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <svg fill='#333' className={styles.hamburger} viewBox="0 0 100 100" width="25">
            <rect
              className={`${styles.line} ${styles.top}`}
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className={`${styles.line} ${styles.middle}`}
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"

            ></rect>
            <rect
              className={`${styles.line} ${styles.bottom}`}
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"

            ></rect>
          </svg>
        </button>
        <button>Asesoria Gratuita</button>
      </div>
    </header>
  );
};

export default Header;
