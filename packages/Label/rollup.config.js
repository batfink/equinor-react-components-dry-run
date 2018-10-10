import base from '../../rollup.config.js'
import pkg from './package.json'

const dest = pkg.main.split('/')

export default {
    ...base,
    input: pkg.module,
    output: {
        ...base.output,
        dir: dest[0],
        file: dest[1],
    },
}
