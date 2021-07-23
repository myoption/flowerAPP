/**
 * @param {*} request
 * @param {*} response
 */
const logOut = (request, response) => {
  const result = {
    errorCode: 0,
    errorMessage: 'success',
    data: {},
    success: 'true'
  }
  response.json(result)
}

/**
 * @param {*} request
 * @param {*} response
 */
const logIn = (request, response) => {
  const result = {
    errorCode: 0,
    errorMessage: 'success',
    data: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI2MTUwNTQwLCJleHAiOjE2MjYxNTA4NDB9.CXwYzwqP39wtkeTp3M0f7oxPYk3N0zVxKFkOh_xkp9w',
      user: {
        name: 'hello world',
        age: 12,
        id: '10001',
        avatar: ''
      }
    },
    success: true
  }
  response.json(result)
}

// login Mock api
const LoginMockApi = (app) => {
  // 路由用法同express
  app.post('/mock/user/login', logIn)
  app.post('/mock/user/logout', logOut)
}
module.exports = LoginMockApi
