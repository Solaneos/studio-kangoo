<template>
    <div>
      <h2>Cadastrar nova aluna</h2>
      <input v-model="nome" placeholder="Nome da aluna" />
      <button @click="cadastrar">Salvar</button>
  
      <h3>Alunas cadastradas:</h3>
      <ul>
        <li v-for="(aluna, index) in alunoStore.alunas" :key="index">
          {{ aluna.nome }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAlunoStore } from '../stores/alunoStore';
  
  export default {
    setup() {
      const nome = ref('');
      const alunoStore = useAlunoStore();
  
      function cadastrar() {
        if (nome.value.trim()) {
          alunoStore.adicionarAluna({ nome: nome.value.trim() });
          nome.value = '';
        }
      }
  
      return { nome, cadastrar, alunoStore };
    },
  };
  </script>
  