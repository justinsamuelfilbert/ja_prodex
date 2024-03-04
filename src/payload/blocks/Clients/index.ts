import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import richText from '../../fields/richText'

export const Clients: Block = {
  slug: 'clients',
  fields: [
    invertBackground,
    {
      name: 'richText',
      label: 'Section Title',
      type: 'richText',
    },
    {
      type: 'number',
      name: 'rating',
      label: 'Rating Star',
      defaultValue: 5,
      admin: {
        step: 1,
      },
    },
    {
      name: 'testimonials',
      type: 'richText',
    },
    {
      name: 'media',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media',
    }
  ],
}
