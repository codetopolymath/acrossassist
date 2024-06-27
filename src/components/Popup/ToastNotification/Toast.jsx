// Toast.js
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

const Toast = () => {
  const dispatch = useDispatch();
  const successMessage = useSelector((state) => state.toastReducer.successMessage);
  const errorMessage = useSelector((state) => state.toastReducer.errorMessage);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch({ type: 'RESET_SUCCESS_MESSAGE' });
    }

    if (errorMessage) {
      toast.error(errorMessage);
      dispatch({ type: 'RESET_ERROR_MESSAGE' });
    }
  }, [successMessage, errorMessage, dispatch]);

  return <ToastContainer autoClose={5000} />;
};

export default Toast;
