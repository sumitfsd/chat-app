interface PropsData {
  type?: string;
  value: string;
  placeholder: string;
  onChangeHandler: (value: string) => void;
  onKeyPressHandler?: (event: React.KeyboardEvent<HTMLInputElement>) => any;
}

export const Input: React.FC<PropsData> = ({
  type,
  value,
  placeholder,
  onChangeHandler,
  onKeyPressHandler,
}) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e.target.value)}
      onKeyPress={onKeyPressHandler}
    />
  );
};
