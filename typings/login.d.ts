interface ILoginParams {
  userName: string
  passWord: string | number
}
interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}