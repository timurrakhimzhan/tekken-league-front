import {AxiosError} from "axios";

type CustomAxiosError = AxiosError<{
    messages: Array<string>;
}>;


