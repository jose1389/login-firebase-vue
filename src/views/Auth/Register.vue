<template>
  <div class="container">
    <div class="columns">
      <div class="colum is-6 is-offset-3">
        <h3 class="title is-3">Crear Cuenta</h3><hr>
        <form action="#" @submit.prevent="register">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Samuel Lopez" />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="ejemplo@gmail.com"
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
              />
            </div>
          </div>

          <button type="submit" class="button is-primary">Registrarme</button>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods:{
    register(){
      console.log('clic')
    }
  },
  components: {},
};
</script>