/**
 * Wraps a function in a
 * common try/catch
 * 
 * @param {*} fn 
 */
export const lets = (fn) => {
  try {
    return fn()
  } catch (e) {
    strapi.notification.error(`${e}`)
  }
}
