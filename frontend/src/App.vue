<template>
  <div :class="['app', tema]">
    <nav class="menu">
      <div class="links">
        <router-link to="/" exact-active-class="active">🏠 Início</router-link>
        <router-link to="/agenda" exact-active-class="active">📅 Agenda</router-link>
        <router-link to="/alunas" exact-active-class="active">👩‍🏫 Alunas</router-link>
        <router-link to="/login" exact-active-class="active">🔐 Login</router-link>
      </div>
      <button class="tema" @click="alternarTema">
        {{ tema === 'claro' ? '🌙 Escuro' : '☀️ Claro' }}
      </button>
    </nav>

    <main class="conteudo">
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const tema = ref('claro');

    function alternarTema() {
      tema.value = tema.value === 'claro' ? 'escuro' : 'claro';
      localStorage.setItem('tema', tema.value);
    }

    onMounted(() => {
      const salvo = localStorage.getItem('tema');
      if (salvo) tema.value = salvo;
    });

    return { tema, alternarTema };
  },
};
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
  min-height: 100vh;
  width: 100%;
  margin: -10px;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.claro {
  background-color: #ffffff;
  color: #000000;
}

.escuro {
  background-color: #121212;
  color: #f0f0f0;
}

.menu {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu .links {
  display: flex;
  gap: 20px;
}

.claro .menu a,
.escuro .menu a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.claro .menu a.active,
.escuro .menu a.active {
  color: #d281c1;
  text-decoration: underline;
}

.menu .tema {
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.menu .tema:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.conteudo {
  flex: 1;
  padding: 20px;
}

.claro .conteudo a {
  color: #0077cc;
}

.escuro .conteudo a {
  color: #4ea8de;
}

.conteudo a:hover {
  text-decoration: underline;
}

.conteudo a:visited {
  color: inherit;
}
</style>




