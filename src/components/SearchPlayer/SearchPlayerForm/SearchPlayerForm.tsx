import Form from "../../../shared/Form/Form";
import {useForm} from "react-hook-form";
import React, {useState} from "react";
import Input from "../../../shared/Form/Input";
import Button from "../../../shared/Button";
import {SearchFormWrapperStyled, ButtonsWrapperStyled } from "./styled";
import {CharacterSelect} from "../../../shared/Form";
import {useSearchPlayers} from "../../../hooks/query-hooks/use-search-players";
import {SearchPlayerProps} from "../SearchPlayer.props";
import {SearchPlayerFormProps} from "./SearchPlayerForm.props";

type SearchPlayerForm = {
    username: string,
    character: {
        label: string;
        value: string
    } | null;
}

const SearchPlayerForm: React.FC<SearchPlayerFormProps> = (props) => {
    const useFormResult = useForm<SearchPlayerForm>({
        defaultValues: {
            username: '',
            character: null
        }
    });
    const {handleSubmit} = useFormResult;
    const {isLoading, handleChangeQueryParams} = useSearchPlayers();
    const handleSubmitSearch = async ({username, character}: SearchPlayerForm) => handleChangeQueryParams({username, character: character?.value})

    return <Form<SearchPlayerForm> onSubmit={handleSubmit(handleSubmitSearch)} useFormResult={useFormResult} {...props}>
        <SearchFormWrapperStyled>
            <Input name={'username'} placeholder={'Search by username'} />
            <CharacterSelect isClearable placeholder={'Search by character'} name={'character'} />
            <Button type={'submit'} isLoading={isLoading}>
                Search
            </Button>
        </SearchFormWrapperStyled>
    </Form>
}

export default SearchPlayerForm;