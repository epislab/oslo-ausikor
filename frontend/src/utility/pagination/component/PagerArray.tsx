import * as React from "react";

import axios from "axios";
import Button from "@mui/material/Button";

//**TODO */ 스타일링 styles/button.css 적용함. 2023-09-13

interface PagerArrayProps {
    rowCount: number;
    rowStart: number;
    rowEnd: number;
    pageSize: number;
    pageCount: number;
    pageNumber: number;
    pageStart: number;
    pageEnd: number;
    blockSize: number;
    blockCount: number;
    blockNow: number;
    blockPrev: number;
    blockNext: number;
    pageLast: number;
    pageOfBlockPrev: number;
    pageOfBlockNext: number;
    setPageNow: (page: number) => void;
    setWishes: (wishes: unknown) => void;
    url: string;
    accessToken: string;
    pageNow: number;
}

export default function PagerArray({
    rowCount,
    rowStart,
    rowEnd,
    pageSize,
    pageCount,
    pageNumber,
    pageStart,
    pageEnd,
    blockCount,
    blockPrev,
    blockNext,
    pageLast,
    pageOfBlockPrev,
    pageOfBlockNext,
    setPageNow,
    setWishes,
    url,
    accessToken,
    pageNow,
}: PagerArrayProps) {

    React.useEffect(() => {
        console.log(" *********** 페이지번호 START *********** ");

        console.log("전체 로우 수: " + rowCount);
        console.log("스타트로우: " + rowStart);
        console.log("엔드로우: " + rowEnd);
        console.log("페이지번호: " + pageNumber);
        console.log("pageCount: " + pageCount);
        console.log("스타트페이지: " + pageStart);
        console.log("엔드페이지: " + pageEnd);
        console.log("이후블록 페이지: " + pageOfBlockNext);
        console.log("마지막 페이지 : " + pageLast);
        console.log("전체 블록 수: " + blockCount);
        console.log("프리브블록 존재 : " + blockPrev);
        console.log("이전블록 페이지: " + pageOfBlockPrev);
        console.log("넥스트블록 존재 : " + blockNext);
        console.log(" *********** 페이지번호 END  *********** ");
    }, [blockCount, blockNext, blockPrev, pageCount, pageEnd, pageLast, pageNumber, pageOfBlockNext, pageOfBlockPrev, pageStart, rowCount, rowEnd, rowStart])
  

    const solution = (url: string, pageNumber: number, pageSize: number, tokenA: string) => {
        axios
            .get(
                `${url}page=${pageNumber}&size=${pageSize}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${tokenA}`,
                    },
                }
            )
            .then((res) => {
                console.log(" 페이저 res.data : ", JSON.stringify(res.data));

                setWishes(res.data.array);
            })
            .catch();
    };

    const first = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNow(1);
                solution(url, 1, pageSize, accessToken);
            }}
            rev={undefined}
        />
    );

    const prev = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNow(pageOfBlockPrev);
                solution(url, pageOfBlockPrev, pageSize, accessToken);
            }}
            rev={undefined}
        />
    );

    const list = () => {
        const list = [];
        console.log("색칠하는 페이지 번호 : ", pageNow);
        for (let i = pageStart - 1; i < pageEnd; i++) {
            list.push(
                <li
                    key={i}
                    style={{
                        background: pageNow == i + 1 ? '#00707b' : '#fff',
                        color: pageNow == i + 1 ? '#fff' : '#333'
                    }}
                    onClick={() => {
                        setPageNow(i + 1)
                        solution(url, i + 1, pageSize, accessToken)
                    }}
                >
                    {i + 1}
                </li>
            );
        }

        return list;
    };
    const next = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNow(blockNext);
                solution(url, pageOfBlockNext, pageSize, accessToken);
            }}
            rev={undefined}
        >{'>'}</Button>
    );

    const last = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNow(pageLast); // pageSize
                solution(url, pageLast, pageSize, accessToken);
            }}
            rev={undefined}

        >{'>>'}</Button>
    );

    return (
        <>
            <div className="pagination">
                <span>{blockPrev && first()}</span>
                <span>{blockPrev && prev()}</span>
                {<ul className="fcc-ol">{list()}</ul>}
                <span>{blockNext && next()}</span>
                <span>{blockNext && last()}</span>
            </div>
        </>
    );
}

//** https://gist.github.com/its-tayo/f51f8750ca37688b9fb8d7b389b32614 */



//** https://v3-2.adminbro.com/admin-bro-design-system_src_molecules_pagination.tsx.html */

export const Solution = (
    pageNumber: number,
    pageSize: number,
    url: string,
    tokenA: string
) => {
    const data: unknown = { pageNumber: pageNumber, pageSize: pageSize };

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenA}`,
    };
    const rows = axios.post(url, data, { headers });
    return rows;
};
