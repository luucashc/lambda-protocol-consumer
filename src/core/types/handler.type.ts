type Event = {
  records: {
    [key: string]: [
      {
        value: string;
      }
    ];
  };
};

type LambdaResponse = {
  statusCode: number;
  body: string;
};

export { Event, LambdaResponse };
