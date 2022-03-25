import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findAll() {
    const fileContent = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(fileContent);

    return messages;
  }

  async findOne(id: string) {
    const fileContent = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(fileContent);

    return messages[id];
  }

  async create(content: string) {
    const fileContent = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(fileContent);

    const messageId = Math.floor(Math.random() * 999);

    const message = {
      id: messageId,
      content,
    };

    messages[messageId] = message;

    await writeFile('messages.json', JSON.stringify(messages));

    return message;
  }
}
