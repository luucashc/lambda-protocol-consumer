interface ICreateProtocolUseCase {
  execute(params: Buffer<ArrayBuffer>): Promise<void>;
}

export { ICreateProtocolUseCase };
