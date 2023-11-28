export interface eachFeedType{
    author:string;
    content:string;
    tag: string[];
    like:number;
    commentCnt:number;
    
}

export const TEMP_EACH_FEED:eachFeedType = {
    author:'hwangyo92',
    content:'이 향수는 우아하고 로맨틱한 꽃 향기의 매력',
    tag: ['플로랄','고급짐'],
    like:172,
    commentCnt:40,
}