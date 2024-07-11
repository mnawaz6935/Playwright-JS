import test, { Locator, Page } from "@playwright/test"

export const generateUniqueID = (length: number) => {
    let id = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      id += characters[randomIndex]
    }
    return id
}

export const waitforLocatorVisibility = async (
  page: Page,
  locator: Locator,
) => {
  let i = 0
  let checkLocator = false
  while (i < 3) {
    await page.waitForTimeout(500)
    if (await locator.isVisible()) {
      checkLocator = true
      break
    } else {
      checkLocator = false
      i++
    }
  }
  return checkLocator
}
  
export const annotations = async (type: string, description: string) => {
  await test.step('Annotations', async () => {
    test.info().annotations.push({
      type: type,
      description: description,
    })
    // ...
  })
}