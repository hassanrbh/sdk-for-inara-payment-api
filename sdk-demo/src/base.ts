import fetch from "isomorphic-unfetch";

type Config = {
  privateKey: string;
  baseUrl?: string;
};

export abstract class Base {
  private privateKey: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.privateKey = config.privateKey;
    this.baseUrl = config.baseUrl || "http://localhost:3001";
  }

  protected rq<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: this.privateKey,
    };

    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return console.log(response.statusText);
    });
  }
}
