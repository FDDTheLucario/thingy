export default class SRDSkill extends SRDItem {
    abilityScore: SRDItem[];

    constructor(name: string, index: string, url: string, abilityScore: SRDItem[]) {
        super(name, index, url);
        this.abilityScore = abilityScore;
    }
} 
