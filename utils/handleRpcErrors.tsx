import toast from "react-hot-toast";

const environment = process.env.NODE_ENV;

const handleRpcErrors = (error) => {
  switch (environment) {
    case "development":
      if (error.error && error.error.code === -32603) {
        const { originalError } = error.error.data;

        toast.error(originalError.message.replace("execution reverted: ", ""));
      } else {
        return;
      }
    case "production":
      if (error.code && error.code === -32603) {
        const { message } = error.data;

        return toast.error(message.replace("execution reverted: ", ""));
      }

    default:
      return;
  }
};

export default handleRpcErrors;
