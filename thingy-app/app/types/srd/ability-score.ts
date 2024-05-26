import SRDSkill from "./skill";

export default class SRDAbilityScore extends SRDItem {
    description: string[];
    fullName: string;
    skills: SRDSkill[];

    constructor(index: string, name: string, url: string, fullName: string, description: string[], skills: SRDSkill[]) {
        super(index, name, url); 
        this.fullName = fullName;
        this.description = description;
        this.skills = skills;
    }
}

/* 
 * {
  "index": "int",
  "name": "INT",
  "full_name": "Intelligence",
  "desc": [
    "Intelligence measures mental acuity, accuracy of recall, and the ability to reason.",
    "An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks."
  ],
  "skills": [
    {
      "name": "Arcana",
      "index": "arcana",
      "url": "/api/skills/arcana"
    },
    {
      "name": "History",
      "index": "history",
      "url": "/api/skills/history"
    },
    {
      "name": "Investigation",
      "index": "investigation",
      "url": "/api/skills/investigation"
    },
    {
      "name": "Nature",
      "index": "nature",
      "url": "/api/skills/nature"
    },
    {
      "name": "Religion",
      "index": "religion",
      "url": "/api/skills/religion"
    }
  ],
  "url": "/api/ability-scores/int"
}*/
