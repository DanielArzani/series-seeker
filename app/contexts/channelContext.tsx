import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { getChannel } from '../lib/api/getChannel';
import { YouTubeChannel } from '../lib/types/ChannelType';

type ChannelContextType = YouTubeChannel | null;

const ChannelContext = createContext<ChannelContextType>(null);

interface ChannelProviderProps {
  children: ReactNode;
}

export const ChannelProvider: React.FC<ChannelProviderProps> = ({
  children,
}) => {
  const [channel, setChannel] = useState<ChannelContextType>(null);

  useEffect(() => {
    const fetchChannel = async () => {
      const result = await getChannel('UCzpl6CJP6lo5vjsEAeIHnsg');
      setChannel(result);
    };

    fetchChannel();
  }, []);

  return (
    <ChannelContext.Provider value={channel}>
      {children}
    </ChannelContext.Provider>
  );
};

// Custom hook to use the channel context
export const useChannel = (): ChannelContextType => useContext(ChannelContext);
