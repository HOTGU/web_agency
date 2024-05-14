"use client";

import { useFormState } from "react-dom";

import Button from "@/components/forms/formButton";
import { FormHTMLAttributes, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import Lottie from "../lottie";
import ErrorJson from "@public/animation/error.json";

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  action: any;
  secondaryButtonLabel?: string;
  secondaryAction?: any;
  children: React.ReactNode;
  buttonLabel: string;
}

const ErrorModal = ({
  isError,
  close,
  message,
}: {
  isError: boolean;
  close: () => void;
  message: string;
}) => {
  return (
    <AnimatePresence>
      {isError ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-screen h-screen bg-black/70 flex items-center justify-center z-50"
          onClick={close}
        >
          <motion.div
            initial={{ y: 400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 400, opacity: 1 }}
            className="min-w-72 max-w-96 bg-white rounded-lg relative px-8 py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <FaTimes
                className="absolute top-4 left-4 cursor-pointer"
                onClick={close}
              />
              <Lottie data={ErrorJson} width={80} height={80} />
              <span className="text-red-600 text-lg font-bold">{message}</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

const Form = ({
  action,
  children,
  buttonLabel,
  secondaryAction,
  secondaryButtonLabel,
  ...rest
}: IForm) => {
  const [state, formAction] = useFormState(action, {
    error: null,
  });
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Boolean(state.error) ? setIsError(true) : setIsError(false);
  }, [state]);

  const close = () => setIsError(false);

  return (
    <form action={formAction} {...rest}>
      {children}
      {state.error && (
        <ErrorModal isError={isError} close={close} message={state.error} />
      )}
      <Button label={buttonLabel} />
    </form>
  );
};

export default Form;
