type OLD = { [key: string]: string[] }
type NEW = { [key: string]: number }

export function transform(old: OLD): NEW {
  return Object.keys(old).reduce((newAcc, originNumKey) => {
    return old[originNumKey].reduce((acc, newAlphabetKey) => {
      acc[newAlphabetKey.toLowerCase()] = Number(originNumKey);
      return acc;
    }, newAcc)
  }, {} as NEW)
}
