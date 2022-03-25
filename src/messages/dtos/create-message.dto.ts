import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @MaxLength(10)
  @IsOptional()
  content: string;
}
