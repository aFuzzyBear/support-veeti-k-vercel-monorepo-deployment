import { toast } from "react-hot-toast";

export const ToastButton = () => (
  <button
    className="bg-gray-700 rounded-md p-2 border-[1px] border-gray-500"
    onClick={() => toast.success("Here's your toast")}
  >
    Get me a toast!
  </button>
);
