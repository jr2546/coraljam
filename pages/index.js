import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DrawableOverlay } from "react-drawable-overlay";
import {
    Jam,
    Toolbox,
} from '../components';
import styles from '../styles/Home.module.css';

export default function Home() {

    const router = useRouter();

    const handleClickEnter = (e) => {
        e.preventDefault();
        router.push('/CoralJam');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>CoralJam</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>CoralJam</h1>
                <input type="text" name="Name" />
                <input type="text" name="Room" />
                <button onClick={handleClickEnter}>Enter</button>
            </main>
        </div>
    );
}
