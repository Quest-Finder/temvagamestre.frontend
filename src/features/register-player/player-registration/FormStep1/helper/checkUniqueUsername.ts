export async function checkUniqueUsername(username: string) {
  try {
    const response = await fetch(`https://tem-vaga-mestre-api-nnf7bytugq-uc.a.run.app/user/check-username/${username}`)
    return response.status === 200 ? true : false
  } catch (error) {
    console.log(error)
  }
}