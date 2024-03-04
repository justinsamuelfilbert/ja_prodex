import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'
import Star from '../../_assets/star.svg'

import classes from './index.module.scss'

type Props = Extract<Page['layout'][0], { blockType: 'clients' }>

export const ClientsBlock: React.FC<
  Props & {
    id?: string,
    staticImage?: StaticImageData,
    testimonials?: string,
    media?: StaticImageData,
    rating?: number,
  }
> = props => {
  const { richText, testimonials, media, staticImage, rating  } = props
  
  let caption
  if (media && typeof media === 'object') caption = media.caption
  return (
    <Gutter className={classes.content}>
      <div className={classes.grid}>
        <div className={[classes.column, classes[`column--half`]].join(' ')}>
          <RichText content={richText} />
        </div>
        <div className={[classes.column, classes[`column--half`]].join(' ')}>
          <div className='flex flex-center gap-8'>
            <Media className='min-w-[100px]' resource={media} src={staticImage} />
            <div className=''>
              <div className={[classes.rating_star, classes[`star--${rating}`]].join(' ')}>
                <span className="flex flex-center gap-1 mb-2" role="img" aria-label="5.0 out of 5 stars">
                  <img
                    alt="Star"
                    src={Star.src}
                    className='w-[15px] h-[15px]'
                  />
                  <img
                    alt="Star"
                    src={Star.src}
                    className='w-[15px] h-[15px]'
                  />
                  <img
                    alt="Star"
                    src={Star.src}
                    className='w-[15px] h-[15px]'
                  />
                  <img
                    alt="Star"
                    src={Star.src}
                    className='w-[15px] h-[15px]'
                  />
                  <img
                    alt="Star"
                    src={Star.src}
                    className='w-[15px] h-[15px]'
                  />
                </span>
              </div>
              {testimonials &&
                <RichText content={testimonials} />
              }
              {caption &&
                <RichText className={classes.author_name} content={caption} />
              }
            </div>
          </div>
        </div>
      </div>
    </Gutter>
  )
}
