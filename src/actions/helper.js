export function createAction(type, payload = null) {
  const action = {
    type,
  }

  if (payload) {
    action[payload] = payload
  }

  return action
}
