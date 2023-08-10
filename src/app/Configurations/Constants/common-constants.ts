  export const Host: string = "localhost";
  export const Port: string = "80";
  export const Protocol: string = "http";
  export const BaseUrl: string = `${Protocol}://${Host}:${Port}`;
  export function AppendPathsToBaseUrl(paths: string[]): string {
    let currentUrl: string = BaseUrl
    paths.forEach(path => currentUrl += (`/${path}`))
    return currentUrl
  }
