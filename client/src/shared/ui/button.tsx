type ButtonProps = {
  name: string;
  onClick?: () => void;
};
export default function Button({name, onClick}: ButtonProps) {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {name}
    </button>
  );
}
