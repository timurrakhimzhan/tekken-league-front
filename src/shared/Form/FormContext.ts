import {createContext} from "react";
import {UseFormReturn} from "react-hook-form/dist/types";

type FormContext<T = any> = UseFormReturn<T>;

const FormContext = createContext<FormContext | null>(null);

export default FormContext;