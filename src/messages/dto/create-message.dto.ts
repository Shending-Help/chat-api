import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateMessageDto {
  @ApiProperty({
    description: 'The content of the message',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({
    description: 'The user id of the message',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    description: 'The chat id of the message',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  chatId: number;

  @ApiProperty({
    description: 'The recipient id of the message',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  recipientId: number;
}
