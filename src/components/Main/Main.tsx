import { MainStyle } from './Main.css';

type props = {
  children?: React.ReactNode;
};

export default function Main(props: props) {
  return <main className={MainStyle()}>{props.children}</main>;
}
