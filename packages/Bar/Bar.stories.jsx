import React from 'react'
import { storiesOf } from '@storybook/react'

import Bar from './Bar'

const stories = storiesOf('Bar', module)

stories.add('Default', () => <Bar />)
