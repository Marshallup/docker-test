export class CreatePeopleDto {
    readonly name: string;
    readonly dateOfBirth: Date;
    readonly genres: string[];
    readonly professions: string[];
    readonly films: string[];
}

export type CreatePeoplesDto = CreatePeopleDto[];