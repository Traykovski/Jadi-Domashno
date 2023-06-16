import React from "react";
import NavBar from "./NavBar/NavBar";

interface Props {
  setSearchTerm: (value: string) => void;
  value: string;
}

export default function Header({ setSearchTerm, value }: Props) {
  return (
    <>
      <NavBar setSearchTerm={setSearchTerm} value={value} />
    </>
  );
}
