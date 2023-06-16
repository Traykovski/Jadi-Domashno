import React, { createContext, useEffect, useState } from "react";

export interface MenuInterface {
  id: string;
  name: string;
  price: number;
  meal: string;
  available: string;
  image: string;
  description: string;
  ingridients: string;
  nutrition: string;
  alergies: string;
  alergeni: string;
  delivery_icon: string;
  delivery: string;
  time_to_prep: string;
  cookId: string;
  cook_avatar: string;
  reviews: number;
  button_title: string;
  reviewsList: {
    id: number;
    author: string;
    comment: string;
    stars: number;
  }[];
}

interface ContextData {
  menu: MenuInterface[];

  filteredByName: (name: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const Context = createContext({} as ContextData);

export const Provider = ({ children }: Props) => {
  const [menu, setMenu] = useState<MenuInterface[]>([]);
  const [filteredName, setFilteredName] = useState<MenuInterface[]>([]);

  useEffect(() => {
    // fetch("http://localhost:8000/menu")
    fetch("https://jadi-domashno-json.onrender.com/menu")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMenu(data);
      });
  }, []);

  const filteredByName = (name: string) => {
    if (menu) {
      setFilteredName(menu.filter((n) => n.name === name));
    }
    console.log(filteredName);
  };

  useEffect(() => {
    if (menu) {
      setFilteredName(menu);
    }
  }, [menu]);

  return (
    <Context.Provider
      value={{
        menu,
        filteredByName,
      }}
    >
      {children}
    </Context.Provider>
  );
};
