/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ChevronLeft from '@spectrum-icons/workflow/ChevronLeft'

const Prev = ({ url, title }) => {
  return (
    <Link
      to={url}
      rel='prev'
      css={css`
        color: rgb(13, 102, 208);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      `}
    >
      <ChevronLeft
        css={css`
          height: 1em;
          width: 1em;
          top: 0.125em;
          position: relative;
        `}
      />{' '}
      {title}
    </Link>
  )
}

Prev.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
}

Prev.defaultProps = {
  url: '',
  title: ''
}

export default Prev
