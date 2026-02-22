import { Controller, Get, Post, Body } from '@nestjs/common';
import { GuestbookService } from './guestbook.service';

@Controller('guestbook')
export class GuestbookController {
  constructor(private readonly service: GuestbookService) {}

  @Get()
  getAll() { return this.service.getAll(); }

  @Post()
  create(@Body() body: { name: string; message: string }) {
    return this.service.insert(body.name, body.message);
  }
}