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
  changeAvatar(payload) {
    return axios.post('profile/change-avatar', payload, {
      headers: {'content-type': 'multipart/form-data'}
    });
  },
});