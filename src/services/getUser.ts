import api from './api'

export const getUserDataFromApi = async (user: string) => {
  try {
    const result = api.get(`${user}`)
    return result
  } catch (error) {
    console.log(`error`, error)
  }
}

export const getUserReposFromApi = async (user: string) => {
  try {
    const result = api.get(`${user}/repos`)
    return result
  } catch (error) {
    console.log(`error`, error)
  }
}
