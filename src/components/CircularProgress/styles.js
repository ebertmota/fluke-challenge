import styled from 'styled-components/native';

export const Container = styled.View`
  width: 220px;
  height: 220px;
  background: transparent;
  border-width: 10px;
  border-color: #fff;
  border-radius: 220px;
  align-items: center;
  justify-content: center;
  padding: 25px;
  position: absolute;
`;

export const ProgressLayer = styled.View`
  width: 220px;
  height: 220px;
  position: absolute;
  border-width: 10px;
  border-radius: 220px;

  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: #3498db;
  border-top-color: #3498db;
  transform: rotateZ(45deg);
`;
