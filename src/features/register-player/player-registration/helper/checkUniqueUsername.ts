// eslint-disable-next-line consistent-return
export async function checkUniqueUsername(username: string) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_CHECK_USERNAME}/${username}`,
    )
    return response.status === 200
  } catch (error) {
    return new Error(`Error: ${error}`)
  }
}
