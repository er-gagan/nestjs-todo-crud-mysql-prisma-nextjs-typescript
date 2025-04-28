// import { Module } from '@nestjs/common';
// import { TodoController } from './todo.controller';
// import { TodoService } from './todo.service';

// @Module({
//   controllers: [TodoController],
//   providers: [TodoService]
// })
// export class TodoModule {}


// src/todo/todo.module.ts
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],  // Add this line
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule { }