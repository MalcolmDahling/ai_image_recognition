import React from 'react';
import { TrainFormInputStyle, TrainFormStyle } from './TrainForm.css';
import { pixelData } from '@/pages';
import axios from 'axios';

type props = {
  pixelArr: pixelData[];
};

export default function TrainForm(props: props) {
  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await axios.post('/api/train', { trainValue: e.target[0].value, pixelArr: props.pixelArr });

    console.log('Training amount:', res.data);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={TrainFormStyle()}
    >
      <input
        type="number"
        className={TrainFormInputStyle()}
        placeholder="Enter number"
      ></input>
      <button>TRAIN</button>
    </form>
  );
}
