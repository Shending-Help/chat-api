import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}

  clientToUser = {};

  identifyClient(name: string, socketId: string) {
    this.clientToUser[socketId] = name;
    return Object.values(this.clientToUser);
  }

  getClientName(socketId: string) {
    return this.clientToUser[socketId];
  }

  async create(createMessageDto: CreateMessageDto) {
    const message = this.messageRepository.create(createMessageDto);
    return await this.messageRepository.save(message);
  }

  async findAll() {
    return await this.messageRepository.find();
  }
}
