

interface IButton {
  title: string;
}
const Button: React.FC<IButton> = ({ title }) => {
  return <button>{title}</button>
}

export default Button;