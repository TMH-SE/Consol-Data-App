import gql from 'graphql-tag'

export const GET_ALL_COMPANY = gql`
  query get {
    companies{
      id,
      name,
      address,
      phone,
      email,
      skype,
      note,
      status
    }
  }
`
