import React from 'react';
import {
    WebrtcProvider,
} from 'y-webrtc';
import {
    useProviders,
} from './useProviders';

export const useWebRtc = (room, doc) => {

  const providers = useProviders();

  const existingProvider = providers.get(WebrtcProvider)?.get(room);

  return React.useMemo(
    () => {
      if (existingProvider !== undefined) {
        return existingProvider
      } else {
        const provider = new WebrtcProvider(room, doc)

        if (!(providers.has(WebrtcProvider))) {
          providers.set(WebrtcProvider, new Map())
        }

        providers.get(WebrtcProvider)?.set(room, provider)

        return provider
      }
    },
    [existingProvider],
  );
}
