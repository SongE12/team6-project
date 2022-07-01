export async function validateTokenUser() {
  const accessToken = window.localStorage.getItem('token')
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202204',
      'username': 'KDT2_team6',
      'Authorization': `Bearer ${accessToken}`
    },
  })
  return await res.json()
}
