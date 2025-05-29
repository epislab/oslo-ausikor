from app.domain.controller.titanic_controller import TitanicController
from app.domain.controller.matzip_controller import MatzipController
from app.domain.controller.crime_controller import CrimeController

def main():
    # Titanic 모델 실행
    titanic_controller = TitanicController()

    print("Titanic 모델 실행 시작")
    titanic_controller.preprocess()
    titanic_controller.learning()
    titanic_controller.evaluation()
    titanic_controller.deployment()
    print("Titanic 모델 실행 완료")

    # Matzip 모델 실행
    matzip_controller = MatzipController()

    print("\Matzip 모델 실행 시작")
    matzip_controller.preprocess()
    matzip_controller.learning()
    matzip_controller.evaluation()
    matzip_controller.deployment()
    print("Matzip 모델 실행 완료")

    # Crime 모델 실행
    crime_controller = CrimeController()
    
    print("\Crime 모델 실행 시작")
    crime_controller.preprocess("cctv_in_seoul.csv", "crime_in_seoul.csv", "pop_in_seoul.xls")
    crime_controller.learning()
    crime_controller.evaluation()
    crime_controller.deployment()
    print("Crime 모델 실행 완료")

if __name__ == "__main__": main()


















