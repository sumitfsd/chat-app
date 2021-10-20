interface PropsData {
  onChangedHandler: () => void;
  className?: string;
  text: string;
}

export const Button: React.FC<PropsData> = ({
  onChangedHandler,
  className,
  text,
}) => {
  return (
    <button onClick={onChangedHandler} className={className}>
      {text}
    </button>
  );
};
