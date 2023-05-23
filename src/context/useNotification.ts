import { useContext } from 'react';

import { NotificationContext } from './';

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('Context does not exist.');
  return context;
};
