import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  googleAnalyticsId: string
}

export type IMConfig = ImmutableObject<Config>
