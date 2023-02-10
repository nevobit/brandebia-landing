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
            <h4>Agencia de Social Ads & Marketing</h4>
            <h2>ESCALA MAS RAPIDO, CON MARGENES SANOS Y CUIDANDO TU MARCA</h2>
            <h4>Con menos estres y mas estabilidad.</h4>
            <button>HABLEMOS <i className='bx bx-right-arrow-alt'></i></button>          
        </div>
      </section>
      <section className={styles.section_clients}>
        
        <h2>Clientes que han escalado con nosotros</h2>
          
        <ul>
        <li><Image style={{ filter: 'invert(1)'  }} width={150} height={50} src="/img/brands/prooving.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={60} height={50} src="/img/brands/helebba.svg" alt="" /></li>
          <li><Image style={{ filter: 'invert(1)'  }} width={50} height={50} src="/img/brands/houlob.png" alt="" /></li>
          <li><Image width={150} height={50} src="/img/brands/partiaf.svg" alt="" /></li>
        </ul> 
      </section>

      <section className={styles.operation}>
        <div>
          <h2>Operamos en la intersección de la ciencia y el estilo.</h2>
          <p>Lo ayudamos a desbloquear sus bucles de crecimiento únicos y ponerlos en acción con marcos y estrategias que impulsan un crecimiento rápido y maximizan el potencial de ingresos.</p>
        </div>
        <div>
          <Image src='/workflow.svg' width={400} height={400} />
        </div>
      </section>
      <section className={styles.section_timeline}>
        <h2>Asi es como trabajamos</h2>

        <div className={styles.timeline}>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-tachometer'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Onboarding completo de 60 minutos y primera llamada de estrategia</h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bxs-coffee-bean'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Set-Up de tus cuentas publicitarias,  pixeles, conversion api y accesos a activos</h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-phone-call' ></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Llamada de tomo de Marca Y Strategy Call</h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-copy-alt'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Creacion de la estructura de mensajes y copys. <br />
                Propuesta creativa + Creative Workshop
              </h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-tachometer'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Implementacion del sistema de campanas en las plataformas publicitarias</h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-planet'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Fase de testing de audiencias, angulos, creatividades y copys.</h2>
            </div>
          </div>
          <div className={styles.timeline_event}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bxs-report'></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Optimizacion diaria, semanal, bi-semanal y mensual del sistema de campanas.</h2>
            </div>
          </div>
          <div className={`${styles.timeline_event} ${styles.time_type_last}`}>
            <div className={styles.timeline_event_icon}>
              <i className='bx bx-analyse' ></i>
            </div>
            <div className={styles.timeline_event_content}>
              <h2>Reportar, analizar e iterar junto al cliente.</h2>
            </div>
          </div>
        </div>
      </section>


      {/* <section>
        <h2>¿VAMOS A ENCAJAR?</h2>
        <p>La realidad es que no encajamos con la mayoria de negocios.</p>
        <div>
          <div>
              <h3>TRABAJAMOS CON</h3>
              <ul>
                <li>Negovios que quieran doblar sus ingresos</li>
                <li>Ecommerce que ya facturen al mes</li>
                <li>Empresas educativas con una mision y producto solido</li>
                <li>SaaS que ya facturen</li>
                <li>Marcas con el foco en s cliente y producto/servicio</li>
                <li>Negocios que operan de forma etica y responsable</li>
              </ul>
          </div>
          <div>
              <h3>NO TRABAJAMOS CON</h3>
              <ul>
                <li>Nogocios que no facturan</li>
                <li>Dropshippers o "shifty products"</li>
                <li>Tiendas multimarca con margenes bajos</li>
                <li>Cualquier multinivel</li>
                <li>Pequenos negocios locales de baja facturacion</li>
                <li>Micromanagers, personas pasivoagresivas, que no les gusten sus clientes o con un ego inflado.</li>
              </ul>
          </div>

          <h3>¿ESTAMOS EN SINTONÍA?</h3>
          <button>HABLEMOS</button>
        </div>
      </section> */}

      {/* <section>
        <h2>Conoce a nuestros creativos</h2>
        <p>Construya un lugar de trabajo increíble y haga crecer su negocio con contenido increíble</p>
        <div>

        </div>
      </section> */}

      {/* <section className={styles.section}>
      
        <h2>"NO SOBREVIVE LA ESPECIE MAS FUERTE. TAMPOCO LA MAS INTELIGENTE. SOBREVIVE LA QUE SE ADAPTA MEJOR AL CAMBIO.</h2>
        <p>CHARLES DARWIN</p>
      </section> */}

      <section className={styles.newsletter}>
        <h2>Suscribete a nuestra newsletter para obtener las ultimas noticias y estadisticas.</h2>
        <form>
          <input type="email" placeholder='Ingresa tu correo' />
          <button type='submit'>Suscribirse</button>
        </form>
      </section>
    </Layout>
  );
};

export default Home;
