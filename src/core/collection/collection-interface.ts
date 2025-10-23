export interface CollectionInterface<T> {
    add(t: T): CollectionInterface<T>
    remove(t:T): CollectionInterface<T>
    getLength(): number
}