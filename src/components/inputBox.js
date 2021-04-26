const InputBox = ({ value, setter }) => {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setter(e.target.value);
        }}
      />
    </div>
  );
};

export default InputBox;
