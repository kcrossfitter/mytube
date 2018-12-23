// Global routes
const HOME = '/'
const JOIN = '/join'
const LOGIN = '/login'
const LOGOUT = '/logout'
const SEARCH = '/search'

// User routes
const USERS = '/users'
const EDIT_PROFILE = '/edit-profile'
const CHANGE_PASSWORD = '/change-password'
const USER_DETAIL = '/:id'

// Video routes
const VIDEOS = '/videos'
const UPLOAD = '/upload'
const EDIT_VIDEO = '/:id/edit'
const DELETE_VIDEO = '/:id/delete'
const VIDEO_DETAIL = '/:id'

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: id => (id ? `/users/${id}` : USER_DETAIL),
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: id => (id ? `/videos/${id}` : VIDEO_DETAIL),
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
}

export default routes
