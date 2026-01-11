import type { ConfederationDto, TeamDto, TeamKeyDto } from './team.dto';

export type TeamKey = TeamKeyDto;

export class Team {
  private readonly _id: number;
  private readonly _key: TeamKey;
  private readonly _confederationId: number;
  private _name: string;

  constructor(team: TeamDto) {
    this._id = team.id;
    this._key = team.key;
    this._confederationId = team.confederationId;
    this._name = '';
  }

  public get id(): number {
    return this._id;
  }

  public get key(): TeamKey {
    return this._key;
  }

  public get confederationId(): number {
    return this._confederationId;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get name(): string {
    return this._name;
  }
}

export class Confederation {
  private readonly _id: number;
  private readonly _name: string;

  constructor(confederation: ConfederationDto) {
    this._id = confederation.id;
    this._name = confederation.name;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}
