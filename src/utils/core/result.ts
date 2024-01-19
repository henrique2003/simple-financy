export type ResultType<T = any, E = string> =
  | { ok: true, value: T | null }
  | { ok: false, error: E }

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Result {
  static sucess<T = null>(data?: T): ResultType<T> {
    return {
      ok: true,
      value: data ?? null
    }
  }

  static failure<T = null, E = string>(message: E): ResultType<T, E> {
    return {
      ok: false,
      error: message
    }
  }
}
