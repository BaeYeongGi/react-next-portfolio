import React from 'react';
import styled from "styled-components";

const List = styled.ul`
  display:flex;
`;

const Intro = () => {
  return (
    <div>
      Intro 페이지 입니다.

      <List>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </List>
    </div>
  );
};

export default Intro;