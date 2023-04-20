// Dependencies
import fetch from 'cross-fetch'

// Constants
import { FETCH_CONSTANTS } from './fetcher.constants'

// Types
import { RequestArgs } from './fetcher.types'

class Fetcher {
  fetcher: typeof fetch
  onSuccess?: (response: any, props: RequestInit) => void
  onError?: (err: any, props: RequestInit) => void

  constructor({
    fetcher,
    onSuccess,
    onError
  }: {
    fetcher: typeof fetch
    onSuccess?: (response: any, props: RequestInit) => void
    onError?: (err: any, props: RequestInit) => void
  }) {
    this.fetcher = fetcher
    this.onError = onError
    this.onSuccess = onSuccess
  }

  private checkStatus = (response: Response): Response => {
    if (response.ok) return response

    const error = new Error(`${response.status} ${response.statusText}`)
    throw error
  }

  private parseJson = <R>(response: Response) => {
    return response.json() as R
  }

  private stringify = <C>(data: C): string => {
    if (typeof data === 'string') return data

    return JSON.stringify(data)
  }

  private fetch = async <R>(url, options): Promise<R> => {
    const requestOptions: RequestInit = {
      ...options,
      ...FETCH_CONSTANTS.corsFetchOptions,
      headers: {
        ...FETCH_CONSTANTS.cacheHeaders,
        ...options?.headers
      }
    }

    try {
      const response = await this.fetcher(url, requestOptions)
        .then(this.checkStatus)
        .then(res => this.parseJson<R>(res))

      if (this.onSuccess) {
        this.onSuccess(response, requestOptions)
      }

      return response
    } catch (err) {
      if (this.onError) {
        this.onError(err, requestOptions)
      }

      throw err
    }
  }

  private fetchWithBody = <R>(url, options): Promise<R> => {
    const requestOptions: RequestInit = {
      ...options,
      body: this.stringify(options.body),
      headers: {
        ...FETCH_CONSTANTS.acceptJsonHeaders,
        ...FETCH_CONSTANTS.contentTypeJsonHeaders,
        ...options?.headers
      }
    }

    return this.fetch<R>(url, requestOptions)
  }

  public get = <R>(url: string, options?: RequestArgs): Promise<R> => {
    return this.fetch<R>(url, { ...options, method: 'GET' })
  }

  public post = <R>(url: string, options?: RequestArgs): Promise<R> => {
    return this.fetchWithBody<R>(url, { ...options, method: 'POST' })
  }

  public patch = <R>(url: string, options?: RequestArgs): Promise<R> => {
    return this.fetchWithBody<R>(url, { ...options, method: 'PATCH' })
  }

  public put = <R>(url: string, options?: RequestArgs): Promise<R> => {
    return this.fetchWithBody<R>(url, { ...options, method: 'PUT' })
  }

  public delete = <R>(url: string, options?: RequestArgs): Promise<R> => {
    return this.fetchWithBody<R>(url, { ...options, method: 'DELETE' })
  }
}

export const fetcher = new Fetcher({ fetcher: fetch })
