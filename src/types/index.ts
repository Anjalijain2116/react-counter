export type CounterState = {
    count: number;
};

export type CounterProps = {
    initialCount?: number;
    maxCount?: number;
    minCount?: number;
    onCountChange?: (count: number) => void;
};