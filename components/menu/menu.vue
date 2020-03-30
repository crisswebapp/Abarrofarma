<template>
  <div>
    <div class="navbar-item">
      <div class="field is-grouped">
        <p class="control">
          <a v-if="!isUserLoggedIn" class="button" @click="showSignupModal">
            <span class="icon">
              <i class="fa fa-user-plus" />
            </span>
            <span>{{ signupLabel }}</span>
          </a>
        </p>
        <p class="control">
          <a v-if="!isUserLoggedIn" class="button" @click="showLoginModal">
            <span class="icon">
              <i class="fa fa-user" />
            </span>
            <span>{{ loginLabel }}</span>
          </a>
        </p>
      </div>
    </div>
    <div v-if="isUserLoggedIn" class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link"> Welcome {{ getUserName }} </a>
      <div class="navbar-dropdown is-boxed">
        <nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">
          {{ wishlistLabel }}
        </nuxt-link>
        <hr class="navbar-divider" />
        <a class="navbar-item" @click="logout">
          {{ logoutLabel }}
        </a>
      </div>
    </div>
  </div>
</template>
