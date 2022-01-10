export type GetCharactersRes = {
    count: number;
    items: Array<{
        codename: string;
        labelRu: string;
        labelEn: string;
    }>
}

export type GetUsernamesRes = {
    count: number;
    items: Array<string>
}


export type DictionaryApi = {
    methods: {
        getCharacters: string;
        getUsernames: string;
    };
    actions: {
        getCharacters: () => Promise<GetCharactersRes>
        getUsernames: () => Promise<GetUsernamesRes>;
    }
}
