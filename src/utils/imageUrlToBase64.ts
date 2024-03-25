export const imageUrlToBase64 = async (url: string): Promise<string | null> => {
  const response = await fetch(url)
  const blob = await response.blob()
  return new Promise((onSuccess, onError) => {
    try {
      const reader = new FileReader()
      reader.onload = function () {
        onSuccess(this.result as string)
      }
      reader.readAsDataURL(blob)
    } catch (e) {
      onError(null)
    }
  })
}
