import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as io from 'socket.io-client';
import { AcceuilService } from 'src/app/services/acceuil.service';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css'],
})
export class ChatroomComponent implements OnInit, OnDestroy {
  userName: any = this.route.snapshot.paramMap.get('name');
  otheruser: string = '';
  message: any = '';
  messageList: { message: string; userName: string; mine: boolean }[] = [];
  listMessage: any;
  userList: string[] = [];
  socket: any;
  constructor(private route: ActivatedRoute, private service: AcceuilService) {}
  ngOnDestroy(): void {}
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    this.userList = this.userList.filter((obj) => {
      return obj !== this.userName;
    });
    this.message = this.userList.join(' ');
    this.sendMessage();
    this.socket.on('user-list', (userList: string[]) => {
      this.userList = userList;
    });
  }
  ngOnInit(): void {
    this.userNameUpdate();

    this.getMessages();
    this.changeMessage();
  }
  userNameUpdate(): void {
    this.socket = io.io(`localhost:3000?userName=${this.userName}`);

    // this.userName = name;

    this.socket.emit('set-user-name', this.userName);

    this.socket.on('user-list', (userList: string[]) => {
      this.userList = userList;
    });

    if (this.userList.length > 1) this.otheruser = this.userList[-2];
    else this.otheruser = 'yassine';

    this.socket.on(
      'message-broadcast',
      (data: { message: string; userName: string }) => {
        if (data) {
          this.messageList.push({
            message: data.message,
            userName: data.userName,
            mine: false,
          });
        }
      }
    );
  }

  sendMessage(): void {
    this.socket.emit('message', this.message);
    this.messageList.push({
      message: this.message,
      userName: this.userName,
      mine: true,
    });
    this.message = '';
  }

  sendBaseMessage() {
    let resp = this.service.addDiscussion({
      sender: this.userName,
      receiver: this.otheruser,
    });
    resp.subscribe((datas) => {
      this.message = datas;
      console.log(datas);
    });
  }

  createDiscussion() {
    let resp = this.service.addDiscussion({
      sender: this.userName,
      receiver: this.otheruser,
    });
    resp.subscribe();
  }
  getMessages() {
    let resp = this.service.enterDiscussion({
      refdisc: this.userName + '_' + this.otheruser,
      user: this.userName,
    });
    resp.subscribe((datas) => {
      this.listMessage = datas;
      console.log(datas);
    });
  }
  changeMessage() {
    this.listMessage.messages.array.forEach((element) => {
      this.messageList.push({
        message: element.contenu_msg,
        userName: element.sender,
        mine: element.sender == this.userName,
      });
    });
  }
}
