import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
    return () => (document.title = "Pizza Slice | Fresh, Hot, and Delicious.");
  }, [title]);
};

export default useTitle;
