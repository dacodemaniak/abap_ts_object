import type { CollectionInterface } from "./collection-interface";

export abstract class Collection<T> implements CollectionInterface<T> {
    protected collection: Array<T> | Map<any, T> | Set<T> | undefined = undefined

    abstract add(t: T): Collection<T>
    abstract remove(t: T): Collection<T>
    abstract getLength(): number
    
}