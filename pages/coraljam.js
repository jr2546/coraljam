import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DrawableOverlay } from "react-drawable-overlay";
import {
    WhiteboardProvider,
    useUser,
} from '../hooks';
import {
    Whiteboard,
    Toolbox,
} from '../components';
import styles from '../styles/CoralJam.module.css';

export default function CoralJam() {

    const {
        user,
    } = useUser();
    const router = useRouter();

    if (!user) {
        router.push('/');
    }

    const handleAddToHistory = (obj) => {
        debugger;
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>CoralJam</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <WhiteboardProvider>
                <div className={styles.header}>
                    <div className={styles.app}>
                        <img className={styles.logo} src="/coralreef.svg" width={15} height={15} />
                        <div className={styles.name}>CoralJam</div>
                    </div>
                    <div className={styles.save}>Untitled</div>
                    <div className={styles.user}>{user}</div>
                </div>
                <DrawableOverlay initialInDrawMode defaultBrushColor="#000" onAddToHistory={handleAddToHistory}>
                    <main className={styles.main}>
                        <Whiteboard />
                    </main>
                </DrawableOverlay>
                <div className={styles.footer}>
                    <Toolbox />
                </div>
            </WhiteboardProvider>
        </div>
    )
}
