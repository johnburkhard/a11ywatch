/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React from 'react'
import { Typography, Tooltip } from '@material-ui/core'
import { strings } from '@app-strings'
import { defaultProps } from './defaultProps'
import type { BadgeProps } from './badge-types'

export const LinkedinBadge = ({ style, inline }: BadgeProps) => {
  const LINKEDIN = 'LinkedIn'
  const TITLE = `${strings.appName} on ${LINKEDIN}`
  const href = 'https://www.linkedin.com/company/a11ywatch'

  if (inline) {
    return (
      <a
        href={href}
        style={!inline ? style : {}}
        target='_blank'
        aria-label={TITLE}
      >
        <div style={{ display: 'flex' }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 19 18'
            height='18'
            width='18'
            fill='#959da5'
          >
            <path
              d='M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z'
              fillRule='evenodd'
            ></path>
          </svg>
          <Typography variant={'subtitle2'} style={{ marginLeft: 12 }}>
            {LINKEDIN}
          </Typography>
        </div>
      </a>
    )
  }
  return (
    <Tooltip title={TITLE}>
      <a
        href={href}
        style={!inline ? style : {}}
        target='_blank'
        aria-label={TITLE}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 19 18'
          height='18'
          width='18'
          fill='#959da5'
        >
          <path
            d='M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z'
            fillRule='evenodd'
          ></path>
        </svg>
      </a>
    </Tooltip>
  )
}

LinkedinBadge.defaultProps = defaultProps
