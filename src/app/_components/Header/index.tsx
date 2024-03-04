{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'
import Image from "next/image";

import { Header } from '../../../payload/payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import { Gutter } from '../Gutter'
import { HeaderNav } from './Nav'
import Logo from '../../_assets/logo.png'
import classes from './index.module.scss'

export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    // When deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // So swallow the error here and simply render the header without nav items if one occurs
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(error)
  }

  return (
    <>
      <header className={classes.header}>
        <Gutter className={classes.wrap}>
          <Link href="/">
            {/* Cannot use the `<picture>` element here with `srcSet`
              This is because the theme is able to be overridden by the user
              And so `@media (prefers-color-scheme: dark)` will not work
              Instead, we just use CSS to invert the color via `filter: invert(1)` based on `[data-theme="dark"]`
            */}
            <img
              className={classes.logo}
              alt="JA Prodex"
              src={Logo.src}
            />
          </Link>
          <HeaderNav header={header} />
          <Link href='#' className='btn btn-inverse px-8 py-4 rounded-2xl font-medium text-[1.125rem] bg-[#212529] text-white'>Get started</Link>
        </Gutter>
      </header>
    </>
  )
}
