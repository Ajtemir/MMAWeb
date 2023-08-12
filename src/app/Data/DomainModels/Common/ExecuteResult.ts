export class ExecuteResult<T>{
  public message: string;
  public isOk: boolean;
  public data?: T;
}
