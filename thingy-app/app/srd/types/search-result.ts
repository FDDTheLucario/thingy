import { Type } from "class-transformer";
import SRDItem from "./item"

export default class SRDSearchResult {
    count: number;
    @Type(() => SRDItem)
    results: SRDItem[];

    constructor(count: number, results: SRDItem[]) {
        this.count = count;
        this.results = results;
    }
}
