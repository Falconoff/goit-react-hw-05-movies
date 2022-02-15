import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const GoBackBtn = styled(Link)`
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #555;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;

  :hover,
  :focus {
    color: var(--accent-color);
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #555;

  img {
    width: 250px;
    height: auto;
    margin-right: 20px;
  }

  span {
    display: inline-block;
    padding-right: 8px;

    :not(:first-child) {
      padding-left: 8px;
    }
    :not(:last-child) {
      border-right: 1px solid var(--accent-color);
    }
  }
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const DetailName = styled.p`
  margin-bottom: 10px;
  margin-top: 20px;
  font-weight: 700;
`;

export const AdditionalInfoList = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #555;

  ul {
    padding-left: 20px;
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }
  a:hover {
    color: var(--accent-color);
  }
`;

export const LinkItem = styled(NavLink)`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: tomato;
  }
`;

export const NoPoster = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 150px;
  height: 300px;
  border: 2px solid #555;
  margin-right: 20px;
`;
