import { Component } from '@angular/core';

@Component ({
  selector: 'app-server',
  templateUrl: 'server.component.html',
  styleUrls : ['./server.component.css']
})
export class ServerComponent {
  title = 'my-first-app';
  name = 'Jwala'
  allowNewServer = false
  serverCreationStatus = "Server not being created"
  value= ""
  servername = "Tests"
  testname = ""
  serverCreated = false
  serverStatus = 'offline'
  list = ['server','server1','server2']
  hide = true
  array =  []
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true
    },2000)

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = "Name of the server being created is" + this.servername
  }

  testHandler() {
    this.testname = ''
  }

  onUpdateServerName(event : any) {
    this.value = event.target.value
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red"
  }

  toggle(){
    this.hide = !this.hide
     this.array.push(this.array.length +1)

  }
}


