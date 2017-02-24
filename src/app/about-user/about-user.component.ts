import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/826500112549502976/kSENS3xJ_400x400.jpg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
];

@Component({
  selector: 'app-about-user',
  templateUrl: './about-user.component.html',
  styleUrls: ['./about-user.component.css']
})
export class AboutUserComponent implements OnInit {

  user;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // grab the current username
    let username = this.route.snapshot.params['username'];

    this.user = users.find(function(user) {
      return user.username === username;
    });
  }

}
