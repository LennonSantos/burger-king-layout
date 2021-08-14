export function getUserAuth (state) {
  return state.user
}

export function getUserData (state) {
  try {
    const { displayName, email, emailVerified, isAnonymous, phoneNumber, photoURL, uid } = state.user
    return { displayName, email, emailVerified, isAnonymous, phoneNumber, photoURL, uid }
  } catch {
    return null
  }
}
