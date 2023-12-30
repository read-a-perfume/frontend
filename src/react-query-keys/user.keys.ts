export const userQueryKeys = {
  me: ['me'],
  userTastes: (id:string) => ['user-tastes',{id:id}],
  mypageReviews: ['mypage-reviews'],
  user: (id: string) => ['user', {id: id}],
}

export const followQueryKeys = {
  follows: (id: string) => ['follows', {id: id}],
}

export const followMutateKeys = {
  mypageFollow: ['mypage-follow'],
}
