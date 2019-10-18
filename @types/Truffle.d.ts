// tslint:disable-next-line:no-namespace
declare namespace Truffle {
  // tslint:disable-next-line:interface-name
  interface Deployer {
    then<T>(callback: (deployer: Deployer) => T): Promise<T>
  }
}
