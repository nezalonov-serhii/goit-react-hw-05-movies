import {
  Information,
  InformationLink,
  InformationList,
} from 'page/Movies/MoviesItem/MoviesItem.styled';

export function MovieInformation() {
  return (
    <Information>
      <h3>Additional information</h3>

      <InformationList>
        <li>
          <InformationLink to={'cast'}>Cast</InformationLink>
        </li>
        <li>
          <InformationLink to={'reviews'}>Reviews</InformationLink>{' '}
        </li>
      </InformationList>
    </Information>
  );
}
