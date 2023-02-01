import { Component, OnInit } from '@angular/core';
import { WebSocketsService } from 'src/app/services/web-sockets.service';


@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})

export class ChatScreenComponent implements OnInit {
  title = 'Websocket Angular client ';
  userName = '';
  message = '';
  output: any[] = [];
  feedback = '';

  constructor( private WebSocketsService: WebSocketsService) { }
  ngOnInit(): void {
    this.WebSocketsService.listen('typing').subscribe((data) => this.updateFeedback(data));
    this.WebSocketsService.listen('chat').subscribe((data) => this.updateMessage(data));
  }

  messageTyping(): void {
    this.WebSocketsService.emit('typing', this.userName);    
  }

  sendMessage(): void {
    this.WebSocketsService.emit('chat', {
      message: this.message,
      handle: this.userName
    });
    this.message = "";    
  }

  updateMessage(data:any) {
    this.feedback = '';
    if(!!!data) return;
    console.log(`${data.handle} : ${data.message}`);
    this.output.push(data);
  }

  updateFeedback(data: any){
    this.feedback = `${data} is typing a message`;
  }
}
