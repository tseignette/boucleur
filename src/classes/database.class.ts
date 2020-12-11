import Dexie, { Table } from 'dexie'
import { Ref, ref } from 'vue'
import { Music } from './music.class'

export class Database {
  adding = ref(false)
  musics: Ref<null | Music[]> = ref(null)
  persisted: Ref<null | boolean> = ref(null)
  quota: Ref<null | number> = ref(null)
  usage: Ref<null | number> = ref(null)
  private database: Dexie
  private table: Table<Music, number>

  constructor () {
    this.database = new Dexie('database')
    this.database.version(1).stores({ musics: '++id, addedOn, file, name' })
    this.database.version(2).stores({ musics: '++id, addedOn, file, name, tempo' }).upgrade(transaction => {
      return transaction.table('musics').toCollection().modify(music => {
        music.tempo = 120
      })
    })
    this.database.version(3).stores({ musics: '++id, addedOn, file, name, tempo, type' }).upgrade(transaction => {
      return transaction.table('musics').toCollection().modify(music => {
        music.type = 'audio/mpeg'
      })
    })
    this.database.version(4).stores({ musics: '++id, addedOn, endBar, file, name, startBar, tempo, type' }).upgrade(transaction => {
      return transaction.table('musics').toCollection().modify(music => {
        music.endBar = 2
        music.startBar = 1
      })
    })

    this.table = this.database.table('musics')
    this.table.mapToClass(Music)

    this.listMusics()
    this.persist()
    this.updateQuotaAndUsage()
  }

  async addMusic (music: Music) {
    this.adding.value = true

    try {
      await music.guessTempo()
      await this.table.add(music)
    } catch (error) {
      alert(error?.name)
    }

    this.adding.value = false
    this.listMusics()
    this.updateQuotaAndUsage()
  }

  async deleteMusic (music: Music) {
    try {
      await this.table.delete(music.id as number)
    } catch (error) {
      alert(error?.name)
    }

    this.listMusics()
    this.updateQuotaAndUsage()
  }

  async updateMusic (music: Music) {
    try {
      await this.table.update(music.id as number, music)
    } catch (error) {
      alert(error?.name)
    }
  }

  private async listMusics () {
    this.musics.value = await this.table.reverse().toArray()
  }

  private async loadPersisted () {
    if (navigator.storage?.persisted) {
      this.persisted.value = await navigator.storage.persisted()
    }
  }

  private async persist () {
    if (navigator.storage?.persist) {
      await navigator.storage.persist()
      await this.loadPersisted()
    }
  }

  private async updateQuotaAndUsage () {
    if (navigator.storage?.estimate) {
      const estimation = await navigator.storage.estimate()

      if (estimation.quota !== undefined && estimation.usage !== undefined) {
        this.quota.value = estimation.quota
        this.usage.value = estimation.usage
      }
    }
  }
}

export const database = new Database()
