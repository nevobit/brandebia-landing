import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
         <div className={styles.container_social}>
  
  <p>Brandebia</p>
  <div>
    <Link href="/terms" ><i className='bx bxl-instagram'></i></Link>
    <Link href="/policy" ><i className='bx bxl-facebook'></i></Link>
    <Link href="/" ><i className='bx bxl-tiktok' ></i></Link>
  </div>
  </div>
    <div className={styles.container}>
  
      <p>&copy; 2023 Brandebia. Todos los derechos reservados.</p>
      <div>
        <Link href="/terms" >Terminos y condiciones</Link>
        <Link href="/policy" >Politica de privacidad</Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
