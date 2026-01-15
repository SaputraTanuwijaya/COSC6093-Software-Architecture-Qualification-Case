import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UseGuards,
  Request,
  HttpException,
  Query,
} from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AppController {
  private readonly AUTH_SERVICE = 'http://localhost:3000';
  private readonly USER_SERVICE = 'http://localhost:3001';
  private readonly POST_SERVICE = 'http://localhost:3002';

  @Post('auth/register')
  async register(@Body() body: any) {
    try {
      const response = await axios.post(
        `${this.AUTH_SERVICE}/auth/register`,
        body,
      );
      return response.data;
    } catch (e) {
      throw new HttpException(
        e.response?.data || 'Service Unavailable',
        e.response?.status || 503,
      );
    }
  }

  @Post('auth/login')
  async login(@Body() body: any) {
    try {
      const response = await axios.post(
        `${this.AUTH_SERVICE}/auth/login`,
        body,
      );
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }

  @Get('users')
  async getUsers(@Request() req) {
    try {
      // Requirement: Forward the Token (Authorization Header)
      const token = req.headers.authorization;
      const response = await axios.get(`${this.USER_SERVICE}/users`, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }

  @Get('posts')
  async getPosts(@Request() req) {
    try {
      const token = req.headers.authorization;
      const response = await axios.get(`${this.POST_SERVICE}/posts`, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }

  @Post('posts')
  async createPost(@Body() body: any, @Request() req) {
    try {
      const token = req.headers.authorization;
      const response = await axios.post(`${this.POST_SERVICE}/posts`, body, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }

  @Delete('posts/:id')
  async deletePost(@Param('id') id: string, @Request() req) {
    try {
      const token = req.headers.authorization;
      const response = await axios.delete(`${this.POST_SERVICE}/posts/${id}`, {
        headers: { Authorization: token },
      });
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }
}
