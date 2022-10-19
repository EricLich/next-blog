import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '67zxvs89',
  dataset: 'production',
  useCdn: true,
})