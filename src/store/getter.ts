interface stateType {
  user: string | any
  [key: string]: any
}
interface gettersType {
  [key: string]: (state: stateType) => any
}

const getters: gettersType = {
  token: state => state.user.token,
  avater: state => state.user.avater,
  name: state => state.user.name,
}

export default getters