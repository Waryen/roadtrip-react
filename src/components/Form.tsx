import React, { forwardRef } from 'react';
import styled from 'styled-components';

type FormProps = {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  range: number;
  setRange: React.Dispatch<React.SetStateAction<number>>;
  handleReset: () => void;
  handleSubmit: () => void;
};

const SForm = styled.form`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div: {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-evenly;
  };
  label: {
    font-size: 1.25rem;
    margin: 0.5rem;
  };
  input: {
    border: #4437ff solid 2px;
    border-radius: 10px;
    padding: 0.25rem;
  };
  button: {
    border: #ff416c solid 2px;
    border-radius: 10px;
    padding: 0.5rem;
    font-size: 1.25rem;
  }
`;

export const Form = forwardRef<HTMLInputElement, FormProps>((props, ref) => {
  const {
    handleReset,
    range,
    destination,
    setDestination,
    setRange,
    handleSubmit,
  } = props;

  return (
    <SForm>
      <div>
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          name="destination"
          value={destination}
          onChange={({ target: { value } }) => setDestination(value)}
          ref={ref}
        />
      </div>
      <div>
        <label htmlFor="range">Range</label>
        <input
          type="number"
          name="range"
          value={range}
          onChange={({ target: { value } }) => setRange(parseInt(value))}
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleReset();
          }}
        >
          Reset
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Send
        </button>
      </div>
    </SForm>
  );
});

export default Form;
