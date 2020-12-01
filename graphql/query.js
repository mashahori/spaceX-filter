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

export const GET_LAUNCHES = gql`
  query getLaunches($name: String) {
    launches(limit: 9, find: { mission_name: $name }) {
      mission_name
    }
  }
`;

export const GET_CATHEGORIES = gql`
  query getCathegories {
    missions {
      name
    }
    ships {
      name
    }
    rockets {
      name
    }
  }
`;
