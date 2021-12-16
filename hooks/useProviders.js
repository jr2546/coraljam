import React, {
    useContext,
} from 'react';
import {
    useConfiguration,
    useThings2,
} from './index';

export const useProviders = () => {

    const { providers } = useConfiguration();

    if (providers !== null) {
        return providers;
    }

    throw new Error(
        'Could not retrieve a set of providers. Please wrap in a DocumentProvider.'
    );
};
