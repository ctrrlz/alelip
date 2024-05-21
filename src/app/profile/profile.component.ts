import { Component } from '@angular/core';
import { PointsService } from '../points.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  points: number = 0;
  amount: number = 0;

  constructor(private pointsService: PointsService){}

  calculatePoints():void{
    this.points = this.amount*10;
    this.pointsService.setPoints(this.points)
  }

  ngOnInit(): void{
    this.points = this.pointsService.getPoints();
  }

  
}
