import { ref, Ref } from 'vue'
import { Music } from './music.class'

export class State {
  music: Ref<null | Music> = ref(null)
}

export const state = new State()
