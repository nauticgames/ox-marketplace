import toast from "react-hot-toast";

const HandleRPCErrors = (error) => {
  try {
    if (error.code !== -32603) return;
    const { message } = error.data || null;

    return toast.error(message.replace("execution reverted: ", ""));
  } catch (error) {
    return toast.error("Han error has ocurred, please refresh");
  }
};

export default HandleRPCErrors;
