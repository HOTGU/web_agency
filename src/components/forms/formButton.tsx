import React from "react";
import { useFormStatus } from "react-dom";

const Button = ({ label }: { label: string }) => {
  const status = useFormStatus();

  return (
    <button
      disabled={status.pending}
      className=" h-12 w-full flex items-center justify-center rounded-md border bg-purple-700 text-white disabled:bg-slate-200 hover:bg-purple-600 transition"
    >
      {status.pending ? (
        <div className="border-white h-5 w-5 animate-spin rounded-full border-2 border-t-purple-900" />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
