export function getUser (state) {
  return state.user
}

export function getDataUser (state) {
  try {
    const { displayName, email, emailVerified, isAnonymous, phoneNumber, photoURL, uid } = state.user
    return { displayName, email, emailVerified, isAnonymous, phoneNumber, photoURL, uid }
  } catch {
    return null
  }
}
