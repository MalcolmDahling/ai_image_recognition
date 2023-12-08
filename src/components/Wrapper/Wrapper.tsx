import { WrapperStyle } from './Wrapper.css';

type props = {
  children: React.ReactNode;
};

export default function Wrapper(props: props) {
  return <div className={WrapperStyle()}>{props.children}</div>;
}
