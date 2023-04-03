import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const WrapSection = styled.section`
  border-radius: 1em;

  width: 1250px;
  padding: 15px 15px;
  margin: 0 auto;

  background-color: #fff;
  box-shadow: rgb(150, 150, 150) 10px 10px 20px;

  & img {
    width: 300px;
    border-radius: 0.5em;
  }
`;

export const WrapImg = styled.section`
  display: flex;
  gap: 40px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const WrapDescr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  & h2 {
    margin-bottom: 8px;
  }

  & strong {
    margin-bottom: 8px;
  }
`;

//!======================

export const Information = styled.div`
  width: 400px;
  margin: 20px 0 0 0;

  & h3 {
    margin-bottom: 8px;
  }
`;

export const InformationLink = styled(Link)`
  padding: 5px 10px;
  border-radius: 0.5em;

  background-color: #ff7f00;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;

export const InformationList = styled.ul`
  display: flex;
  justify-content: space-between;

  & li {
    width: 45%;
  }

  & a {
    display: flex;
    justify-content: center;
  }
`;

export const BackLinkWrap = styled.div`
  width: 1280px;
  margin: 0 auto 20px;
`;

export const BackLinkStyle = styled.button`
  padding: 7px 15px;
  border-radius: 0.5em;

  display: flex;
  width: max-content;
  border: none;

  font-size: 18px;
  background-color: #ff7f00;
  color: #fff;

  &:hover {
    background-color: #ff4300;
    box-shadow: rgb(150, 150, 150) 2px 2px 8px;
  }
`;
