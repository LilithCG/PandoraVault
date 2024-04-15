import {ElectronAPI} from '@electron-toolkit/preload'
import {PrismaAPI} from "../main/server/api";

declare global {
  interface Window {
    electron: ElectronAPI
    api: PrismaAPI
  }
}
