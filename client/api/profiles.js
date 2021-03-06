import request from 'superagent'

// member profile
export function getProfile (auth0Id) {
  return request.post('/api/v1/members/getMemberProfileByAuthId')
    .send({ auth0Id: auth0Id })
    .then((res) => {
      return res.body
    })
}

export function addProfile (newMember) {
  return request
    .post('/api/v1/members')
    .send(newMember)
    .then((res) => {
      return res.body
    })
}
