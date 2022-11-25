export const languages: LanguageTypes[] = [
    {
        type: 'english',
        label: 'English',
        level: 'Native'
    },
    {
        type: 'greek',
        label: 'Greek',
        level: 'Fluent'
    },
    {
        type: 'spanish',
        label: 'Spanish',
        level: 'Intermediate'
    }
];

export interface LanguageTypes {
    type: string,
    label: string,
    level: string
}