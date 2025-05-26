from enum import Enum

class InicisCardCode(Enum):
    외환카드 = "01"
    우리카드 = "02"
    롯데카드 = "03"
    현대카드 = "04"
    국민카드 = "06"
    비씨카드 = "11"
    삼성카드 = "12"
    신한카드 = "14"
    한미카드 = "15"
    NH카드 = "16"
    하나_SK카드 = "17"
    글로벌_VISA = "21"
    글로벌_MASTER = "22"
    글로벌_JCB = "23"
    글로벌_아멕스 = "24"
    글로벌_다이너스 = "25"
    은련카드 = "26"
    네이버포인트 = "91"
    토스머니 = "93"
    SSG머니 = "94"
    엘포인트 = "96"
    카카오머니 = "97"
    페이코_포인트 = "98"

    @classmethod
    def get_card_name(cls, code: str) -> str:
        """ 카드 코드에 해당하는 카드 이름 반환 """
        for card in cls:
            if card.value == code:
                return card.name
        return "알 수 없는 카드"

# ✅ 사용 예시
print(InicisCardCode.get_card_name("06"))  # 출력: 국민카드
print(InicisCardCode.get_card_name("99"))  # 출력: 알 수 없는 카드


# https://manual.inicis.com/pay/code.html '승인응답 시 카드코드' 참고
inicis_card_codes = {
    "01": "외환카드",
    "02": "우리카드",
    "03": "롯데카드",
    "04": "현대카드",
    "06": "국민카드",
    "11": "비씨카드",
    "12": "삼성카드",
    "14": "신한카드",
    "15": "한미카드",
    '16': "NH카드",
    '17': "하나 SK카드",
    '21': "글로벌 VISA",
    '22': "글로벌 MASTER",
    '23': "글로벌 JCB",
    '24': "글로벌 아멕스",
    '25': "글로벌 다이너스",
    '26': "은련카드",
    '91': "네이버포인트",
    '93': "토스머니",
    '94': "SSG머니",
    '96': "엘포인트",
    '97': "카카오머니",
    '98': "페이코 포인트",
}