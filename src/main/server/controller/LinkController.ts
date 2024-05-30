import db from '../database'
import { DefaultArgs, GetFindResult } from '@prisma/client/runtime/library'
import { Prisma, PrismaPromise } from '@prisma/client'

export interface ILink {
  findMany: () => PrismaPromise<
    GetFindResult<Prisma.$LinkPayload<DefaultArgs>, Prisma.LinkFindManyArgs<DefaultArgs>>[]
  >
}

export const LinkController = {
  findMany: () => db.link.findMany()
}
