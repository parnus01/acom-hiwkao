<template>
  <div class="container">
      
    <div class="columns is-mobile">

      <div class="column is-half is-offset-one-quarter">

        <div class="card" style="margin-top:50px;">
          <div class="card-content">

            <h2 class="title is-2">Login</h2>

              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    placeholder="Email"
                    v-model="email"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fa fa-check"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  >
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button @click="login" class="button is-success">
                    Login
                  </button>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace('/portal');
          this.$toast.open({
            message: 'Successfully logged in!',
            position: 'is-bottom',
            type: 'is-success',
          });
        }, (error) => {
          this.$toast.open({
            message: `Error logging in: ${error.message}`,
            position: 'is-bottom',
            type: 'is-danger',
          });
        });
    }
  },
};
</script>