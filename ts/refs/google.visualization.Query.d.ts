declare module google {
    module visualization {
        // https://developers.google.com/chart/interactive/docs/reference#Query
        class Query {
          constructor(datasourceurl: string, opt_options?: any);
          abort(): void;
          setRefreshInterval(seconds: number): void;
          setTimeout(seconds: number): void;
          setQuery(string: string): void;
          send(callback: (response: google.visualization.QueryResponse) => void): void;
        }
        class QueryResponse {
          getDataTable(): DataTable;
          getDetailedMessage(): string;
          getMessage(): string;
          getReasons(): string[];
          hasWarning(): boolean;
          isError(): boolean;
        }
    }
}