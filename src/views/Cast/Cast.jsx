import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getActors } from '../../service/apiService';

import { CastWrap, ActorCard, CastList, NoPhoto } from './Cast.styled';

export default function Cast() {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId)
      .then(response => response.cast)
      .then(setActors);
  }, [movieId]);

  return (
    <>
      {actors && (
        <CastWrap>
          {actors.length > 0 && (
            <CastList>
              {actors.map(actor => (
                <li key={actor.id}>
                  <ActorCard>
                    {actor.profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                        alt={actor.name}
                      />
                    )}
                    {/* if there is NO photo */}
                    {!actor.profile_path && <NoPhoto>NO PHOTO</NoPhoto>}
                    <div>
                      <p>Actor/actress: {actor.name}</p>
                      <p>Character: {actor.character}</p>
                    </div>
                  </ActorCard>
                </li>
              ))}
            </CastList>
          )}
          {actors.length === 0 && <p>No info</p>}
        </CastWrap>
      )}
    </>
  );
}
