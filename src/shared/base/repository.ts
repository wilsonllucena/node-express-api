import { Model } from "./model";

type ModelType<T> = {};
export abstract class Repository<T extends Model> {
    protected model: ModelType<T>;

    constructor(model: ModelType<T>) {
        this.model = model;
    }
};