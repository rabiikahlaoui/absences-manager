const filterArrayByDate: Function = (dateFromKey: string, dateToKey: string, filterDate: string | null) => {
  if (filterDate === null) {
    return true
  }

  const dateFrom = new Date(dateFromKey)
  const dateTo = new Date(dateToKey)
  const compareDate = new Date(filterDate)

  return compareDate >= dateFrom && compareDate <= dateTo
}

export default filterArrayByDate
