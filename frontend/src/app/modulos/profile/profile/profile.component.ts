import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();
  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.profileService.buscarInfoUsuario().subscribe((data) => {
      this.profile = data.profile;
    })
  }

  logoff() {
    this.router.navigateByUrl('login')
  }
}
