import React, {
    useContext,
    useState,
} from 'react';

export const Configuration = React.createContext()
export const ConfigurationProvider = Configuration.Provider;
export const useConfiguration = () => useContext(Configuration);
