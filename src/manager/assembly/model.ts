import {PropertyType} from "../../utils";

@nearBindgen
export class Property {
    constructor(
        public id: string,
        public name: string,
        public type: PropertyType,
        public address: string,
        public coords: string,
        public personId: string
    ) {
    }
}