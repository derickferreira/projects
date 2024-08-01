import { useState, useEffect } from "react";

type ItemProp = {
  id: number;
  title: string;
  description: string;
  price: string;
  riskPrice: string;
  imageURL: string;
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<ItemProp[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);

  return { data };
};
