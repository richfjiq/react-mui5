import { FC } from 'react';
import { Alert, AlertColor, Snackbar, Typography } from '@mui/material';

type NotificationProps = {
  open: boolean;
  msg: string | undefined;
  severity: AlertColor | undefined;
  handleClose: () => void;
};

export const Notification: FC<NotificationProps> = ({
  open,
  msg,
  severity,
  handleClose,
}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={400}
      open={open}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        <Typography>{msg}</Typography>
      </Alert>
    </Snackbar>
  );
};
