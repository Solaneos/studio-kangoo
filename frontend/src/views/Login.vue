<template>
    <div>
      <h2>Login (Simples)</h2>
      <input v-model="usuario" placeholder="Usuário" />
      <input type="password" v-model="senha" placeholder="Senha" />
      <button @click="login">Entrar</button>
      <p v-if="logado">Logado como: {{ usuario }}</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const usuario = ref('');
      const senha = ref('');
      const logado = ref(false);
  
      function login() {
        if (usuario.value && senha.value) {
          logado.value = true;
          alert(`Bem-vindo, ${usuario.value}`);
        }
      }
  
      return { usuario, senha, logado, login };
    },
  };
  </script>
  