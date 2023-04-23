export interface Skill {
  id?: number,
  label: string,
  level: number,
  type: string
}

export interface SkillMap {
  front: Skill[],
  back: Skill[],
  misc: Skill[]
}
