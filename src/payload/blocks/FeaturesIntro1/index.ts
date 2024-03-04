import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'size',
    type: 'select',
    defaultValue: 'oneThird',
    options: [
      {
        value: 'oneThird',
        label: 'One Third',
      },
      {
        value: 'half',
        label: 'Half',
      },
      {
        value: 'twoThirds',
        label: 'Two Thirds',
      },
      {
        value: 'full',
        label: 'Full',
      },
    ],
  },
  richText({
      required: false,
  }),
  {
    name: 'enableLink',
    type: 'checkbox',
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
  {
    name: 'media',
    type: 'upload',
    relationTo: 'media',
    required: false,
  },
]

export const Featuresintro1: Block = {
  slug: 'featuresintro1',
  fields: [
    invertBackground,
    {
      name: 'features_columns',
      label: 'Features Columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
