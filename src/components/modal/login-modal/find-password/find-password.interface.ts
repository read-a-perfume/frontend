import React, { SetStateAction } from "react";

export interface FindIdInfo {
    id: string;
    email: string;
}

export interface InputProps {
    setCondition: React.Dispatch<React.SetStateAction<string>>;
    inputs: FindIdInfo;
    setInputs: React.Dispatch<SetStateAction<FindIdInfo>>;
    errors: string;
    setErrors: React.Dispatch<SetStateAction<string>>;
}