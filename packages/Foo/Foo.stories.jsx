import React from 'react'
import { storiesOf } from '@storybook/react'

import Foo from './Foo'

const stories = storiesOf('Foo', module)

stories.add('Default', () => <Foo />)
