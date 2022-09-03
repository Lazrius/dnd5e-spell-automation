declare interface FilterTrait {
    _filters: any;
    _addFilter(inFilterName: any, inData: Record<string, unknown>, inName?: boolean): void;
    _addFilter(inFilterName: any, inData: Record<string, unknown>, inName?: boolean): void;
    _testFilter(inFilterName: any, inData: Record<string, unknown>): void;
    _testFilter(inFilterName: any, inData: Record<string, unknown>): void;
    filter(inFilterName: any, inData?: Record<string, unknown>, inName?: string): this;
    filter(inFilterName: any, inData?: Record<string, unknown>, inName?: string): this;
}

