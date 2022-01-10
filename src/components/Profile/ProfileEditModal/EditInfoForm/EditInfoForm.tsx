import React, {ChangeEvent, useEffect, useMemo} from "react";
import {useForm} from "react-hook-form";
import TextArea from "../../../../shared/Form/TextArea";
import {useMutation, useQuery} from "react-query";
import {GetCharactersRes} from "../../../../api/endpoints/dictionary/types";
import Button from "../../../../shared/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import {editInfoValidationSchema} from "../../../../validation-schemas";
import API from "../../../../api";
import {API_DICTIONARY_CHARACTERS, API_EDIT_PROFILE, API_PROFILE_INFO} from "../../../../constants";
import {Select, Form, InputSteamUrl, CharacterSelect} from "../../../../shared/Form";
import {useSnapshot} from "valtio";
import store from "../../../../store";
import {EditProfileReqBody, GetProfileInfoRes} from "../../../../api/endpoints/user/types";
import Spinner from "../../../../shared/Spinner";
import useMyProfile from "../../../../hooks/query-hooks/use-my-profile";
import useMyCharacter from "../../../../hooks/query-hooks/use-my-character";
import {CustomAxiosError} from "../../../../api/types";
import {EditInfoFormProps} from "./EditInfoForm.props";
import queryClient from "../../../../api/query-client";

type EditInfoForm = {
    steamUrl: string;
    character: {label: string; value: string} | null;
    otherInfo: string;
}

const EditInfoForm: React.FC<EditInfoFormProps> = ({onSuccess}) => {
    const {data: profileInfo, refetch: refetchMyProfile} = useMyProfile();
    const character = useMyCharacter();

    const useFormResult = useForm<EditInfoForm>({
        defaultValues: {
            steamUrl: "",
            character: null,
            otherInfo: ""
        },
        resolver: yupResolver(editInfoValidationSchema),
        reValidateMode: 'onSubmit'
    });
    const {reset, setError, handleSubmit} = useFormResult;

    const {mutateAsync, error, isLoading} = useMutation<void, CustomAxiosError, EditProfileReqBody>(API_EDIT_PROFILE, API.user.actions.editProfile);

    const handleSubmitForm = async (values: EditInfoForm) => {
        if(!values.character) {
            setError("character", {message: "You should pick your main character"});
            return
        }
        await mutateAsync({
            steamUrl: values.steamUrl,
            character: values.character.value ,
            otherInfo: values.otherInfo.trim().length > 0 ? values.otherInfo.trim() : undefined
        });
        refetchMyProfile();
        store.toaster.createMessage("Profile was successfully edited", "success");
        if(onSuccess) {
            onSuccess();
        }
    }

    useEffect(() => {
        if(character && profileInfo) {
            reset({
                steamUrl: profileInfo.steamUrl,
                character: {
                    label: character.labelEn,
                    value: character.codename
                },
                otherInfo: profileInfo.otherInfo || ""
            })
        }
    }, [character, profileInfo]);

    useEffect(() => {
        if(error?.response) {
            error.response.data.messages.forEach((message) => setError("steamUrl", {message}));
        } else if(error) {
            setError("steamUrl", {message: "SERVER_ERROR"})
        }
    }, [error])

    if(!profileInfo || !character) {
        return <Spinner className={'marginLeftAuto marginRightAuto'} size={'md'} color={'primary'} />
    }

    return <Form<EditInfoForm> onSubmit={handleSubmit(handleSubmitForm)} useFormResult={useFormResult}>
        <InputSteamUrl label={'Steam profile URL:'} type={'text'} name={'steamUrl'} />
        <CharacterSelect label={'Main character'} placeholder={'Click to open the list'} name={'character'}/>
        <TextArea label={'Other information'} rows={5} name={'otherInfo'}
                  placeholder={'You can write here anything you want, e.g. bio/social media links/sub-main characters info'} />
        <Button isLoading={isLoading} type={'submit'}>Save</Button>
    </Form>
}

export default EditInfoForm;