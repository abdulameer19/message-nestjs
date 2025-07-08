import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { createMessageDto } from './create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()

    listMessages(){
        return "result"
    }
@Post()
    createMessages(@Body() body:createMessageDto){
        console.log(body)
    }
@Get('/:id')
    getMessage(@Param('id') id:string){
        return "result"
    }
}
