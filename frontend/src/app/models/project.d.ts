import { FileInfo } from "./fileInfo";

export interface Project{
  id?: number,
  title?: string,
  previewFile?: FileInfo,
  description?: string,
  githubUrl?: string,
  websiteUrl?: string,
  vip: boolean

}
