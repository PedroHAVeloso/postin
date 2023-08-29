const defaultUrl = 'https://www.pedrohaveloso.site/api/'

const apiUrls = {
  default: defaultUrl,
  userLogin: defaultUrl + 'user/login',
  userRegister: defaultUrl + 'user/register',
  postCreate: defaultUrl + 'post/create',
  getAllPosts: defaultUrl + 'post/get-all',
  getUserPosts: defaultUrl + 'post/get-user',
  favorite: defaultUrl + 'post/favorite',
  unfavorite: defaultUrl + 'post/unfavorite',
}

export default apiUrls; 