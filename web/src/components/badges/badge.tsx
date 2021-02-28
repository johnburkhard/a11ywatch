/*
 * Copyright (c) A11yWatch, LLC. and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 **/

import React from 'react'
import { Typography, Tooltip } from '@material-ui/core'
import Image from 'next/image'
import { defaultProps } from './defaultProps'
import type { BadgeProps } from './badge-types'

export const Badge = ({
  style,
  inline,
  size: badgeSize,
  src,
  href,
  label,
  title,
}: BadgeProps) => {
  const size = badgeSize === 'small' ? 24 : 32

  const Anchor = ({ children }: { children: any }) => {
    return (
      <a
        href={href}
        style={!inline ? style : {}}
        target={'_blank'}
        aria-label={label}
      >
        {children}
      </a>
    )
  }

  const Img = () => <Image src={src} height={size} width={size} alt={title} />

  if (inline) {
    return (
      <Anchor>
        <div style={{ display: 'flex' }}>
          <Img />
          <Typography
            variant={'subtitle1'}
            style={{ marginLeft: '0.3em', fontSize: '1.05rem' }}
          >
            {title}
          </Typography>
        </div>
      </Anchor>
    )
  }

  return (
    <Tooltip title={String(label)}>
      <>
        <Anchor>
          <Img />
        </Anchor>
      </>
    </Tooltip>
  )
}

Badge.defaultProps = defaultProps
