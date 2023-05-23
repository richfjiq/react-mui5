import { createContext } from 'react';

type ContextProps = {
  getError: (msg: string) => void;
};

export const NotificationContext = createContext<ContextProps>(
  {} as ContextProps
);
