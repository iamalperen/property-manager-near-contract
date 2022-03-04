import {VMContext} from "near-sdk-as";
import {createProperty, getAllProperties, getProperty, properties, removeProperty} from "../assembly";

const owner = "alp3r3n.testnet";

beforeEach(() => {
    VMContext.setCurrent_account_id(owner);
    VMContext.setSigner_account_id(owner);
});


describe("Person", () => {

    it("should able to create a new property", () => {
        expect(createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137")).toStrictEqual("✅ Property successfully created.");
    });

    it("should not able to create a property with same id", () => {
        createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137");
        expect(() => {
            createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137")
        }).toThrow();
    });

    it("should able to get a property by id", () => {
        createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137");
        const property = getProperty("11");
        if (property) {
            expect(property.id).toBe("11")
            expect(property.name).toBe("Home Sweet Home")
            expect(property.type).toBe(1)
            expect(property.address).toBe("Istanbul")
            expect(property.coords).toBe("40.99047310894828,29.022050248371137")
            expect(property.personId).not.toBeNull();
        }
    });

    it("should not able to get a property by non existing id", () => {
        expect(() => {
            getProperty("999")
        }).toThrow();
    });

    it("should able to get all properties after creating 2 properties", () => {
        createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137");
        createProperty("12", "Home Sweet Home2", 2, "Istanbul2", "42.99047310894828,22.022050248371137");
        const propertiesList = getAllProperties(owner);
        expect(propertiesList.length).toBe(2);
    });

    it("should not able to get all properties without creating any property", () => {
        const propertiesList = getAllProperties(owner);
        expect(propertiesList.length).toBe(0);
    });

    it("should not able to get all properties without accurate account id", () => {
        expect(() => {
           getAllProperties("test owner");
        }).toThrow();
    });

    it("should able to remove a property by id", () => {
        createProperty("11", "Home Sweet Home", 1, "Istanbul", "40.99047310894828,29.022050248371137");
        expect(removeProperty("11")).toStrictEqual("🗑️ Property successfully removed.");
    });

    it("should not able to remove a property by non existing id", () => {
        expect(() => {
            removeProperty("999")
        }).toThrow();
    });
})
