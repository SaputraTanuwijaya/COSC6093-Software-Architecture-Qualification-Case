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
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import axios from 'axios';

@Controller()
@ApiTags('Gateway')
export class AppController {
  private readonly AUTH_SERVICE = 'http://localhost:3000';
  private readonly USER_SERVICE = 'http://localhost:3001';
  private readonly POST_SERVICE = 'http://localhost:3002';

  @Post('auth/register')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'student@binus.edu' },
        password: { type: 'string', example: 'secret123' },
        name: { type: 'string', example: 'Binusian' },
      },
    },
  })
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
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'student@binus.edu' },
        password: { type: 'string', example: 'secret123' },
      },
    },
  })
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
  @ApiBearerAuth() 
  async getUsers(@Request() req) {
    try {
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
  @ApiBearerAuth()
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
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'My Title' },
        content: { type: 'string', example: 'My Content' },
      },
    },
  })
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

  @Patch('posts/:id') 
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string', example: 'Updated Title' },
        content: { type: 'string', example: 'Updated Content' },
      },
    },
  })
  async updatePost(@Param('id') id: string, @Body() body: any, @Request() req) {
    try {
      const token = req.headers.authorization;
      const response = await axios.patch(
        `${this.POST_SERVICE}/posts/${id}`,
        body,
        {
          headers: { Authorization: token },
        },
      );
      return response.data;
    } catch (e) {
      throw new HttpException(e.response?.data, e.response?.status || 503);
    }
  }

  @Delete('posts/:id')
  @ApiBearerAuth()
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
