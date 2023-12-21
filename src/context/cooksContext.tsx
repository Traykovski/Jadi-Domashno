import React, { createContext, useEffect, useState } from "react";

export interface CooksInterface {
  id: string;
  avatar: string;
  image: string;
  img: string;
  first_name: string;
  last_name: string;
  about_me: string;
  description: string;
  phone: string;
  comments: string;
  //   food: string[];
  food_type_one: string;
  food_type_two: string;
  food_type_three: string;
  button_title_one: string;
  button_title_two: string;
  icon: string;
  food_icon: string;
  stars: number;
}

interface ContextData {
  cooks: CooksInterface[];
}

interface Props {
  children: React.ReactNode;
}

export const Context = createContext({} as ContextData);

export const Provider = ({ children }: Props) => {
  const [cooks, setCooks] = useState<CooksInterface[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/cooks")
    fetch("https://jadi-domashno.onrender.com/cooks")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCooks(data);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        cooks,
      }}
    >
      {children}
    </Context.Provider>
  );
};
