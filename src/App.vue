<template>
  <div class="app" :style="dynamicBackground()">
    <div class="dialogs">
      <b-modal
        ref="announcement"
        modal-class="announcement-modal"
        title="Announcement"
        ok-only
        ok-title="Close"
        ok-variant="secondary">
        <div v-html="html"/>
      </b-modal>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      isLoading: false,
      html: null,
      fullPage: true
    }
  },

  watch: {
    '$route'() {
      axios.post('/api/v1/tracker', {
        last_page: this.$route.path,
        route: this.$route.name
      }).then(response => {
        if (response.data['start_promo']) {
          window.location.href = '/promo?type=1';
        }

        if (response.data['show_modal']) {
          this.html = response.data['modal_content'];
          this.$refs['announcement'].show();
        }
      }).catch(error => {
        if (error) {
          window.location.href = '/promo?type=1'
        }
      });
    }
  },

  computed: {
    ...mapState('auth', {
      loggedIn: state => state.loggedIn,
    }),
  },

  methods: {
    dynamicBackground() {

      const parties = [
        'ratings.parties.view',
        'ratings.parties.list'
      ];

      const profile = [
        'ratings.profile.view',
        'ratings.profile.password',
        'ratings.profile.edit',
        'ratings.profile.notifications'
      ];

      if (parties.includes(this.$route.name)) return {backgroundImage: 'url(/images/party.jpg)'};
      if (profile.includes(this.$route.name)) return {background: '#133347'};
      return {backgroundImage: 'url(/images/background.jpg)'}
    },

    preloader() {
      this.preloader();
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app {
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.blackContainer {
	min-height: 85vh;
}

.announcement-modal {
  .modal-content {
    background-color: #389b70;
  }

  .modal-footer {
    display: none;
  }

  .modal-header {
    border-bottom: none;
  }

  .modal-backdrop {
    opacity: .9;
    background-color: #062204;
  }

  .modal-title {
    display: none;
  }

  .modal-header .close {
    padding: 0 .5rem;
    font-size: 34px;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 700px;
    }
  }
}
</style>
