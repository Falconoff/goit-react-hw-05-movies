import styled from 'styled-components';

export const CastWrap = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const ActorCard = styled.div`
  display: flex;
  margin-bottom: 10px;

  img {
    margin-right: 20px;
  }

  p {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

export const CastList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NoPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 154px;
  height: 230px;
  border: 2px solid #555;
  margin-right: 20px;
`;
