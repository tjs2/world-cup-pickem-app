import { Team } from '@/team/team.model';
import type { CupDto, GroupDto, matchDto } from './cup.dto';

export class Match {
  private readonly _id: number;
  private _homeTeam: Team;
  private _homeScore: number | null;
  private _awayScore: number | null;
  private _awayTeam: Team;
  private _kickoff: string;

  constructor(match: matchDto) {
    this._id = match.id;
    this._homeTeam = new Team(match.homeTeam);
    this._homeScore = match.id;
    this._awayScore = match.awayScore;
    this._awayTeam = new Team(match.awayTeam);
    this._kickoff = match.kickoff;
  }

  public get if(): number {
    return this._id;
  }

  public get homeTeam(): Team {
    return this._homeTeam;
  }

  public set homeTeam(value: Team) {
    this._homeTeam = value;
  }

  public get homeScore(): number | null {
    return this._homeScore;
  }

  public set homeScore(values: number | null) {
    this._homeScore = values;
  }

  public get awayScore(): number | null {
    return this._awayScore;
  }

  public set awayScore(value: number | null) {
    this._awayScore = value;
  }

  public get awayTeam(): Team {
    return this._awayTeam;
  }

  public set awayTeam(value: Team) {
    this._awayTeam = value;
  }

  public get kickoff(): string {
    return this._kickoff;
  }

  public set kickoff(value: string) {
    this._kickoff = value;
  }
}

export class Group {
  private readonly _id: number;
  private _name: string;
  private _teams: Team[];
  private _matches: Match[];

  constructor(group: GroupDto) {
    this._id = group.id;
    this._name = group.name;
    this._teams = group.teams.map((t) => new Team(t));
    this._matches = group.matches.map((m) => new Match(m));
  }

  public get id() {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get teams(): Team[] {
    return this._teams;
  }

  public set teams(value: Team[]) {
    this._teams = value;
  }

  public get matches(): Match[] {
    return this._matches;
  }

  public set matches(values: Match[]) {
    this._matches = values;
  }
}

export class Cup {
  private readonly _id: number;
  private _name: string;
  private _year: number;
  private _predictBeforeUntilMs: number | null;
  private _predictUntilDate: Date | null;
  private _isAutomaticUserApprove: boolean;
  private _groups: Group[];

  constructor(cup: CupDto) {
    this._id = cup.id;
    this._name = cup.name;
    this._year = cup.year;
    this._predictBeforeUntilMs = cup.predictBeforeUntilMs;
    this._predictUntilDate = cup.predictUntilDate
      ? new Date(cup.predictUntilDate)
      : null;
    this._isAutomaticUserApprove = cup.isAutomaticUserApprove;
    this._groups = cup.groups.map((g) => new Group(g));
  }

  public get id() {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get predictBeforeUntilMs(): number | null {
    return this._predictBeforeUntilMs;
  }

  public set predictBeforeUntilMs(value: number | null) {
    this._predictBeforeUntilMs = value;
  }

  public get predictUntilDate(): Date | null {
    return this._predictUntilDate;
  }

  public set predictUntilDate(value: Date | null) {
    this._predictUntilDate = value;
  }

  public get isAutomaticUserApprove(): boolean {
    return this._isAutomaticUserApprove;
  }

  public set isAutomaticUserApprove(value: boolean) {
    this._isAutomaticUserApprove = value;
  }

  public get groups(): Group[] {
    return this._groups;
  }

  public set groups(value: Group[]) {
    this._groups = value;
  }
}
