import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../../../core/service/repository.service';

@Component({
  selector: 'app-demonstration-create-page',
  templateUrl: './demonstration-create-page.component.html',
  styleUrls: ['./demonstration-create-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemonstrationCreatePageComponent implements OnInit {
  public formJson: any;

  constructor(private route: Router, private repository: RepositoryService) {}

  public ngOnInit(): void {
    this.formJson = this.repository.getFormById(0);
  }

  public createTableItem(item: any): void {
    this.repository.createTableItem(0, item);
    this.route.navigate(['']);
  }

  public back(): void {
    this.route.navigate(['']);
  }
}
