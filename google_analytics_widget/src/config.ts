import { ImmutableObject } from 'seamless-immutable'

export interface Config {
  googleAnalyticId: string
}

export type IMConfig = ImmutableObject<Config>
