import toast from "react-hot-toast";

const handleRpcErrors = (error) => {
  try {
    if (error.code !== -32603) return;
    const { message } = error.data || null;

    return toast.error(message.replace("execution reverted: ", ""));
  } catch (error) {
    return;
  }
};

export default handleRpcErrors;
