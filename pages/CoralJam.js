import Head from 'next/head';
import Image from 'next/image';
import { DrawableOverlay } from "react-drawable-overlay";
import {
    WhiteboardProvider,
} from '../hooks';
import {
    Whiteboard,
    Toolbox,
} from '../components';
import styles from '../styles/CoralJam.module.css';

export default function CoralJam() {

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
            <WhiteboardProvider>
                <DrawableOverlay initialInDrawMode defaultBrushColor="#000">
                    <main className={styles.main}>
                        <Whiteboard />
                    </main>
                </DrawableOverlay>
                <footer className={styles.footer}>
                    <Toolbox />
                </footer>
            </WhiteboardProvider>
        </div>
    )
}
