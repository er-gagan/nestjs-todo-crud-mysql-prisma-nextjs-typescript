import { IsString, MinLength, IsBoolean } from 'class-validator';
export class UpdateTodoDto {
    @IsString()
    @MinLength(3)
    title?: string;

    description?: string;

    @IsBoolean()
    completed?: boolean;
}