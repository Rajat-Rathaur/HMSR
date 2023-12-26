import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isSnackbarOpenState, snackbarMessageState, snackbarTypeState } from '../recoil/state';

export const useSnackbar = () => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useRecoilState(isSnackbarOpenState);
    const [snackbarMessage, setSnackbarMessage] = useRecoilState(snackbarMessageState);
    const [snackbarType, setSnackbarType] = useRecoilState(snackbarTypeState);


    const handleSnackbarOpen = (message, type = 'info') => {
        setSnackbarMessage(message);
        setIsSnackbarOpen(true);
        setSnackbarType(type);
    };

    const handleSnackbarClose = () => {
        setIsSnackbarOpen(false);
    };

    return {
        isSnackbarOpen,
        snackbarMessage,
        snackbarType,
        handleSnackbarOpen,
        handleSnackbarClose,
    };
};
