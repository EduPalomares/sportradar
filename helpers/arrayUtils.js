export function addElement(ar, element) {
  return !Array.isArray(ar) ? ar : [...ar, element]
}

export function removeElement(ar, index) {
  return !Array.isArray(ar) || ar.length < 0 || ar.length < index
    ? ar
    : ar.filter((_, i) => i !== index)
}

export function replaceElement(ar, index, newElement) {
  if (
    !Array.isArray(ar) ||
    ar.index < 0 ||
    ar.length === 0 ||
    ar.length < index ||
    !newElement
  )
    return ar

  ar[index] = newElement
  return ar
}

export function sumElements(ar) {
  return !Array.isArray(ar) || ar.length < 1
    ? 0
    : ar.reduce((acc, v) => {
        return Number.isInteger(v) ? acc + v : acc
      }, 0)
}
