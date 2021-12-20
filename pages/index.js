import {
    useRef,
} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
    useRouter,
} from 'next/router';
import {
    Jam,
    Toolbox,
} from '../components';
import {
    useUser,
    useProviders,
} from '../hooks';
import styles from '../styles/Home.module.css';

import {
    WebrtcProvider,
} from 'y-webrtc';

export default function Home() {

    const {
        setUser,
    } = useUser();
    const {
        providers,
    } = useProviders();
    const router = useRouter();
    const usernameInputRef = useRef();
    const roomInputRef = useRef();

    debugger;

    const rooms = providers.get(WebrtcProvider);

    const handleClickEnter = (e) => {

        e.preventDefault();

        const username = usernameInputRef.current.value;
        const room = roomInputRef.current.value;

        setUser(username);

        router.push('/coraljam');
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>CoralJam</title>
                <meta name="description" content="" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <img src="/coralreef.svg" width={100} height={100}/>
                <h1>CoralJam</h1>
                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <div className={styles.label}>Username</div>
                        <input type="text" name="Name" ref={usernameInputRef} />
                    </div>
                    <div className={styles.input}>
                        <div className={styles.label}>Room</div>
                        <input type="text" name="Room" ref={roomInputRef} />
                        <pre>{JSON.stringify(rooms, null, 2)}</pre>
                    </div>
                </div>
                <button onClick={handleClickEnter}>Enter</button>
            </main>
        </div>
    );
}
