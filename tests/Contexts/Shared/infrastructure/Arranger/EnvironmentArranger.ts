export interface EnvironmentArranger {
  run(): Promise<void>;

  stop(): Promise<void>;
}
