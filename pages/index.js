import Head from 'next/head';
import Image from 'next/image';
import {
    Jam,
    Toolbox,
} from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {

    // debugger;

    return (
        <div className={styles.container}>
            <Head>
                <title>CoralJam</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div>CoralJam</div>
                <div>Untitled</div>
                <div>Zoom</div>
            </header>
            <main className={styles.main}>
                <Jam />
            </main>
            <footer className={styles.footer}>
                <Toolbox />
            </footer>
        </div>
    )
}
