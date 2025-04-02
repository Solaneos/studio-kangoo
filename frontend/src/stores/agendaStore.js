import { defineStore } from 'pinia';

export const useAgendaStore = defineStore('agenda', {
  state: () => ({
    agendamentos: [],
  }),
  actions: {
    agendarAula({ aluna, data }) {
      this.agendamentos.push({ aluna, data });
    },
  },
});
