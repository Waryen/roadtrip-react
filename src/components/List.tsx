import React from 'react';
import styled from 'styled-components';

type ListProps = {
  items: { destination: string; range: number }[];
};

const SUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  li: {
    margin: 0.25rem;
    padding: 0.25rem;
    background-color: #fff;
  };
  h3: {
    font-size: 1.25rem;
    font-weight: bold;
  };
  span: {
    font-style: italic;
  }
`;

export default function List({ items }: ListProps) {
  if (!items || items.length === 0)
    return <span>There are no items to display...</span>;

  return (
    <SUl>
      {items.map((item) => (
        <li key={item.destination}>
          <h3>{item.destination}</h3>
          <span>{item.range}</span>
        </li>
      ))}
    </SUl>
  );
}
