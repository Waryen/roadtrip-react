import React, { createRef, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import List from './components/List';

const SDiv = styled.div`
  margin: 1.5rem;
  padding: 1rem;
  background-color: #262626;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  h1: {
    font-size: 2rem;
    font-weight: bold;
  };
`;

export default function App() {
  const [destination, setDestination] = useState("");
  const [range, setRange] = useState(0);
  const [items, setItems] = useState<{ destination: string; range: number }[]>(
    []
  );

  const destinationNode = createRef<HTMLInputElement>();

  const handleReset = () => {
    localStorage.removeItem("items");
    setItems([]);
  };

  const handleSubmit = () => {
    const newItem = {
      destination,
      range,
    };
    const newList = [...items, newItem];
    localStorage.setItem("items", JSON.stringify(newList));
    setItems(newList);
    setDestination("");
    setRange(0);
    destinationNode.current?.focus();
  };

  useEffect(() => {
    const fetchedItems = localStorage.getItem("items");
    if (!fetchedItems || fetchedItems.length === 0) return;
    setItems(JSON.parse(fetchedItems));
  }, [setItems]);

  const totalRange = useMemo(() => {
    const ranges = items.map((item) => item.range);
    return ranges.reduce((previousValue, currentValue) =>
      previousValue + currentValue
    , ranges[0])
  }, [items])

  return (
    <SDiv>
      <h1>Roadtrip</h1>
      <Form
        destination={destination}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
        range={range}
        setDestination={setDestination}
        setRange={setRange}
        ref={destinationNode}
      />
      <List items={items} />
      {totalRange && (
        <span>Total: {totalRange}</span>
      )}
    </SDiv>
  );
}
