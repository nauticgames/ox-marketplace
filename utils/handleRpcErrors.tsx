import toast from "react-hot-toast";

const handleRpcErrors = (error) => {
  if (error.error && error.error.code && error.error.code === -32603) {
    error.error.data &&
      toast.error(
        error.error.data.originalError.message.replace(
          "execution reverted: ",
          ""
        )
      );
  } else {
    return;
  }
};

export default handleRpcErrors;
