/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/
import React from 'react'

import { Routes, APP_TYPE } from '@app/configs'
import { Typography, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { strings } from '@app-strings'

import { Link } from './link'
import { FixedCopyRight } from './fixed-copy-right'
import { GithubBadge, TwitterBadge, SpectrumBadge } from '../badges'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 24,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'inherit',
  },
  flex: {
    flex: 1,
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
  },
  linkContainer: {
    marginTop: 12,
    display: 'block',
    paddingBottom: 20,
    listStyleType: 'none',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
    },
  },
  logo: {
    fontWeight: 'bold',
  },
  blockContainer: {
    flex: 0.2,
    marginRight: 20,
  },
  sticky: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  },
  linkSpace: {
    lineHeight: 2,
  },
}))

const NavLinks: any = ({ className, filterType }: any) => {
  return Routes.reverse()
    .filter(({ type }: any) => type === filterType)
    .map(({ href, name, as }: any) => {
      const externalLink = [
        'https://www.miniprograms.xyz',
        `https://${strings.appName.toLowerCase()}.blog`,
      ].includes(href)

      const hrefProps = {
        color: 'inherit',
        className,
        children: name,
        variant: 'subtitle2',
        target: null,
        href,
      }

      if (externalLink) {
        hrefProps.target = '_blank'
        hrefProps.external = true
      }

      return (
        <li key={href + name}>{React.createElement(Link, hrefProps) as any}</li>
      )
    })
}

const Footer = ({ sticky }: { sticky?: boolean }) => {
  const classes = useStyles()

  const SectionLinks = ({
    title,
    filterType,
  }: {
    title: string
    filterType: string
  }) => {
    return (
      <div className={classes.blockContainer}>
        <Typography>{title}</Typography>
        <ul className={classes.linkContainer}>
          {
            React.createElement(NavLinks, {
              filterType,
              className: classes.linkSpace,
            }) as any
          }
        </ul>
      </div>
    )
  }

  return (
    <footer className={`${classes.root} ${sticky ? classes.sticky : ''}`}>
      <Container maxWidth='lg'>
        <div className={classes.block}>
          <div className={classes.link}>
            <div className={classes.blockContainer}>
              <Typography className={classes.logo}>
                {strings.appName}
              </Typography>
              <ul className={classes.linkContainer}>
                {[
                  { icon: TwitterBadge },
                  { icon: GithubBadge },
                  { icon: SpectrumBadge },
                ].map(({ icon }: any, i: number) => (
                  <li className={classes.link} key={i}>
                    {React.createElement(icon, { inline: true })}
                  </li>
                ))}
              </ul>
            </div>
            <SectionLinks title={'Explore'} filterType={'explore'} />
            <SectionLinks title={'Resources'} filterType={'resources'} />
          </div>
          {APP_TYPE !== 'main' ? (
            <div className={classes.linkContainer}>
              <Typography variant={'body2'}>
                {strings.appName} Group ® Brands:
              </Typography>
              <Typography
                component={'a'}
                href={`https://www.${strings.appName.toLowerCase()}.com`}
                variant={'body2'}
                color={'secondary'}
                style={{ marginLeft: 6 }}
              >
                {strings.appName}
              </Typography>
            </div>
          ) : null}
          <FixedCopyRight />
        </div>
      </Container>
    </footer>
  )
}

export { Footer }
