// import { PrimaryColumn } from "typeorm";

import { v4 as uuid } from 'uuid'

class BaseEntity {

    // @PrimaryColumn()
    id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }

}

export { BaseEntity }