import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrls: ['./feladat.component.css']
})
export class FeladatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  kepHelye: string = "https://www.google.com/search?q=angular&sxsrf=ALiCzsa766M9g2ISSh2CqtriuK84d_69UA:1651771340861&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjSkpbg78j3AhXB_7sIHaWUBsIQ_AUoAXoECAIQAw&biw=1920&bih=975&dpr=1#imgrc=zMVT-tzIv4v9fM";
  kepCime: string = "Angular Logo";
  kepMeret: string = "100";

  KepCsere(): void {
    this.kepHelye = "https://www.google.com/search?q=react&sxsrf=ALiCzsZ2nUVzf5ZKJMfCX-oAO-mZUvb3ag:1651773229379&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjWndjk9sj3AhUk8LsIHWA8B7wQ_AUoAXoECAEQAw&biw=1920&bih=975&dpr=1#imgrc=HD3eXsrstv-_cM";
    this.kepCime = "React Logo";
  }


  aOldal: number = 1;
  bOldal: number = 1;
}
