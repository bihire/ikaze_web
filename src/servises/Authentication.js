import Api from '@/servises/API';

export default {
  register(credintials) {
    return Api().post('register', credintials);
  },
};
