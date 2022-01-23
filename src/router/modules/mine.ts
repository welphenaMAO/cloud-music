const MineRouter = {
  path: "/mine",
  component: () => import('@/views/tabbar/mine/index'),
  name: 'Mine',
  meta: { title: '我的', icon: 'none' },
  // redirect: 'noredirect',
  children: []
}

export default MineRouter
