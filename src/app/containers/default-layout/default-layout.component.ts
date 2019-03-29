import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItemsAdmin } from '../../navs/_navAdmin';
import { navItemsEmployee } from '../../navs/_navEmployee';
import { Router } from '@angular/router';
import { CarrierService } from '../../services/carrier.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  public navItems: any;
  userName: string;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private router: Router, 
              private services: CarrierService,
              @Inject(DOCUMENT) _document?: any
             ) {
    
    this.userName = this.services.parseJwt(localStorage.getItem('token')).user.user_name;
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

    if(this.services.parseJwt(localStorage.getItem('token')).user.user_type == 'A'){
      this.navItems = navItemsAdmin;
    }else{
      this.navItems = navItemsEmployee;
    }
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
