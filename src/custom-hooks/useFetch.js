import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [statusText, setStatusText] = useState("loading...");

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw Error(res.status + " " + res.statusText);
          }
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
        })
        .catch((err) => {
          setStatusText(err.message);
        });
    }, 1000);
  }, [url]);
  return { data, isPending, statusText };
};
export default useFetch;
