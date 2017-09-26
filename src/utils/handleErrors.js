export default async function (callback, commit) {
  try {
    return await callback()
  } catch (err) {
    const errorCode = await err.response.data

    console.warn(errorCode)
    if (errorCode === 'ALREADY_AUTHORIZED') commit('SIGN_IN')
    return errorCode
  }
}
