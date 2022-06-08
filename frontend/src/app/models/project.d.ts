import { FileInfo } from "./fileInfo";

export interface Project{
  id?: string,
  title?: string,
  previewFile?: FileInfo,
  description?: string,
  githubUrl?: string,
  websiteUrl?: string,
  vip: boolean

}
