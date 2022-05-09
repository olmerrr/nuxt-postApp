<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="createUser">
        <AppControlInput type="email" v-model="email"
          >E-Mail Address</AppControlInput
        >
        <AppControlInput type="password" v-model="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? "Login" : "Sign Up" }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? "Signup" : "Login" }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminAuthPage",
  layout: "admin",
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
    };
  },
  methods: {
    async createUser() {
      if (!this.isLogin) {
        try {
          await this.$fire.auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((result) => console.log(result));
          this.$router.push("/");
        } catch (e) {
          handleError(e);
        }
      } else {
        try {
          await this.$fire.auth.signInWithEmailAndPassword(
            this.email,
            this.password
          );
          this.$router.push("/admin");
        } catch (e) {
          handleError(e);
        }
      }
    },
  },
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
}
</style>

