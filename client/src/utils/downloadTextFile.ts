const downloadTextFile: Function = (fileName: string, fileContent: string) => {
  const element = document.createElement('a')
  element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent)
  element.download = fileName

  element.style.display = 'none'
  document.body.appendChild(element)

  element.click()

  document.body.removeChild(element)
}

export default downloadTextFile
