import SRDItem from "./item"; 

export default class SRDAlignment extends SRDItem {
    abbreviation: string;
    description: string;

    constructor(name: string, index: string, url: string, abbreviation: string, description: string) {
        super(name, index, url);
        this.abbreviation = abbreviation;
        this.description = description;
    }
}
