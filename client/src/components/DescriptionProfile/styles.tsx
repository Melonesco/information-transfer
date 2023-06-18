import styled from "styled-components";

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 20px;
`;

export const DescriptionText = styled.p`
  color: #ffff;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  &:last-child {
    font-style: italic;
  }
`;
