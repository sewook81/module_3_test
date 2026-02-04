from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

# FastAPI 앱 인스턴스 생성
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    docs_url=f"{settings.API_V1_STR}/docs",
    redoc_url=f"{settings.API_V1_STR}/redoc",
)

# CORS 미들웨어 설정
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.BACKEND_CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# 헬스체크 엔드포인트
@app.get("/")
async def root():
    return {
        "message": "방화벽 로그 모니터링 시스템 API",
        "version": settings.VERSION,
        "status": "running"
    }


@app.get("/health")
async def health_check():
    return {"status": "healthy"}


# API 라우터들을 여기에 추가 예정
# from app.api import logs, users, alerts
# app.include_router(logs.router, prefix=f"{settings.API_V1_STR}/logs", tags=["logs"])
# app.include_router(users.router, prefix=f"{settings.API_V1_STR}/users", tags=["users"])
# app.include_router(alerts.router, prefix=f"{settings.API_V1_STR}/alerts", tags=["alerts"])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )
