export class MenuItem {
    name: String;
    anchor: String;
    isActive: boolean;
    constructor(name: String, anchor: String, isActive: boolean) {
        this.anchor = anchor;
        this.isActive = isActive;
        this.name = name;
    }
}