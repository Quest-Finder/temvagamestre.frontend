// eslint-disable-next-line consistent-return
export async function checkUniqueUsername(username: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/check-username/${username}`,
    )
    return response.status === 200
  } catch (error) {
    return false
  }
}
