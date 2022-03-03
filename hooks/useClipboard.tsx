import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = (ref) => {
    if (copied) return;
    CopyClipboard(ref);
    setCopied(true);
  };

  const CopyClipboard = (ref) => {
    const el = document.createElement("textarea");
    el.value = ref.current.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  useEffect(() => {
    if (copied) {
      toast.success("Copied to clipboard", {
        duration: 2000,
      });
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return { copy, copied };
};

export default useClipboard;
