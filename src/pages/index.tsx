import Layout from '@/components/Layout';
import SEO from '@/components/seo/seo';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Layout title="Inicio">
      <section className={styles.banner}>
        <div className={styles.container}>
          <div>
            <h2>La creatividad comienza con ver el mundo entero de manera diferente</h2>
            {/* <h2>Experiencias entre marcas y personas</h2> */}
            {/* <p>
              Somos una agencia digital experta en creacion de marca ayudando a
              las empresas a alcanzar sus objetivos de forma sostenible. creamos
              puntos de contacto que inspiran y sorprenden a lo largo de todo el
              recorrido del cliente.
            </p> */}
            <p>Una agencia de servicios con satisfacción del cliente</p>
            {/* <div className={styles.input}>
              <input type="text" placeholder="Correo Electronico" />
              <button>Empezar ahora</button>
            </div> */}
            <button>Asesoria Gratis</button>
          </div>
          <Image src='/img/banner-illustration.png' alt="illustration" width={1084} height={563} />
          <div>

          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.animate}>

        <ul>
          <li><Image  style={{ filter: 'invert(1)'}} width={150} height={50}  src="/img/brands/helebba.svg" alt="" /></li>
          <li><Image  style={{ filter: 'invert(1)'}} width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>
          <li><Image  width={150} height={50} src="/img/brands/partiaf.svg" alt="" /></li>
          <li><Image  style={{ filter: 'invert(1)'}} width={150} height={50} src="/img/brands/prooving.svg" alt="" /></li>
        </ul>
        <ul>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/helebba.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>
          <li><Image width={150} height={50} src="/img/brands/partiaf.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/prooving.svg" alt="" /></li>
        </ul>
        <ul>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/helebba.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>
          <li><Image width={150} height={50} src="/img/brands/partiaf.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/prooving.svg" alt="" /></li>
        </ul>
        <ul>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/helebba.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>
          <li><Image width={150} height={50} src="/img/brands/partiaf.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/prooving.svg" alt="" /></li>
        </ul>
        </div>

      </section>

      <section className={styles.section_alt}>
        <h2>Grow yotu business with the best online marketing company</h2>
      </section>

      <section className={styles.section_spike}>
        <h2>Our Cutting Edge Digital Marketing Services</h2>
      </section>
    </Layout>
  );
};

export default Home;
