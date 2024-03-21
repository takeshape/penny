export type ServerParams = Record<string, string | string[]>;

export type ServerProps<Params = ServerParams> = {
  params: Params;
  searchParams: ServerParams;
};
