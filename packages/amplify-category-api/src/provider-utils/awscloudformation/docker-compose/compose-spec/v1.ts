/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type StringOrList = string | ListOfStrings;
export type ListOfStrings = string[];
export type ListOrDict =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string | number | null;
    }
  | string[];
export type Labels =
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` ".+".
       */
      [k: string]: string;
    }
  | string[];

export interface ConfigSchemaV1Json {
  [k: string]: DefinitionsService;
}
/**
 * This interface was referenced by `ConfigSchemaV1Json`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9._-]+$".
 */
export interface DefinitionsService {
  build?: string;
  cap_add?: string[];
  cap_drop?: string[];
  cgroup_parent?: string;
  command?: string | string[];
  container_name?: string;
  cpu_shares?: number | string;
  cpu_quota?: number | string;
  cpuset?: string;
  devices?: string[];
  dns?: StringOrList;
  dns_search?: StringOrList;
  dockerfile?: string;
  domainname?: string;
  entrypoint?: string | string[];
  env_file?: StringOrList;
  environment?: ListOrDict;
  expose?: (string | number)[];
  extends?:
    | string
    | {
        service: string;
        file?: string;
      };
  extra_hosts?: ListOrDict;
  external_links?: string[];
  hostname?: string;
  image?: string;
  ipc?: string;
  labels?: Labels;
  links?: string[];
  log_driver?: string;
  log_opt?: {
    [k: string]: any;
  };
  mac_address?: string;
  mem_limit?: number | string;
  memswap_limit?: number | string;
  mem_swappiness?: number;
  net?: string;
  pid?: string | null;
  ports?: (string | number)[];
  privileged?: boolean;
  read_only?: boolean;
  restart?: string;
  security_opt?: string[];
  shm_size?: number | string;
  stdin_open?: boolean;
  stop_signal?: string;
  tty?: boolean;
  ulimits?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-z]+$".
     */
    [k: string]:
      | number
      | {
          hard: number;
          soft: number;
        };
  };
  user?: string;
  volumes?: string[];
  volume_driver?: string;
  volumes_from?: string[];
  working_dir?: string;
}
