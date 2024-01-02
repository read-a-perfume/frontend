const getNameExtension = (url: string) => {
  const urlArr = url.split('/')
  if (urlArr.length < 1) {
    return ''
  }
  const last = urlArr[urlArr.length - 1]
  return last
}

const getImageFromURL = async (imageURL: string):Promise<File>=> {
  try {
    const res = await fetch(`${imageURL}`,{method:'GET'})
    const blob = await res.blob()
    const fileName = getNameExtension(imageURL)
    const file = new File([blob], fileName, {type: blob.type})
    return file
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getImageFromURL
