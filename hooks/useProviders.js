import {
    useConfiguration,
} from './index';

export const useProviders = (
) => {

    const {
        providers,
    } = useConfiguration();

    if (providers === null) {
        throw new Error(
            'Could not retrieve a set of providers. Please wrap in a ConfigurationProvider.'
        );
    }

    return {
        providers,
    };
};
