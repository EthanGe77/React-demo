import Button from './button';

const Controller = ({ setResult, left, right }) => {
  return (
    <div>
      <Button
        label="+"
        onClick={() => {
          setResult(parseInt(left) + parseInt(right));
        }}
      />
      <Button
        label="-"
        onClick={() => {
          setResult(parseInt(left) - parseInt(right));
        }}
      />
      <Button
        label="*"
        onClick={() => {
          setResult(parseInt(left) * parseInt(right));
        }}
      />
      <Button
        label="/"
        onClick={() => {
          setResult(parseInt(left) / parseInt(right));
        }}
      />
    </div>
  );
};

export default Controller;
