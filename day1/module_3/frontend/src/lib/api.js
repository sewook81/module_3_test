// API 기본 URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

// API 클라이언트 클래스
class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  // GET 요청
  async get(endpoint, params = {}) {
    try {
      const url = new URL(`${this.baseURL}${endpoint}`);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API GET Error:', error);
      throw error;
    }
  }

  // POST 요청
  async post(endpoint, data = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API POST Error:', error);
      throw error;
    }
  }

  // PUT 요청
  async put(endpoint, data = {}) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API PUT Error:', error);
      throw error;
    }
  }

  // DELETE 요청
  async delete(endpoint) {
    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API DELETE Error:', error);
      throw error;
    }
  }
}

// API 클라이언트 인스턴스
const apiClient = new ApiClient();

// 로그 관련 API 함수들
export const logsApi = {
  // 로그 목록 조회
  getAll: (params) => apiClient.get('/logs', params),

  // 로그 상세 조회
  getById: (id) => apiClient.get(`/logs/${id}`),

  // 로그 생성
  create: (data) => apiClient.post('/logs', data),

  // 로그 삭제
  delete: (id) => apiClient.delete(`/logs/${id}`),
};

// 사용자 관련 API 함수들
export const usersApi = {
  // 사용자 목록 조회
  getAll: () => apiClient.get('/users'),

  // 사용자 정보 조회
  getById: (id) => apiClient.get(`/users/${id}`),

  // 사용자 생성
  create: (data) => apiClient.post('/users', data),

  // 사용자 수정
  update: (id, data) => apiClient.put(`/users/${id}`, data),

  // 사용자 삭제
  delete: (id) => apiClient.delete(`/users/${id}`),
};

// 알림 관련 API 함수들
export const alertsApi = {
  // 알림 규칙 목록 조회
  getAll: () => apiClient.get('/alerts'),

  // 알림 규칙 생성
  create: (data) => apiClient.post('/alerts', data),

  // 알림 규칙 수정
  update: (id, data) => apiClient.put(`/alerts/${id}`, data),

  // 알림 규칙 삭제
  delete: (id) => apiClient.delete(`/alerts/${id}`),
};

export default apiClient;
