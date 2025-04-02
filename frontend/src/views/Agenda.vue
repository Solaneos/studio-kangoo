<template>
    <div>
      <h2>Agendar Aula</h2>
      <select v-model="alunaSelecionada">
        <option disabled value="">Selecione uma aluna</option>
        <option v-for="(aluna, index) in alunoStore.alunas" :key="index">
          {{ aluna.nome }}
        </option>
      </select>
      <input type="date" v-model="data" />
      <button @click="agendar">Agendar</button>
  
      <h3>Aulas Agendadas:</h3>
      <ul>
        <li v-for="(item, index) in agendaStore.agendamentos" :key="index">
          {{ item.aluna }} - {{ item.data }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useAlunoStore } from '../stores/alunoStore';
  import { useAgendaStore } from '../stores/agendaStore';
  
  export default {
    setup() {
      const alunaSelecionada = ref('');
      const data = ref('');
      const alunoStore = useAlunoStore();
      const agendaStore = useAgendaStore();
  
      function agendar() {
        if (alunaSelecionada.value && data.value) {
          agendaStore.agendarAula({
            aluna: alunaSelecionada.value,
            data: data.value,
          });
          alunaSelecionada.value = '';
          data.value = '';
        }
      }
  
      return {
        alunaSelecionada,
        data,
        alunoStore,
        agendaStore,
        agendar,
      };
    },
  };
  </script>
  