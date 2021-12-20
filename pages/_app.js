import {
    ConfigurationProvider,
    LoggerProvider,
    UserProvider,
} from '../hooks';
import {
    tools,
    defaultRoom,
} from '../constants';
import '../styles/globals.css'

const configuration = {
    defaultRoom,
    tools,
    providers: new Map(),
};

function SafeHydrate(
    {
        children,
    },
) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp(
    {
        Component,
        pageProps,
    },
) {

    return (
        <SafeHydrate>
            <ConfigurationProvider value={configuration}>
                <LoggerProvider>
                    <UserProvider>
                        <Component {...pageProps} />
                    </UserProvider>
                </LoggerProvider>
            </ConfigurationProvider>
        </SafeHydrate>
    );
}

export default MyApp;
