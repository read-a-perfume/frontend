export interface tempUserType{
    name?: string;
    introduction?: string;
    follower?: number;
    following?: number;
    mytype?: string;
    onWrite?: number;
    completeWrite?: number;
}

export const TEMP_USER:tempUserType = {
    name: "츠키",
    introduction: "안녕하세요 딥디크를 좋아하는 츠키입니다 만나서 반가워요",
    follower: 123,
    following: 456,
    mytype: "fruity",
    onWrite: 5,
    completeWrite: 15,
}