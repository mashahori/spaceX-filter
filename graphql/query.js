import gql from 'graphql-tag';

// export const GET_FILTER = gql`
//   query getVacancies(
//       $search: String
//       $teams: [String]
//       $categories: [String]
//       $stacks: [String]
//       $internship: Boolean
//       $english: Boolean
//       $limit: Int
//     ) {
//     vacancies(
//       filter: {
//         search: $search
//         categories: $categories
//         teams: $teams
//         stacks: $stacks
//         is_internship: $internship
//         is_english_speaking_team: $english
//     }
//       limit: $limit
//     ) {
//       name
//       is_english_speaking_team
//       is_internship
//       is_relocation
//       descr
//       slug
//     }
//   }
// `;

export const GET_SHIPS = gql`
  query getShips($name: String) {
    ships(limit: 10, find: { name: $name }) {
      name
    }
  }
`;
