import { Toaster as ReactHotToaster } from "react-hot-toast";

export const Toaster = () => {
  return (
    <ReactHotToaster
      toastOptions={{
        style: {
          backgroundColor: "#1f2937",
          border: "1px solid #374151",
          color: "#f8fafc",
        },
        position: "top-center",
      }}
    />
  );
};
