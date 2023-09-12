const defaultUrl = 'https://www.pedrohaveloso.site/api/'
// const defaultUrl = 'http://localhost/api/'

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

/**
 * Verifica a situação da API.
 */
export async function checkApi() {
  try {
    const fetchData = await fetch(apiUrls.default);

    const status = fetchData.status;

    if (status == 200) {
      return true;
    }

    return false;
  } catch (exc) {
    return false;
  }
}