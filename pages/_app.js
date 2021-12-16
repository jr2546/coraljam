import {
    ConfigurationProvider,
    ThingsProvider2,
} from '../hooks';
import {
    defaultRoom,
} from '../constants';
import '../styles/globals.css'

const tools = [
    {
        label: 'One',
        component: 'OneTool',
    },
    {
        label: 'Two',
        component: 'TwoTool',
    },
    {
        label: 'Three',
        component: 'ThreeTool',
    },
];

const configuration = {
    defaultRoom,
    tools,
    providers: new Map(),
};

function SafeHydrate({
    children,
},
) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

function MyApp({ Component, pageProps }) {

    return (
        <SafeHydrate>
            <ConfigurationProvider value={configuration}>
                <ThingsProvider2>
                    <Component {...pageProps} />
                </ThingsProvider2>
            </ConfigurationProvider>
        </SafeHydrate>
    );
}

export default MyApp;
