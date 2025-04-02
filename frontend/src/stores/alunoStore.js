import { defineStore } from 'pinia';

export const useAlunoStore = defineStore('aluno', {
  state: () => ({
    alunas: [],
  }),
  actions: {
    adicionarAluna(novaAluna) {
      this.alunas.push(novaAluna);
    },
  },
});
