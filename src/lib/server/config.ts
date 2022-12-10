import fs from 'fs'

import toml from 'toml'

import type { Config } from '$lib/types'

export default function getConfig(): Config {
    return toml.parse(fs.readFileSync('./config.toml').toString())
}