import React, { Dispatch, SetStateAction } from "react";

export interface ModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserInfo {
    id: string;
    password: string;
}

export interface InputProps {
    inputs: UserInfo;
    setInputs: React.Dispatch<React.SetStateAction<UserInfo>>;
    setErrors: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginLayoutProps {
    setCondition: React.Dispatch<React.SetStateAction<string>>;
}

export interface LoginConditionProps extends LoginLayoutProps {
    condition: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface LoginModalTitleProps {
    tabClick: string;
    setTabClick: React.Dispatch<React.SetStateAction<string>>;
    setInputs: React.Dispatch<React.SetStateAction<UserInfo>>;
}

export interface ButtonsProps {
    tabClick: string;
    errors: string;
    inputs: UserInfo;
    condition: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface LinksProps {
    linkLabel: string;
    label?: string;
    onClick?: React.MouseEventHandler<HTMLSpanElement>;
    style?: any;
}