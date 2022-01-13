export default axios => ({
  fetch() {
    return axios.get('profile');
  },
  update(payload) {
    return axios.post('profile', payload)
  },
  comments() {
    return axios.get('comments');
  },
  claimed() {
    return axios.get('claimed')
  },
  claim(payload) {
    return axios.post('claim', payload);
  },
  stayClaimed(payload) {
    return axios.post('stay-claimed', payload)
  },
  notifications() {
    return axios.get('profile/notifications')
  },
  readNotifications() {
    return axios.post('profile/notifications/read')
  },
  changeAvatar(payload) {
    return axios.post('profile/change-avatar', payload, {
      headers: {'content-type': 'multipart/form-data'}
    });
  },
  changePassword(payload) {
    return axios.post('profile/change-password', payload)
  },
  favoriteAvis() {
    return axios.get('profile/favorite-avis')
  },
  favoriteParties() {
    return axios.get('profile/favorite-parties')
  },
  deleteFavoriteAvi(id) {
    return axios.delete(`profile/favorite-avis/${id}`)
  },
  deleteFavoriteParty(id) {
    return axios.delete(`profile/favorite-parties/${id}`)
  }
});