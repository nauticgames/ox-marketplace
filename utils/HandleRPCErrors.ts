import toast from "react-hot-toast";
import { IRpcError } from "../types/Utils";

const HandleRPCErrors = (error: IRpcError) => {
  try {
    if (error.code !== -32603) return;
    const { message } = error.data || null;

    return toast.error(message.replace("execution reverted: ", ""));
  } catch (error) {
    return toast.error("Han error has ocurred, please refresh");
  }
};

export default HandleRPCErrors;
