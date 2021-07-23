const moduleA = {
  // 命名空间 当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    // 计数器
    increasement (state) {
      state.count++
    }
  },
  ations: {}
}

export default moduleA
