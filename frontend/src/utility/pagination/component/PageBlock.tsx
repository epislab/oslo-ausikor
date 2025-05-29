// import { Icon, IconButton } from "@mui/material";
//import Icon from '@core/components/icon'

import { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

//**TODO */ 스타일링 styles/button.css 적용함. 2023-09-13

interface PageBlockProps {
    rowCount: number;
    rowStart: number;
    rowEnd: number;
    pageSize: number;
    pageCount: number;
    pageNumber: number;
    pageStart: number;
    pageEnd: number;
    pageLast: number;
    blockSize: number;
    blockCount: number;
    blockNumber: number;
    blockPrev: number;
    blockNext: number;
    arrowPrev: number;
    arrowNext: number;
    arrowFirst: number;
    arrowLast: number;
    setWishes: (wishes: unknown) => void; // 함수 타입은 실제 사용에 맞게 수정
    url: string;
    accessToken: string;
}

export default function PageBlock({
    rowCount,
    rowStart,
    rowEnd,
    pageSize,
    pageCount,
    pageNumber,
    pageStart,
    pageEnd,
    pageLast,
    blockSize,
    blockCount,
    blockNumber,
    blockPrev,
    blockNext,
    arrowPrev,
    arrowNext,
    arrowFirst,
    arrowLast,
    setWishes,
    url,
    accessToken,
}: PageBlockProps) {
    //   setPageNumber 이 부분 수정 필요함.

    const setPageNumber = (pageNumber: number) => {
        console.log("페이지번호 : ", pageNumber);
        console.log("페이지사이즈 : ", pageSize);
        console.log("토큰 : ", accessToken);
        console.log("url : ", url);
        console.log("setWishes : ", setWishes);
        solution(url, pageNumber, pageSize, accessToken);
    };
    useEffect(() => {
        console.log(" *********** 페이지번호 START *********** ");

        console.log("rowCount: " + rowCount);
        console.log("rowStart: " + rowStart);
        console.log("rowEnd: " + rowEnd);

        console.log("pageNumber: " + pageNumber);
        console.log("pageCount: " + pageCount);
        console.log("pageSize: " + pageSize);
        console.log("pageStart: " + pageStart);
        console.log("pageEnd: " + pageEnd);
        console.log("pageLast : " + pageLast);

        console.log("blockCount: " + blockCount);
        console.log("blockSize: " + blockSize);
        console.log("blockNumber: " + blockNumber);
        console.log("blockNext: " + blockNext);
        console.log("blockPrev: " + blockPrev);
        console.log("blockNext: " + blockNext);

        console.log("arrowPrev : " + arrowPrev);
        console.log("arrowNext : " + arrowNext);
        console.log("arrowFirst : " + arrowFirst);
        console.log("arrowLast : " + arrowLast);

        console.log(" *********** 페이지번호 END  *********** ");
    })


    const solution = (url: string, pageNumber: number, pageSize: number, accessToken: string) => {
        axios
            .get(
                `${url}page=${pageNumber}&size=${pageSize}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
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
                setPageNumber(1);
                solution(url, 1, pageSize, accessToken);
            }}
            rev={undefined}
        >{'<<'}</Button>
    );

    const prev = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNumber(blockPrev);
                solution(url, blockPrev, pageSize, accessToken);
            }}
            rev={undefined}
        >{'<'}</Button>
    );

    const list = () => {
        const list = [];
        console.log("색칠하는 페이지 번호 : ", pageNumber);
        for (let i = pageStart - 1; i < pageEnd; i++) {
            list.push(
                <li
                    key={i}
                    style={{
                        background: pageNumber == i + 1 ? '#00707b' : '#fff',
                        color: pageNumber == i + 1 ? '#fff' : '#333'
                    }}
                    onClick={() => {
                        setPageNumber(i + 1)
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
                setPageNumber(blockNext);
                solution(url, blockNext, pageSize, accessToken);
            }}
            rev={undefined}
        >{'>'}</Button>
    );

    const last = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setPageNumber(pageLast); // pageSize
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