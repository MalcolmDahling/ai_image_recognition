import { PredictionParagraphStyle } from './Prediction.css';

type props = {
  prediction?: number;
  accuracy?: number;
};

export default function Prediction(props: props) {
  if (props.prediction && props.accuracy) {
    return (
      <p className={PredictionParagraphStyle()}>
        Det finns {props.prediction} {props.prediction === 1 ? 'älg' : 'älgar'} i bilden med {props.accuracy}% säkerhet.
      </p>
    );
  } else return null;
}
