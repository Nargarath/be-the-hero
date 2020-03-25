"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Incident {
    constructor(title, description, value, ong_id, id) {
        this.id = id ? id : null;
        this.title = title;
        this.description = description;
        this.value = value;
        this.ong_id = ong_id;
    }
    toJSON() {
        const incident = {
            id: this.id,
            title: this.title,
            description: this.description,
            value: this.value,
            ong_id: this.ong_id
        };
        if (!this.id) {
            delete incident.id;
        }
        return incident;
    }
}
exports.Incident = Incident;
//# sourceMappingURL=Incident.js.map