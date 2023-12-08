import React from 'react';
import { SelectImageButtonStyle, SelectImageFormStyle, SelectImageInputStyle } from './SelectImage.css';

type props = {
  setImageUrl: (input: string) => void;
};

export default function SelectImage(props: props) {
  function handleSubmit(e: any) {
    e.preventDefault();

    props.setImageUrl(e.target[0].value);
  }

  function handleFocus(e: any) {
    e.target.select();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={SelectImageFormStyle()}
    >
      <input
        className={SelectImageInputStyle()}
        placeholder="Skriv din bildlänk här"
        onFocus={handleFocus}
      ></input>
      <button className={SelectImageButtonStyle()}>Välj bild</button>
    </form>
  );
}
