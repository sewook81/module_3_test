from pydantic_settings import BaseSettings
from typing import Optional


class Settings(BaseSettings):
    # 프로젝트 정보
    PROJECT_NAME: str = "방화벽 로그 모니터링 시스템"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"

    # CORS 설정
    BACKEND_CORS_ORIGINS: list = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ]

    # 데이터베이스 설정
    DATABASE_URL: str = "sqlite:///./database/firewall_logs.db"

    # JWT 설정
    SECRET_KEY: str = "your-secret-key-change-this-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7일

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
