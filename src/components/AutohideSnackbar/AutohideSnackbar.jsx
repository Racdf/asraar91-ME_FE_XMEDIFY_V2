import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function AutohideSnackbar({ open, setOpen, message }) {
    const closeHandler = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const origin = { vertical: 'bottom', horizontal: 'center' };

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={closeHandler}
            anchorOrigin={origin}
        >
            <Alert
                onClose={closeHandler}
                icon={false}
                sx={{ bgcolor: 'primary.green', color: '#fff' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
