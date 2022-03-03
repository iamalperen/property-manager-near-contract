import {Context, PersistentUnorderedMap, logging} from "near-sdk-as";
import {Property} from "./model";
import {PropertyType} from "../../utils";

export const properties = new PersistentUnorderedMap<string, Property>("p");

export function createProperty(propertyId: string, name: string, type: PropertyType, address: string, coords: string): string {
    assert(!properties.contains(propertyId), "🚫 This property already exists.");
    const user = Context.sender;
    const property = new Property(propertyId, name, type, address, coords, user);
    properties.set(propertyId, property);
    logging.log(`✅ Property successfully created.`);
    return `✅ Property successfully created.`;
}

export function getProperty(propertyId: string): Property | null {
    assert(properties.contains(propertyId), "🚫 This property does not exist.");
    logging.log(`🏠 Property successfully exists and return.`);
    return properties.get(propertyId);
}

export function getAllProperties(): Array<Property> {
    const propertiesList: Array<Property> = [];
    const user = Context.sender;

    for (let i = 0; i < properties.entries().length; i++) {
        if (properties.entries()[i].value.personId == user) {
            propertiesList.push(properties.entries()[i].value);
        }
    }

    logging.log(`🏠 User have ${propertiesList.length} properties.`);
    return propertiesList;
}

export function removeProperty(propertyId: string): string {
    assert(properties.contains(propertyId), "🚫 This property does not exist.");
    properties.delete(propertyId);
    logging.log(`🗑️ Property successfully removed.`);
    return `🗑️ Property successfully removed.`;
}
