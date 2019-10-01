import styled from 'styled-components';

export const Shell = styled.span`
  position: relative;
  line-height: 1;
  .shell span {
  }

  .shell span i {
    font-style: normal;
    /* any of these 3 will work */
    color: transparent;
    opacity: 0;
    visibility: hidden;
  }
`;

export const TransparentInput = styled.input`
  background-color: transparent;
  position: absolute;
  font-size: 16px;
  font-family: monospace;
  padding-right: 10px;
  background-color: transparent;
  text-transform: uppercase;
`;

export const BackgroundSpan = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  color: ${({ color }) => (color ? color : `pink`)};
  text-transform: uppercase;
  padding-right: 10px;
  left: 3px;
  top: 1px;
  pointer-events: none;
  z-index: -1;
  color: #ccc;
  font-size: 16px;
  font-family: monospace;
  background-color: transparent;
`;

export const Guide = styled.i`
  font-style: normal;
  /* any of these 3 will work */
  color: transparent;
  opacity: 0;
  visibility: hidden;
`;
