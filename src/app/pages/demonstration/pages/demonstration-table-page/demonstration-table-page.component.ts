import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositoryService } from '../../../../core/service/repository.service';

@Component({
  selector: 'app-demonstration-table-page',
  templateUrl: './demonstration-table-page.component.html',
  styleUrls: ['./demonstration-table-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemonstrationTablePageComponent implements OnInit {
  public tableItems: any[] = [];

  constructor(private repository: RepositoryService, private route: Router) {}

  public ngOnInit(): void {
    this.tableItems = this.repository.getTableItems();
  }

  public addTableItem(): void {
    this.route.navigate(['create']);
  }

  public updateTableItem(id: number): void {
    this.route.navigate(['update', id]);
  }
}
