<template>
  <h1>Auth page !</h1>
  <button @click="goToSplashScreen">Go to Splash Screen</button>
  <!--<section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="content">
        <section class="auth-logo">
          <div class="logo"></div>
        </section>
        <section class="panel">
          <h2>Bon retour parmi nous !</h2>
          <form autocomplete="off">
            <div class="form">
              <input type="email" name="loginEmail" placeholder="Email" v-model="login.email">
            </div>
            <div class="form">
              <input type="password" name="loginPassword" placeholder="Mot de passe" v-model="login.password">
            </div>

            <a href="#">Avez vous oublié votre mot de passe?</a>

            <button type="submit" @click.prevent="connect()" class="connect">
              <router-link to="/landing-page">Se connecter</router-link>
            </button>
            <p class="authSwitch">Besoin d'un compte ? <router-link to="/register">S'inscrire</router-link></p>
            <div class="message" v-if="login.error">
              {{ login.error }}
            </div>
          </form>
        </section>
      </section>
    </section>
  </section>-->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Auth',
  setup() {
    const router = useRouter()
    const goToSplashScreen = () => {
      router.push({ name: 'SplashScreen' }) // Navigate to splash screen
    }

    return { goToSplashScreen }
  }
})

/*import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapActions } from 'vuex'
import { ComponentOptions } from 'vue'

declare const Buffer: any

@Component({
  methods: {
    ...mapActions([
      'authenticateUser'
    ])
  },
  sockets: {
    connection (result: any) {
      if (result.success) {
        this.authenticateUser(result.user)
      } else {
        this.login.error = result.message
        setTimeout(() => {
          this.login.error = null
        }, 2000)
      }
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  }
} as ComponentOptions<Auth> )
export default class Auth extends Vue {
  public login: any = {
    email: 'test06@gmail.com',
    password: 'root',
    error: null
  }

  public closeModal (e: any) {
    if (e.target.classList.contains('modal')) {
      this.$emit('close')
    }
  }

  public connect () {
    this.$socket.emit('login', this.login)
  }
}*/
</script>

<style scoped>
/*.logo {
  background-image: url('../assets/logos/Qwirk.png');
  height: 140px;
  width: 140px;
  background-size: 140px 140px;
  background-repeat: no-repeat;
}

.modal {
  background-image: url('../assets/backgrounds/app/d3.jpg');

  .set {
    height: 400px;
    width: 630px;

    section.content {
      display: flex;
      background-color: rgba(46, 49, 54, 0.7);
    }
  }
}*/
</style>
