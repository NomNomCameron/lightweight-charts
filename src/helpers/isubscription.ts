export type Callback<T1 = void, T2 = void> = (param1: T1, param2: T2) => void;

export interface ISubscription<T1 = void, T2 = void> {
	subscribe(callback: Callback<T1, T2>, linkedObject?: unknown, singleshot?: boolean): void;
	unsubscribe(callback: Callback<T1, T2>): void;
	unsubscribeAll(linkedObject: unknown): void;
}
