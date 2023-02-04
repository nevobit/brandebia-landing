import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>

        <h3>Brandebia</h3>
        <nav>
          <Link href="/courses">Inicio</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">Nosotros</Link>
          <Link href="/contact">Contacto</Link>
        </nav>
        </div>


        <button>Asesoria Gratuita</button>
      </div>
    </header>
  );
};

export default Header;
