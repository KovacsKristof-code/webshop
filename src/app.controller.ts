import { Controller, Post, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import {WebStuffDto} from './wbstuff.dto.js'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS Ap'
    }
  }

  
@Get('webstuff')
@Render('webstuff')
getWebStuff() {
  
}

  @Post('webstuff')
  @Render('webstuff')
  WebStuff() {
    const orderedStuff: WebStuffDto[] = []


  }
}
