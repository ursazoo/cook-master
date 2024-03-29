import request from '@/common/request';

interface APIResponse<T> {
    code: number;
    success: boolean;
    data: T;
    message: string;
  }

export const signin = (data: any): Promise<APIResponse<{token: string}>> => {
  return request.post('/api/user/signin', data);
};
