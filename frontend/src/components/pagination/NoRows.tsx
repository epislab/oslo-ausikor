import logo from '/public/images/banners/banner-2.jpg'
import Image from "next/image";
export default function NoRows() {
    return (
        <Image src={logo} width={400} height={300} alt="조회된 데이터가 없습니다." />
    );
}