<template>
  <div class="container">
    <div class="columns">
      <div class="colum is-6 is-offset-3">
        <h3 class="title is-3">Crear Cuenta</h3>
        <hr />
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Samuel Lopez"
                v-model="name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="ejemplo@gmail.com"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="password"
                placeholder="password"
                v-model="password"
              />
            </div>
          </div>

          <button type="submit" class="button is-primary">Registrarme</button>
        </form>

        <div class="notification is-danger" v-if="error">
          {{error}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  name: "Register",
  methods: {
    register() {
      if (this.name && this.email && this.password) {
        //formulario
      } else {
        this.error = 'Todos los campos son requeridos'
      }
    },
  },
  components: {},
};
</script>