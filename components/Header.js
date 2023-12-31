import Link from "next/link";
import styled from "styled-components";

const HeaderDiv = styled.div`
  background-color: tomato;
  padding: 20px;
  border: 10px solid blue;
  display: flex;
  gap: 20px;
  span {
    color: gray;
    font-size: 25px;
  }
`;
const SpanDiv = styled.div`
  color: green;
  &:hover {
    text-decoration: underline;
  }
  font-size: ${({ big }) => (big ? "40px" : "20px")};
  border: ${({ borderSize }) => `${borderSize}px solid blue`};
`;

export default () => (
  <HeaderDiv>
    <Link href={"/"}>Anasayfa</Link>
    <Link href={"/about"}>About</Link>
    <SpanDiv big borderSize={5}>
      EK açıklama
    </SpanDiv>
    <span>Normal bir span</span>
  </HeaderDiv>
);
