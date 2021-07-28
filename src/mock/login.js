/**
 * @param {*} request
 * @param {*} response
 */
const logOut = (request, response) => {
  const result = {
    errorCode: 401,
    errorMessage: '已退出',
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
  const { body } = request
  let result = {
    errorCode: 0,
    errorMessage: 'success',
    data: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjI2MTUwNTQwLCJleHAiOjE2MjYxNTA4NDB9.CXwYzwqP39wtkeTp3M0f7oxPYk3N0zVxKFkOh_xkp9w',
      user: {
        id: 1000130,
        user_type: null,
        sex: 1,
        nick_name: '高富帅',
        avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erCOfzRSpwa6ibPsOQ7GFaZEVKsyBKbK3qHN3RG8GXpHSRJgEJ8tlvKn5G3NHro4edSl04FXFM7ITA/132',
        background: null,
        birthday: 1605542400000,
        status: 1,
        created_timestamp: 1603205522
      }
    },
    success: true
  }
  // console.log(body)
  // 检查用户输入
  if (body.name === '') {
    result = {
      errorCode: 1,
      message: '用户名不能为空'
    }
  } else if (body.pwd === '') {
    result = {
      errorCode: 1,
      message: '密码不能为空'
    }
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
