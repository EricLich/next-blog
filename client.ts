import sanityClient from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export default sanityClient({
  projectId: '67zxvs89',
  dataset: 'production',
  useCdn: true,
})

export const config = {
  projectId: '67zxvs89',
  dataset: 'production',
  useCdn: true,
}
//@ts-ignore
export const urlFor = (source) => createImageUrlBuilder(config).image(source)