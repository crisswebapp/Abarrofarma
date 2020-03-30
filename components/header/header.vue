<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile" />
        </nuxt-link>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field" />
        </div>

        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="facebookTooltip">
              <i class="fa fa-facebook" />
            </a>
            <a href="#" class="icon" :title="twitterTooltip">
              <i class="fa fa-twitter" />
            </a>
            <a href="#" class="icon" :title="instagramTooltip">
              <i class="fa fa-instagram" />
            </a>
            <a href="#" class="icon" :title="linkedinTooltip">
              <i class="fa fa-linkedin" />
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="showCheckoutModal">
            <span class="icon">
              <i class="fa fa-shopping-cart" />
            </span>
            <span :class="[numProductsAdded > 0 ? 'tag is-info' : '']">{{
              numProductsAdded
            }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu />
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu />
      </div>
    </nav>
  </div>
</template>

<script>
import VmMenu from '../menu/Menu'
export default {
  name: 'VmHeader',
  components: {
    VmMenu
  },
  data() {
    return {
      linkedinTooltip: 'Follow us on Linkedin',
      facebookTooltip: 'Follow us on Facebook',
      twitterTooltip: 'Follow us on Twitter',
      instagramTooltip: 'Follow us on Instagram',
      isCheckoutActive: false,
      isMenuOpen: false
    }
  },
  computed: {
    numProductsAdded() {
      return 3
    }
  },
  methods: {
    showCheckoutModal() {}
  }
}
</script>

<style scoped>
.navbar-brand {
  background: red;
}
.title {
  background: url('') no-repeat;
  background-position: 50% 50%;
  background-size: 165px;
  width: 175px;
  height: 35px;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
</style>
