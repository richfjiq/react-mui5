import { useState } from 'react';
import { AlertColor } from '@mui/material';

import { Notification } from '../components';
import { NotificationContext } from './NotificationContext';

interface props {
  children: JSX.Element | JSX.Element[];
}

export const NotificationProvider = ({ children }: props) => {
  const [msg, setMsg] = useState<string>();
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>();

  const handleClose = () => {
    setOpen(false);
  };

  const getError = (msg: string) => {
    setOpen(true);
    setMsg(msg);
    setSeverity('error');
  };

  const getSuccess = (msg: string) => {
    setSeverity('success');
    setOpen(true);
    setMsg(msg);
  };

  const value = {
    getError,
    getSuccess,
  };

  return (
    <NotificationContext.Provider value={value}>
      <Notification
        handleClose={handleClose}
        open={open}
        severity={severity}
        msg={msg}
      />
      {children}
    </NotificationContext.Provider>
  );
};
