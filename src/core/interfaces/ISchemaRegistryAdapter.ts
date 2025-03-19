export interface ISchemaRegistryAdapter {
  fetchSchema(): Promise<string>;
}
