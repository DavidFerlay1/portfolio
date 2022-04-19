export interface Skill {
  id: string,
  label: string,
  level: number,
  type: string
}

export interface SkillMap {
  front: Skill[],
  back: Skill[]
}
