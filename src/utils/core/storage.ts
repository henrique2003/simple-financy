import AsyncStorage from '@react-native-async-storage/async-storage'
import { Result, type ResultType } from './result'

export class Storage {
  public async setItem<T>(key: string, data: T): Promise<ResultType> {
    try {
      const jsonValue = JSON.stringify(data)

      await AsyncStorage.setItem(key, jsonValue)

      return Result.sucess()
    } catch (e) {
      return Result.failure('Erro ao adicionar dado no storage')
    }
  }

  public async getItem<T>(key: string): Promise<ResultType> {
    try {
      const value = await AsyncStorage.getItem(key)

      if (value === null) return Result.sucess()

      const data = JSON.parse(value) as T

      return Result.sucess<T>(data)
    } catch (e) {
      return Result.failure('Erro ao adicionar dado no storage')
    }
  }
}
