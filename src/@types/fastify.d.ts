// eslint-disable-next-line
import { FastifyRequest } from 'fastify'

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      id: string
    }
  }
}
