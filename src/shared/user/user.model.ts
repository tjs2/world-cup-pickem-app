import {
  type UserDto,
  type RoleDTO,
  type RoleDtoIdOptions,
  type RoleDtoNameOptions,
  RoleDtoEnum,
} from './user.dto';

type RoleIdOptions = RoleDtoIdOptions;
type RoleNameOptions = RoleDtoNameOptions;

export class Role {
  private readonly _id: RoleIdOptions;
  private readonly _name: RoleNameOptions;

  constructor(role: RoleDTO) {
    this._id = role.id;
    this._name = role.name;
  }

  public get id(): RoleIdOptions {
    return this._id;
  }

  public get name(): RoleDtoNameOptions {
    return this._name;
  }
}

export const ROLE_USER = new Role(RoleDtoEnum.USER);
export const ROLE_ADMIN = new Role(RoleDtoEnum.ADMIN);
export const ROLES = [ROLE_USER, ROLE_ADMIN];

export class User {
  private readonly _id: number;
  private _name: string;
  private _email: string;
  private _roles: Role[];

  constructor(user: UserDto) {
    this._id = user.id;
    this._email = user.email;
    this._name = user.name;
    this._roles = user.roles
      .map((roleDto) =>
        ROLES.find(
          (role) => role.id === roleDto.id && role.name === roleDto.name,
        ),
      )
      .filter((role) => !!role);
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get roles(): Role[] {
    return this._roles;
  }

  public set roles(value: Role[]) {
    this._roles = value;
  }

  public get hasAdminRole(): boolean {
    return this.hasRole(ROLE_ADMIN);
  }

  public hasRole(role: Role): boolean {
    return !!this.roles.find((r) => r.id === role.id && r.name === role.name);
  }
}
