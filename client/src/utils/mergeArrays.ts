const mergeArrays: Function = (arr1: any[], arr2: any[], key: string) => {
  let res = []
  res = arr1.map((obj) => {
    const index = arr2.findIndex((el) => el[key] === obj[key])
    return {
      ...obj,
      ...(index !== -1 ? arr2[index] : {})
    }
  })
  return res
}

export default mergeArrays
