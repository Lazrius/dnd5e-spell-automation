declare LoadingBar;
declare const LoadingBar: loading_bar;
declare interface loading_bar {
    total: number;
    current: number;
    lastPct: number;
    setPercentage: boolean;
    init(context: any, total: any): void;
    context: any;
    incrementProgress(): void;
}
