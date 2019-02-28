import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-offline',
  templateUrl: 'offline.page.html',
  styleUrls: ['offline.page.scss'],
})
export class OfflinePage implements OnInit {
 
  users = [];
 
  constructor(private apiService: ApiService, private plt: Platform) { }
 
  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadData(true);
    });
  }
 
  loadData(refresh = false, refresher?) {
    this.apiService.getUsers(refresh).subscribe(res => {
      this.users = res;
      if (refresher) {
        refresher.target.complete();
      }
    });
  }
 
  updateUser(id) {
    this.apiService.updateUser(id, {name: 'Simon', job: 'CEO'}).subscribe();
  }
}
