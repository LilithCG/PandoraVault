import {ElectronAPI} from '@electron-toolkit/preload'
import {Prisma} from "@prisma/client";

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      ping: () => Promise<Prisma.ProfileCreateInput>
    }
  }
}
