const defaultUrl = 'http://localhost/api/'

const apiUrls = {
  default: defaultUrl,
  userLogin: defaultUrl + 'user/login',
  userRegister: defaultUrl + 'user/register',
  postCreate: defaultUrl + 'post/create',
  getAllPosts: defaultUrl + 'post/get-all',
  getUserPosts: defaultUrl + 'post/get-user',
}

export default apiUrls; 