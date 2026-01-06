import type { ConfederationDto, TeamDto, TeamKeyDto } from './team.dto';

export type TeamKey = TeamKeyDto;

export class Team {
  private _id: number;
  private _key: TeamKey;
  private _confederationId: number;

  constructor(team: TeamDto) {
    this._id = team.id;
    this._key = team.key;
    this._confederationId = team.confederationId;
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
