import toast from "react-hot-toast";

const handleRpcErrors = (error) => {
  if (error.error && error.error.code === -32603) {
    const data = error.error.data;

    data && data.originalError
      ? toast.error(
          data.originalError.message.replace("execution reverted: ", "")
        )
      : toast.error(data.message.replace("execution reverted: ", ""));
  } else {
    return;
  }
};

export default handleRpcErrors;
