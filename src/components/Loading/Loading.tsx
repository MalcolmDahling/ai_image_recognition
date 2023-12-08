import Spinner from '../../../public/spinner.svg';
import { LoadingDivStyle, LoadingParagraphStyle } from './Loading.css';

export default function Loading() {
  return (
    <div className={LoadingDivStyle()}>
      <Spinner></Spinner>
      <p className={LoadingParagraphStyle()}>Laddar ned data (60 MB)...</p>
    </div>
  );
}
