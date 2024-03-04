import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'featuresintro1' }>

export const FeaturesIntro1Block: React.FC<
  Props & {
    id?: string
  }
> = props => {
  const { features_columns } = props

  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        {features_columns &&
          features_columns.length > 0 &&
          features_columns.map((col, index) => {
            const { enableLink, richText, link, size, media } = col
            return (
              <div key={index} className={[classes.column, classes[`column--${size}`]].join(' ')}>
                <RichText content={richText} />
                {enableLink && <CMSLink className={classes.link} {...link} />}
                <Media resource={media} />
              </div>
            )
          })}
      </div>
    </Gutter>
  )
}
