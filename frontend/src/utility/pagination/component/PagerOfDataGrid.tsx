// import { Icon, IconButton } from "@mui/material";
//import Icon from '@core/components/icon'


import * as React from "react";
import axios from "axios";
import { Button } from "@mui/material";

//**TODO */ 스타일링 styles/button.css 적용함. 2023-09-13

interface PagerOfDataGridProps {
    $pageSize: number;
    $pageNow: number;
    $rowCount: number;
    setCurrPage: (page: number) => void;
    setRows: (rows: unknown[]) => void; // 실제 타입에 맞게 수정
    url: string;
    accessToken: string;
}

export default function PagerOfDataGrid({
    $pageSize,
    $pageNow,
    $rowCount,
    setCurrPage,
    setRows,
    url,
    accessToken,
}: PagerOfDataGridProps) {
    // console.log(` ************ 현재 페이지 : ${$$pageNow} ************ `)

    const pageNumber = $pageNow == 0 ? 1 : $pageNow;

    const pageSize = $pageSize;
    const blockSize = 10;
    const rowCount = $rowCount;
    const nmg = rowCount % pageSize;
    const pageCount =
        nmg == 0
            ? Math.floor(rowCount / pageSize)
            : Math.floor(rowCount / pageSize) + 1;
    const blockCount =
        pageCount % blockSize != 0
            ? Math.floor(pageCount / blockSize) + 1
            : Math.floor(pageCount / blockSize);
    //   const startRow = (pageNumber - 1) * pageSize + 1;
    //   const endRow =
    //     rowCount > pageNumber * pageSize ? pageNumber * pageSize : rowCount;
    const startPage = pageNumber - ((pageNumber - 1) % blockSize);
    const endPage =
        startPage + blockSize - 1 < pageCount
            ? startPage + blockSize - 1
            : pageCount;
    const lastPage = blockCount * blockSize - 9;
    const existPrev = startPage - blockSize > 0;
    const existNext = endPage < lastPage;
    const prevBlock = startPage - blockSize;
    const nextBlock = startPage + blockSize;

    // console.log(" *********** 페이지번호 START *********** ");
    // console.log("페이지번호: " + pageNumber);
    // console.log("전체 로우 수: " + rowCount);
    // console.log("전체 페이지 수: " + pageCount);
    // console.log("전체 블록 수: " + blockCount);
    // console.log("스타트로우: " + startRow);
    // console.log("엔드로우: " + endRow);
    // console.log("스타트페이지: " + startPage);
    // console.log("엔드페이지: " + endPage);
    // console.log("프리브블록 존재 : " + existPrev);
    // console.log("프리브블록: " + prevBlock);
    // console.log("넥스트블록 존재 : " + existNext);
    // console.log("넥스트블록: " + nextBlock);
    // console.log("마지막 페이지 : " + lastPage);
    // console.log(" *********** 페이지번호 END  *********** ");


    const solution = (pageNumber: number, pageSize: number) => {
        axios
            .post(
                url,
                { pageNumber: pageNumber, pageSize: pageSize },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(" 페이저 res.data : ", JSON.stringify(res.data));

                setRows(res.data.array);
            })
            .catch();
    };

    const first = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setCurrPage(1);
                solution(1, $pageSize);
            }}
            rev={undefined}
        />
    );

    const prev = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setCurrPage(prevBlock);
                solution(prevBlock, $pageSize);
            }}
            rev={undefined}
        />
    );

    const list = () => {
        const list = [];
        for (let i = startPage - 1; i < endPage; i++) {
            list.push(
                <li
                    key={i}
                    className={`inline-block px-3 py-1 mx-1 rounded border border-gray-300 cursor-pointer select-none transition-colors duration-150 ${pageNumber == i + 1 ? 'bg-orange-400 text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    onClick={() => {
                        setCurrPage(i + 1);
                        solution(i + 1, $pageSize);
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
                setCurrPage(nextBlock);
                solution(nextBlock, $pageSize);
            }}
            rev={undefined}
        />
    );

    const last = () => (
        <Button
            style={{ cursor: "pointer" }}
            onClick={() => {
                setCurrPage(lastPage); // pageSize
                solution(lastPage, $pageSize);
            }}
            rev={undefined}
        />
    );

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex gap-1">
                {existPrev && (
                    <>
                        <span>{first()}</span>
                        <span>{prev()}</span>
                    </>
                )}
                <ul className="flex items-center list-none p-0 m-0">{list()}</ul>
                {existNext && (
                    <>
                        <span>{next()}</span>
                        <span>{last()}</span>
                    </>
                )}
            </div>
        </div>
    );
}

//** https://gist.github.com/its-tayo/f51f8750ca37688b9fb8d7b389b32614 */

//** https://v3-2.adminbro.com/admin-bro-design-system_src_molecules_pagination.tsx.html */

export const Solution = (
    pageNumber: number,
    pageSize: number,
    url: string,
    accessToken: string
) => {
    const data: unknown = { pageNumber: pageNumber, pageSize: pageSize };

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
    };
    const rows = axios.post(url, data, { headers });
    return rows;
};